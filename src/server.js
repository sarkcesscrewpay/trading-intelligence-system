import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import tradingViewWebhook from "../webhooks/tradingview.webhook.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// =====================================
// Security
// =====================================

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: Number(process.env.WEBHOOK_MAX_REQUESTS || 100),
    message: {
      success: false,
      message: "Too many requests"
    }
  })
);

// =====================================
// Health Check
// =====================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "Trading Intelligence System",
    status: "running",
    environment: process.env.NODE_ENV,
    timezone: process.env.TIMEZONE,
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// =====================================
// TradingView Webhook
// =====================================

app.use("/webhook/tradingview", tradingViewWebhook);

// =====================================
// Start Server
// =====================================

app.listen(PORT, () => {
  console.log(`
==================================
🚀 Trading Intelligence Online
==================================
PORT: ${PORT}
TIMEZONE: ${process.env.TIMEZONE}
HEALTH:
http://localhost:${PORT}/health
==================================
`);
});