import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!token) {
  throw new Error("Missing TELEGRAM_BOT_TOKEN in .env");
}

if (!chatId) {
  throw new Error("Missing TELEGRAM_CHAT_ID in .env");
}

const bot = new TelegramBot(token, {
  polling: false
});

export async function sendTelegramMessage(message) {
  try {
    await bot.sendMessage(chatId, message, {
      parse_mode: "Markdown"
    });

    console.log("✅ Telegram message sent");
  } catch (error) {
    console.error("❌ Telegram send failed:", error.message);
  }
}

export default bot;