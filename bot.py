"""
RoboNexus Telegram Bot — Backend
Запуск: python bot.py
Залежності: pip install python-telegram-bot==21.10
"""

import logging
import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

# ─── Конфігурація ────────────────────────────────────────────────────────────
BOT_TOKEN = os.environ.get("BOT_TOKEN", "8748324299:AAE-v-Kgfaq9ARPLU01vhXPKdOwrbg3ld1c")
WEBAPP_URL = os.environ.get("WEBAPP_URL", "https://botv0-1-m-fed-orov.vercel.app")
WELCOME_PHOTO = "images/bot_welcome.jpg"               # локальний шлях АБО file_id після першого відправлення

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
    app = Application.builder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    logger.info("RoboNexus Bot запущено...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
