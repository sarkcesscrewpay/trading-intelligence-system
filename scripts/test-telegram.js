import dotenv from "dotenv";
import { sendTelegramMessage } from "../services/telegram.service.js";

dotenv.config();

async function runTest() {
  await sendTelegramMessage(`
🚀 *Trading Intelligence System Online*

Status: Connected

Markets:
• XAU/USD
• EUR/USD
• GBP/JPY
• USD/JPY
• BTC/USD

Mode:
High Accuracy
Minimal Alerts
Manual Execution
  `);

  process.exit(0);
}

runTest();