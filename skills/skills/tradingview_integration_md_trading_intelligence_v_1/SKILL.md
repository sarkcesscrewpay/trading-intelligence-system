# tradingview-integration.md

## Purpose

Act as the primary chart intelligence source.

TradingView provides:

- live market structure
- multi-timeframe candles
- session context
- liquidity levels
- AMD pattern detection
- FVG detection
- alert triggers
- kill zone timing

Role in architecture:

TradingView = Chart Intelligence Layer

It does NOT make final decisions.

Final reasoning belongs to:
master-trading-brain.md

---

## 1. Architecture

System flow:

TradingView
→ Pine Script Detection
→ Webhook Alert
→ OpenClaw / Claude Brain
→ Skill Reasoning
→ WhatsApp Intelligence Report

Supporting systems:

Exness / Deriv:
Spread + broker conditions

ForexFactory:
Macro event filter

---

## 2. Markets

Monitor ONLY:

- XAU/USD
- EUR/USD
- GBP/JPY
- USD/JPY
- BTC/USD

Ignore unrelated symbols.

---

## 3. Timeframes

Required hierarchy:

4H = Macro bias
1H = Directional bias
15M = AMD confirmation
5M = Execution timeframe
1M = Precision refinement (optional)

Rules:

Lower timeframe MUST NEVER override HTF bias.

If 4H unclear:
→ WAIT

---

## 4. TradingView Data Requirements

The system MUST collect:

### Market Structure

- Higher highs
- Higher lows
- Lower highs
- Lower lows
- Range detection
- Chop detection

---

### Session Data

Track:

- London Open
- New York Open
- London/NY overlap
- session highs/lows

---

### Liquidity Levels

Detect:

- equal highs
- equal lows
- previous day high/low
- session highs/lows
- inducement zones

---

### Smart Money Structure

Detect:

- accumulation
- manipulation
- distribution
- liquidity sweep
- MSS
- BOS
- displacement
- FVG
- premium/discount

---

## 5. Pine Script Detection Logic

The TradingView script MUST detect:

1. Session active?
2. HTF aligned?
3. Liquidity sweep?
4. MSS confirmed?
5. Displacement strong?
6. FVG created?
7. Price retracing?
8. Entry zone near?

Alert States:

WAIT
PREPARE
EXECUTE
INVALIDATED

---

## 6. TradingView Alert Types

### PREPARE Alert

Conditions:

✓ HTF aligned
✓ sweep confirmed
✓ MSS confirmed
✓ displacement valid
✓ FVG created
✗ retracement not complete

Action:
Send to AI for reasoning.

---

### EXECUTE Alert

Conditions:

✓ retracement into valid FVG
✓ confidence likely high
✓ active session

Action:
Immediate reasoning + WhatsApp alert.

---

### INVALIDATED Alert

Conditions:

✗ structure broken
✗ failed retracement
✗ displacement weak

Action:
Cancel setup.

---

## 7. Webhook Payload

TradingView MUST send:

PAIR
TIMEFRAME
PRICE
BIAS
SESSION
AMD_STATUS
LIQUIDITY_SWEEP
MSS
BOS
DISPLACEMENT
FVG_STATUS
PREMIUM_DISCOUNT
STATE
TIMESTAMP

Example:

{
"pair":"XAUUSD",
"timeframe":"5m",
"bias":"bullish",
"session":"London",
"liquidity":"sweep_confirmed",
"mss":"confirmed",
"displacement":"strong",
"fvg":"valid",
"state":"PREPARE"
}

---

## 8. Session Rules

London:

Focus:
- EUR/USD
- GBP/JPY
- XAU/USD

New York:

Focus:
- XAU/USD
- USD/JPY
- BTC/USD
- EUR/USD

Overlap:

Highest confidence.

Boost:
+10 confidence

Outside kill zones:
Reduce confidence.

---

## 9. TradingView Fail-Safes

Do NOT trigger EXECUTE if:

- macro danger active
- red news < 30 mins
- spread abnormal
- HTF conflict
- chop detected
- weak displacement

Instead:
→ WAIT

---

## 10. Alert Frequency Rules

Avoid spam.

Rules:

Same setup:
Do not resend duplicate alert.

Only update when:

PREPARE → EXECUTE
EXECUTE → INVALIDATED
Bias changed
Confidence changed materially

---

## 11. Confidence Guidance

TradingView only estimates.

Final confidence belongs to:
master-trading-brain.md

TradingView MUST NEVER:

- force confidence
- auto recommend trade
- bypass risk engine

---

## 12. WhatsApp Trigger Logic

Only send immediate WhatsApp alert if:

✓ EXECUTE state
✓ confidence ≥ 85
✓ macro safe
✓ spread safe
✓ session active

Otherwise:
→ PREPARE alert only

---

## 13. Prime Rules

TradingView responsibilities:

✓ detect structure
✓ detect setups
✓ detect timing
✓ send alerts

TradingView MUST NEVER:

✗ reason alone
✗ override AI brain
✗ ignore macro conditions
✗ ignore risk filters

Prime principle:
TradingView detects.
AI decides.