import express from "express";

import { sendTelegramMessage }
from "../services/telegram.service.js";

import { analyzeMarket }
from "../services/reasoning.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payload = req.body;

    console.log(
      "📈 TradingView Alert Received"
    );

    console.log(payload);

    const analysis =
      await analyzeMarket(payload);

    await sendTelegramMessage(
      `📊 *AI Market Analysis*\n\n${analysis}`
    );

    return res.status(200).json({
      success: true,
      analysis
    });
  } catch (error) {
    console.error(
      "Webhook Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Webhook failed"
    });
  }
});

export default router;