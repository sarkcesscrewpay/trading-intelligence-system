# exness-deriv-integration.md

## Purpose

Act as the Broker Execution Intelligence Layer.

This skill validates whether real broker conditions are safe for manual execution.

Role in architecture:

Exness / Deriv = Execution Reality Layer

Primary objective:

Protect against bad execution conditions.

Core philosophy:

A perfect setup under bad broker conditions = WAIT.

When broker conditions unsafe:
→ WAIT

---

## 1. Architecture Role

System flow:

Exness MT4/MT5
+
Deriv
→ Live Broker Conditions
→ master-trading-brain.md
→ Final Decision

This layer validates:

- spread conditions
- execution quality
- slippage risk
- abnormal volatility
- liquidity quality

TradingView detects setups.
Broker layer validates reality.

---

## 2. Markets Covered

Monitor ONLY:

- XAU/USD
- EUR/USD
- GBP/JPY
- USD/JPY
- BTC/USD

Ignore unrelated symbols.

---

## 3. Spread Monitoring

The system MUST monitor:

Real-time spread.

Classify:

### NORMAL

Spread healthy.

Action:
Safe.

---

### ELEVATED

Spread slightly above average.

Action:
Reduce confidence.

---

### HIGH

Spread widened significantly.

Action:
WAIT.

---

### ABNORMAL

Major spread spike.

Action:
Immediate WAIT.

---

## 4. Broker Spread Rules

### XAU/USD

Very sensitive to spread spikes.

If spread unstable:
→ WAIT

---

### EUR/USD

Normally tight spread.

Unexpected widening:
→ macro warning.

---

### GBP/JPY

Naturally volatile.

Require stronger conditions.

Minimum confidence:
80+

---

### USD/JPY

Monitor:
- BOJ news
- volatility spikes

---

### BTC/USD

Higher volatility tolerated.

But:
Extreme spread
→ WAIT

---

## 5. Slippage Detection

The system MUST detect:

- unusual price gaps
- delayed execution risk
- unstable price movement

Signs:

- abnormal candle jumps
- execution mismatch
- sudden spread widening

Rules:

Slippage risk elevated:
→ WAIT

---

## 6. Liquidity Conditions

Safe liquidity:

✓ London open
✓ New York open
✓ overlap

Dangerous liquidity:

✗ late session
✗ rollover period
✗ holiday trading
✗ pre-news manipulation

Rules:

Poor liquidity:
→ WAIT

---

## 7. Broker Health Status

Possible states:

HEALTHY
CAUTION
UNSTABLE
UNSAFE

Rules:

HEALTHY:
Proceed normally.

CAUTION:
Reduce confidence.

UNSTABLE:
Prefer WAIT.

UNSAFE:
No setup allowed.

---

## 8. Confidence Adjustments

Healthy conditions:
+10 confidence

Elevated spread:
-10 confidence

High spread:
WAIT

Abnormal spread:
WAIT

Slippage risk:
-15 confidence

Good liquidity:
+5 confidence

---

## 9. Execution Reality Check

Before EXECUTE:

Verify:

✓ spread acceptable
✓ broker stable
✓ liquidity healthy
✓ no slippage risk
✓ no abnormal volatility

If any critical condition fails:
→ WAIT

---

## 10. Broker Override Rules

Broker conditions override technical setups.

Example:

TradingView:
XAU/USD = 90 confidence

Broker:
spread spike

Final Decision:
WAIT

Execution reality beats chart perfection.

---

## 11. VPS Monitoring

The VPS MUST monitor:

- broker latency
- connection health
- feed stability
- MT4/MT5 status

Rules:

Connection unstable:
→ WAIT

Feed delayed:
→ WAIT

---

## 12. Update Frequency

Refresh broker data:

Every 15–30 seconds.

During EXECUTE state:
Every 5–10 seconds.

During news:
Increase monitoring frequency.

---

## 13. WhatsApp Broker Alert Template

⚠ EXECUTION CONDITIONS UPDATE

PAIR:

BROKER STATUS:

SPREAD STATUS:

LIQUIDITY:

SLIPPAGE RISK:

FINAL STATE:

WHY:

Example:

PAIR: XAU/USD
BROKER STATUS: HEALTHY
SPREAD: NORMAL
LIQUIDITY: GOOD
SLIPPAGE: LOW
FINAL STATE: SAFE
WHY:
Execution conditions healthy.

---

## 14. Anti-Hallucination Rules

The AI MUST NEVER:

- invent broker spreads
- assume broker conditions
- fake execution quality
- ignore real spread spikes

Only use verified broker data.

If uncertain:
→ WAIT

Prime rule:
Real execution conditions matter more than perfect chart setups.

