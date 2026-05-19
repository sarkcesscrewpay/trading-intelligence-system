import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payload = req.body;

    console.log("📈 TradingView Alert Received:");
    console.log(payload);

    // TODO:
    // 1. Validate webhook secret
    // 2. TradingView live confirmation
    // 3. ForexFactory macro check
    // 4. Claude reasoning
    // 5. WhatsApp alert

    return res.status(200).json({
      success: true,
      message: "TradingView alert received",
      receivedAt: new Date().toISOString(),
      data: payload
    });
  } catch (error) {
    console.error("Webhook Error:", error);

    return res.status(500).json({
      success: false,
      message: "Webhook failed"
    });
  }
});

export default router;