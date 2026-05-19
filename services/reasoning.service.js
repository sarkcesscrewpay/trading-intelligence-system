import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const SYSTEM_PROMPT_PATH = path.resolve(
  "prompts/market-analysis.system.md"
);

const MEMORY_PATH = path.resolve(
  "memory/trading-memory.json"
);

function loadSystemPrompt() {
  return fs.readFileSync(
    SYSTEM_PROMPT_PATH,
    "utf8"
  );
}

function loadMemory() {
  try {
    const raw = fs.readFileSync(
      MEMORY_PATH,
      "utf8"
    );

    return JSON.parse(raw);
  } catch {
    return {
      openTrades: [],
      lastDecisions: [],
      dailyPnL: 0,
      tradeCountToday: 0
    };
  }
}

function saveMemory(memory) {
  fs.writeFileSync(
    MEMORY_PATH,
    JSON.stringify(memory, null, 2)
  );
}

export async function analyzeMarket(payload) {
  try {
    const systemPrompt = loadSystemPrompt();

    const memory = loadMemory();

    const userPrompt = `
MARKET ALERT RECEIVED

PAIR: ${payload.pair}
PRICE: ${payload.price || "unknown"}
SESSION: ${payload.session || "unknown"}
TIMEFRAME: ${payload.timeframe || "5m"}

TECHNICALS:
RSI: ${payload.rsi || "unknown"}
MACD: ${payload.macd || "unknown"}
EMA TREND: ${payload.ema || "unknown"}
BOLLINGER: ${payload.bb || "unknown"}
CANDLE: ${payload.candle || "unknown"}

SMART MONEY:
AMD: ${payload.amd || "unknown"}
FVG: ${payload.fvg || "unknown"}
LIQUIDITY SWEEP:
${payload.liquidity || "unknown"}

MACRO:
POWELL:
${payload.powell || false}

RED NEWS:
${payload.redNews || false}

VIX:
${payload.vix || "unknown"}

LAST DECISIONS:
${JSON.stringify(memory.lastDecisions)}

OPEN TRADES:
${JSON.stringify(memory.openTrades)}
`;

    const response =
      await anthropic.messages.create({
        model:
          process.env.CLAUDE_MODEL ||
          "claude-sonnet-4",

        max_tokens: 1000,

        system: systemPrompt,

        messages: [
          {
            role: "user",
            content: userPrompt
          }
        ]
      });

    const result =
      response.content[0]?.text ||
      "WAIT";

    memory.lastDecisions.push({
      time: new Date().toISOString(),
      result
    });

    memory.lastDecisions =
      memory.lastDecisions.slice(-3);

    saveMemory(memory);

    return result;
  } catch (error) {
    console.error(
      "Reasoning Error:",
      error
    );

    return `
PAIR: UNKNOWN
STATE: WAIT
CONFIDENCE: 0
FINAL VERDICT:
SYSTEM ERROR
`;
  }
}