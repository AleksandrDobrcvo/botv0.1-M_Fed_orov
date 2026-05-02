"""
RoboNexus Telegram Bot — Backend
Запуск: python bot.py
Залежності: pip install python-telegram-bot==21.10
"""

import asyncio
import html
import json
import logging
import os
from datetime import datetime, timezone
from urllib import error, request

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update, WebAppInfo
from telegram.error import TelegramError
from telegram.ext import Application, CommandHandler, ContextTypes

# ─── Конфігурація ────────────────────────────────────────────────────────────
BOT_TOKEN = os.environ.get("BOT_TOKEN", "8748324299:AAE-v-Kgfaq9ARPLU01vhXPKdOwrbg3ld1c")
WEBAPP_URL = os.environ.get("WEBAPP_URL", "https://botv0-1-m-fed-orov.vercel.app")
WELCOME_PHOTO = "images/bot_welcome.jpg"               # локальний шлях АБО file_id після першого відправлення
FIREBASE_DATABASE_URL = os.environ.get("FIREBASE_DATABASE_URL", "https://mfedorov-521cc-default-rtdb.firebaseio.com")
NOTIFICATION_POLL_SECONDS = max(10, int(os.environ.get("NOTIFICATION_POLL_SECONDS", "15")))
NOTIFICATION_BATCH_SIZE = max(1, int(os.environ.get("NOTIFICATION_BATCH_SIZE", "8")))

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# ─── Переклади для бот-повідомлень ───────────────────────────────────────────
_T = {
    "ru": {
        "notification": "Уведомление RoboNexus",
        "new_event": "У вас новое событие в аккаунте.",
        "footer_success": "Изменения уже применены в вашем аккаунте.",
        "footer_error": "Проверьте детали в приложении и при необходимости повторите действие.",
        "footer_support": "Откройте RoboNexus, чтобы ответить или посмотреть переписку.",
        "footer_info": "Откройте RoboNexus, чтобы посмотреть подробности.",
        "time_label": "Время",
        "open_app": "Открыть RoboNexus",
        "amount": "Сумма",
        "accrual": "Начисление",
        "heroes_count": "Героев с выплатой",
        "cycles_closed": "Закрыто циклов",
        "ref_level": "Реферальный уровень",
        "operation": "Операция",
        "network_fee": "Сетевой сбор",
        "reason": "Причина",
        "op_deposit": "Пополнение",
        "op_withdraw": "Вывод",
    },
    "ua": {
        "notification": "Сповіщення RoboNexus",
        "new_event": "У вас нова подія в акаунті.",
        "footer_success": "Зміни вже застосовано у вашому акаунті.",
        "footer_error": "Перевірте деталі в додатку та за потреби повторіть дію.",
        "footer_support": "Відкрийте RoboNexus, щоб відповісти або переглянути листування.",
        "footer_info": "Відкрийте RoboNexus, щоб переглянути подробиці.",
        "time_label": "Час",
        "open_app": "Відкрити RoboNexus",
        "amount": "Сума",
        "accrual": "Нарахування",
        "heroes_count": "Героїв з виплатою",
        "cycles_closed": "Закрито циклів",
        "ref_level": "Реферальний рівень",
        "operation": "Операція",
        "network_fee": "Комісія мережі",
        "reason": "Причина",
        "op_deposit": "Поповнення",
        "op_withdraw": "Виведення",
    },
}


def _lang(note: dict) -> str:
    """Returns 'ua' or 'ru' based on notification's lang field."""
    return "ua" if str(note.get("lang") or "").lower() == "ua" else "ru"


def _t(note: dict, key: str) -> str:
    return _T[_lang(note)].get(key, _T["ru"].get(key, key))


WELCOME_TEXT_UA = (
    "🚀 <b>Ласкаво просимо до RoboNexus!</b> 🤖\n\n"
    "Світ роботів та прибутку вже відкритий для тебе.\n\n"
    "У тебе є можливість:\n\n"
    "🤖 Купувати героїв\n"
    "📈 Отримувати щоденний прибуток у RNX\n"
    "💸 Обмінювати RNX на TON\n"
    "🤝 Заробляти з партнерської програми\n\n"
    "🎁 Новим користувачам доступний тестовий герой.\n\n"
    "👇 Натискай кнопку нижче та розпочинай гру.\n\n"
    "💎 <b>RoboNexus</b> — твоя кібер-імперія стартує зараз."
)

WELCOME_TEXT_RU = (
    "🚀 <b>Добро пожаловать в RoboNexus!</b> 🤖\n\n"
    "Мир роботов и прибыли уже открыт для тебя.\n\n"
    "У тебя есть возможность:\n\n"
    "🤖 Покупать героев\n"
    "📈 Получать ежедневный доход в RNX\n"
    "💸 Обменивать RNX на TON\n"
    "🤝 Зарабатывать с партнёрской программы\n\n"
    "🎁 Новым пользователям доступен тестовый герой.\n\n"
    "👇 Нажимай кнопку ниже и начинай игру.\n\n"
    "💎 <b>RoboNexus</b> — твоя кибер-империя стартует сейчас."
)


def firebase_url(path: str) -> str:
    return f"{FIREBASE_DATABASE_URL.rstrip('/')}/{path.lstrip('/')}.json"


def firebase_get(path: str):
    req = request.Request(firebase_url(path), method="GET")
    with request.urlopen(req, timeout=20) as response:
        payload = response.read().decode("utf-8")
    return json.loads(payload) if payload else None


def firebase_put(path: str, payload) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    req = request.Request(
        firebase_url(path),
        data=body,
        headers={"Content-Type": "application/json"},
        method="PUT",
    )
    with request.urlopen(req, timeout=20):
        return None


def format_datetime_label(value: str) -> str:
    """Formats ISO datetime string to dd.mm.yyyy HH:MM (UTC)."""
    if not value:
        return "—"
    try:
        dt = datetime.fromisoformat(value.replace("Z", "+00:00"))
        return dt.strftime("%d.%m.%Y %H:%M UTC")
    except (ValueError, AttributeError):
        return value


def build_details(note: dict) -> list[str]:
    meta = note.get("meta") or {}
    details: list[str] = []

    amount = meta.get("amount")
    currency = meta.get("currency")
    if amount not in (None, "") and currency:
        details.append(f"{_t(note, 'amount')}: <b>{html.escape(str(amount))} {html.escape(str(currency))}</b>")

    reward = meta.get("reward")
    if reward not in (None, "") and currency and amount in (None, ""):
        details.append(f"{_t(note, 'accrual')}: <b>{html.escape(str(reward))} {html.escape(str(currency))}</b>")

    if meta.get("heroesCount"):
        details.append(f"{_t(note, 'heroes_count')}: <b>{html.escape(str(meta['heroesCount']))}</b>")

    if meta.get("cyclesCount"):
        details.append(f"{_t(note, 'cycles_closed')}: <b>{html.escape(str(meta['cyclesCount']))}</b>")

    if meta.get("level"):
        details.append(f"{_t(note, 'ref_level')}: <b>{html.escape(str(meta['level']))}</b>")

    if meta.get("requestType"):
        request_map = {
            "deposit": _t(note, "op_deposit"),
            "withdraw": _t(note, "op_withdraw"),
        }
        details.append(f"{_t(note, 'operation')}: <b>{request_map.get(meta['requestType'], meta['requestType'])}</b>")

    if meta.get("networkFee"):
        details.append(f"{_t(note, 'network_fee')}: <b>{html.escape(str(meta['networkFee']))} TON</b>")

    if meta.get("reason"):
        details.append(f"{_t(note, 'reason')}: <b>{html.escape(str(meta['reason']))}</b>")

    return details


def build_notification_message(note: dict) -> str:
    kind = note.get("type") or "info"
    icon = {
        "success": "✅",
        "error": "⚠️",
        "support": "💬",
        "info": "✨",
    }.get(kind, "🔔")

    footer_key = f"footer_{kind}" if f"footer_{kind}" in _T["ru"] else "footer_info"
    footer = _t(note, footer_key)

    title = html.escape(str(note.get("title") or _t(note, "notification")))
    message = html.escape(str(note.get("message") or _t(note, "new_event")))
    created_at = format_datetime_label(str(note.get("createdAt") or ""))
    details = build_details(note)
    details_block = "\n".join(f"• {line}" for line in details)

    parts = [
        f"{icon} <b>{title}</b>",
        "",
        message,
    ]

    if details_block:
        parts.extend(["", details_block])

    parts.extend([
        "",
        f"<b>{_t(note, 'time_label')}:</b> <code>{html.escape(created_at)}</code>",
        footer,
        "",
        f"<a href=\"{html.escape(WEBAPP_URL, quote=True)}\">{_t(note, 'open_app')}</a>",
    ])
    return "\n".join(parts)


def should_deliver(note: dict) -> bool:
    telegram_state = note.get("telegram") or {}
    status = telegram_state.get("status")
    audience = note.get("audience")
    user_id = str(telegram_state.get("chatId") or note.get("userId") or "")
    return bool(telegram_state.get("enabled")) and status in {"pending", "retry"} and audience == "user" and user_id.isdigit()


async def deliver_pending_notifications(application: Application) -> None:
    try:
        notifications = await asyncio.to_thread(firebase_get, "notifications")
    except error.URLError:
        logger.exception("Не вдалося отримати notifications з Firebase")
        return

    if not isinstance(notifications, list) or not notifications:
        return

    changed = False
    processed = 0

    for note in notifications:
        if processed >= NOTIFICATION_BATCH_SIZE:
            break
        if not isinstance(note, dict) or not should_deliver(note):
            continue

        processed += 1
        telegram_state = note.get("telegram") or {}
        attempts = int(telegram_state.get("attempts") or 0) + 1
        chat_id = int(str(telegram_state.get("chatId") or note.get("userId") or "0"))

        try:
            await application.bot.send_message(
                chat_id=chat_id,
                text=build_notification_message(note),
                parse_mode="HTML",
                disable_web_page_preview=True,
            )
            note["telegram"] = {
                **telegram_state,
                "enabled": True,
                "status": "sent",
                "sentAt": datetime.now(timezone.utc).isoformat(),
                "attempts": attempts,
                "lastError": "",
                "chatId": str(chat_id),
            }
        except TelegramError as exc:
            next_status = "retry" if attempts < 5 else "failed"
            note["telegram"] = {
                **telegram_state,
                "enabled": True,
                "status": next_status,
                "sentAt": telegram_state.get("sentAt", ""),
                "attempts": attempts,
                "lastError": str(exc),
                "chatId": str(chat_id),
            }
            logger.warning("Не вдалося доставити сповіщення %s: %s", note.get("id"), exc)

        changed = True

    if changed:
        try:
            await asyncio.to_thread(firebase_put, "notifications", notifications)
        except error.URLError:
            logger.exception("Не вдалося зберегти статуси notifications у Firebase")


async def notification_worker(application: Application) -> None:
    while True:
        try:
            await deliver_pending_notifications(application)
        except Exception:
            logger.exception("Помилка воркера Telegram-сповіщень")
        await asyncio.sleep(NOTIFICATION_POLL_SECONDS)


async def post_init(application: Application) -> None:
    application.create_task(notification_worker(application))
    logger.info("Воркер Telegram-сповіщень запущено")


def build_keyboard(is_ua: bool = True, ref_code: str | None = None) -> InlineKeyboardMarkup:
    """Формує inline-клавіатуру до /start повідомлення."""
    webapp_url = WEBAPP_URL
    if ref_code:
        webapp_url = f"{WEBAPP_URL}?ref={ref_code}"

    open_label = "🎮 Відкрити RoboNexus" if is_ua else "🎮 Открыть RoboNexus"
    news_label = "📢 Новини" if is_ua else "📢 Новости"
    chat_label = "💬 Чат"

    keyboard = [
        [InlineKeyboardButton(open_label, web_app=WebAppInfo(url=webapp_url))],
        [
            InlineKeyboardButton(news_label, url="https://t.me/RoboNexusOfficial"),
            InlineKeyboardButton(chat_label, url="https://t.me/RoboNexus_bots"),
        ],
    ]
    return InlineKeyboardMarkup(keyboard)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обробник команди /start."""
    user = update.effective_user
    ref_code: str | None = None

    # Визначаємо мову користувача за налаштуваннями Telegram
    tg_lang = (user.language_code or "").lower() if user else ""
    is_ua = tg_lang.startswith("uk") or tg_lang.startswith("ua")
    welcome_text = WELCOME_TEXT_UA if is_ua else WELCOME_TEXT_RU

    if context.args:
        arg = context.args[0]
        if arg.startswith("ref_"):
            ref_code = arg

    keyboard = build_keyboard(is_ua=is_ua, ref_code=ref_code)

    try:
        with open(WELCOME_PHOTO, "rb") as photo_file:
            await update.message.reply_photo(
                photo=photo_file,
                caption=welcome_text,
                parse_mode="HTML",
                reply_markup=keyboard,
            )
    except FileNotFoundError:
        await update.message.reply_text(
            welcome_text,
            parse_mode="HTML",
            reply_markup=keyboard,
        )


def main() -> None:
    app = Application.builder().token(BOT_TOKEN).post_init(post_init).build()
    app.add_handler(CommandHandler("start", start))
    logger.info("RoboNexus Bot запущено...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()


logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)

WELCOME_TEXT = (
    "🚀 <b>Ласкаво просимо до RoboNexus!</b> 🤖\n\n"
    "Світ роботів та прибутку вже відкритий для тебе.\n\n"
    "У тебе є можливість:\n\n"
    "🤖 Купувати героїв\n"
    "📈 Отримувати щоденний прибуток у RNX\n"
    "💸 Обмінювати RNX на TON\n"
    "🤝 Заробляти з партнерської програми\n\n"
    "🎁 Новим користувачам доступний тестовий герой.\n\n"
    "👇 Натискай кнопку нижче та розпочинай гру.\n\n"
    "💎 <b>RoboNexus</b> — твоя кібер-імперія стартує зараз."
)


def firebase_url(path: str) -> str:
    return f"{FIREBASE_DATABASE_URL.rstrip('/')}/{path.lstrip('/')}.json"


def firebase_get(path: str):
    req = request.Request(firebase_url(path), method="GET")
    with request.urlopen(req, timeout=20) as response:
        payload = response.read().decode("utf-8")
    return json.loads(payload) if payload else None


def firebase_put(path: str, payload) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    req = request.Request(
        firebase_url(path),
        data=body,
        headers={"Content-Type": "application/json"},
        method="PUT",
    )
    with request.urlopen(req, timeout=20):
        return None


def format_datetime_label(value: str) -> str:
    if not value:
        return "сейчас"
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).strftime("%d.%m.%Y %H:%M")
    except ValueError:
        return value


def build_details(note: dict) -> list[str]:
    meta = note.get("meta") or {}
    details: list[str] = []

    amount = meta.get("amount")
    currency = meta.get("currency")
    if amount not in (None, "") and currency:
        details.append(f"Сумма: <b>{html.escape(str(amount))} {html.escape(str(currency))}</b>")

    reward = meta.get("reward")
    if reward not in (None, "") and currency and amount in (None, ""):
        details.append(f"Начисление: <b>{html.escape(str(reward))} {html.escape(str(currency))}</b>")

    if meta.get("heroesCount"):
        details.append(f"Героев с выплатой: <b>{html.escape(str(meta['heroesCount']))}</b>")

    if meta.get("cyclesCount"):
        details.append(f"Закрыто циклов: <b>{html.escape(str(meta['cyclesCount']))}</b>")

    if meta.get("level"):
        details.append(f"Реферальный уровень: <b>{html.escape(str(meta['level']))}</b>")

    if meta.get("requestType"):
        request_map = {
            "deposit": "Пополнение",
            "withdraw": "Вывод",
        }
        details.append(f"Операция: <b>{request_map.get(meta['requestType'], meta['requestType'])}</b>")

    if meta.get("networkFee"):
        details.append(f"Сетевой сбор: <b>{html.escape(str(meta['networkFee']))} TON</b>")

    if meta.get("reason"):
        details.append(f"Причина: <b>{html.escape(str(meta['reason']))}</b>")

    return details


def build_notification_message(note: dict) -> str:
    kind = note.get("type") or "info"
    icon = {
        "success": "✅",
        "error": "⚠️",
        "support": "💬",
        "info": "✨",
    }.get(kind, "🔔")
    footer = {
        "success": "Изменения уже применены в вашем аккаунте.",
        "error": "Проверьте детали в приложении и при необходимости повторите действие.",
        "support": "Откройте RoboNexus, чтобы ответить или посмотреть переписку.",
        "info": "Откройте RoboNexus, чтобы посмотреть подробности.",
    }.get(kind, "Откройте RoboNexus, чтобы посмотреть подробности.")

    title = html.escape(str(note.get("title") or "Уведомление RoboNexus"))
    message = html.escape(str(note.get("message") or "У вас новое событие в аккаунте."))
    created_at = format_datetime_label(str(note.get("createdAt") or ""))
    details = build_details(note)
    details_block = "\n".join(f"• {line}" for line in details)

    parts = [
        f"{icon} <b>{title}</b>",
        "",
        message,
    ]

    if details_block:
        parts.extend(["", details_block])

    parts.extend([
        "",
        f"<b>Время:</b> <code>{html.escape(created_at)}</code>",
        footer,
        "",
        f"<a href=\"{html.escape(WEBAPP_URL, quote=True)}\">Открыть RoboNexus</a>",
    ])
    return "\n".join(parts)


def should_deliver(note: dict) -> bool:
    telegram_state = note.get("telegram") or {}
    status = telegram_state.get("status")
    audience = note.get("audience")
    user_id = str(telegram_state.get("chatId") or note.get("userId") or "")
    return bool(telegram_state.get("enabled")) and status in {"pending", "retry"} and audience == "user" and user_id.isdigit()


async def deliver_pending_notifications(application: Application) -> None:
    try:
        notifications = await asyncio.to_thread(firebase_get, "notifications")
    except error.URLError:
        logger.exception("Не удалось получить notifications из Firebase")
        return

    if not isinstance(notifications, list) or not notifications:
        return

    changed = False
    processed = 0

    for note in notifications:
        if processed >= NOTIFICATION_BATCH_SIZE:
            break
        if not isinstance(note, dict) or not should_deliver(note):
            continue

        processed += 1
        telegram_state = note.get("telegram") or {}
        attempts = int(telegram_state.get("attempts") or 0) + 1
        chat_id = int(str(telegram_state.get("chatId") or note.get("userId") or "0"))

        try:
            await application.bot.send_message(
                chat_id=chat_id,
                text=build_notification_message(note),
                parse_mode="HTML",
                disable_web_page_preview=True,
            )
            note["telegram"] = {
                **telegram_state,
                "enabled": True,
                "status": "sent",
                "sentAt": datetime.utcnow().isoformat() + "Z",
                "attempts": attempts,
                "lastError": "",
                "chatId": str(chat_id),
            }
        except TelegramError as exc:
            next_status = "retry" if attempts < 5 else "failed"
            note["telegram"] = {
                **telegram_state,
                "enabled": True,
                "status": next_status,
                "sentAt": telegram_state.get("sentAt", ""),
                "attempts": attempts,
                "lastError": str(exc),
                "chatId": str(chat_id),
            }
            logger.warning("Не удалось доставить уведомление %s: %s", note.get("id"), exc)

        changed = True

    if changed:
        try:
            await asyncio.to_thread(firebase_put, "notifications", notifications)
        except error.URLError:
            logger.exception("Не удалось сохранить статусы notifications в Firebase")


async def notification_worker(application: Application) -> None:
    while True:
        try:
            await deliver_pending_notifications(application)
        except Exception:
            logger.exception("Ошибка воркера Telegram-уведомлений")
        await asyncio.sleep(NOTIFICATION_POLL_SECONDS)


async def post_init(application: Application) -> None:
    application.create_task(notification_worker(application))
    logger.info("Воркер Telegram-уведомлений запущен")


def build_keyboard(ref_code: str | None = None) -> InlineKeyboardMarkup:
    """Формує inline-клавіатуру до /start повідомлення."""
    webapp_url = WEBAPP_URL
    if ref_code:
        # Передаємо реферальний код через startapp параметр WebApp
        webapp_url = f"{WEBAPP_URL}?ref={ref_code}"

    keyboard = [
        [
            InlineKeyboardButton(
                "🎮 Відкрити RoboNexus",
                web_app=WebAppInfo(url=webapp_url)
            )
        ],
        [
            InlineKeyboardButton("📢 Новини", url="https://t.me/RoboNexusOfficial"),
            InlineKeyboardButton("💬 Чат",    url="https://t.me/RoboNexus_bots"),
        ],
    ]
    return InlineKeyboardMarkup(keyboard)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обробник команди /start."""
    user = update.effective_user
    ref_code: str | None = None

    # Зчитуємо реферальний код з параметра /start ref_XXXXX
    if context.args:
        arg = context.args[0]
        if arg.startswith("ref_"):
            ref_code = arg  # передасться у WebApp через URL

    keyboard = build_keyboard(ref_code)

    try:
        with open(WELCOME_PHOTO, "rb") as photo_file:
            await update.message.reply_photo(
                photo=photo_file,
                caption=WELCOME_TEXT,
                parse_mode="HTML",
                reply_markup=keyboard,
            )
    except FileNotFoundError:
        # Якщо фото не знайдено — відправляємо тільки текст
        await update.message.reply_text(
            WELCOME_TEXT,
            parse_mode="HTML",
            reply_markup=keyboard,
        )


def main() -> None:
    app = Application.builder().token(BOT_TOKEN).post_init(post_init).build()
    app.add_handler(CommandHandler("start", start))
    logger.info("RoboNexus Bot запущено...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
