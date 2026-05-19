# timeframe-engine.md

## Purpose

Determine whether the market condition is:

- WAIT
- PREPARE
- EXECUTE
- INVALIDATED

The engine exists to identify precise execution timing for AMD + FVG setups using a multi-timeframe structure.

Execution decisions MUST follow:

4H → 1H → 15M → 5M → 1M (optional)

Lower timeframes MUST NEVER override higher timeframe bias.

---

## 1. Timeframe Hierarchy

### 4H = Macro Bias

Role:
Determine dominant directional pressure.

Questions:
- Is market bullish or bearish?
- Trending or ranging?
- Premium or discount?
- Major liquidity target?

Outputs:

BULLISH
BEARISH
RANGE
UNSAFE

Rules:

If 4H unclear:
→ WAIT

If 4H range + poor liquidity:
→ WAIT

If 4H trend strong:
→ Prefer continuation setups.

---

### 1H = Directional Bias

Role:
Validate trade direction.

Checks:
- Market structure
- Higher highs/lows
- Lower highs/lows
- Trend continuation
- Liquidity targets
- Momentum direction

Questions:
- Is direction aligned with 4H?
- Is structure clean?
- Is there directional intent?

Rules:

4H + 1H aligned:
+15 confidence

4H + 1H conflict:
→ WAIT

Weak directional structure:
→ PREPARE only

---

### 15M = Setup Confirmation

Role:
Validate AMD structure.

Required confirmations:

1. Accumulation zone
2. Manipulation event
3. Liquidity sweep
4. Market Structure Shift (MSS)
5. Displacement candle
6. FVG creation

Outputs:

VALID_SETUP
PREPARE
WAIT

Rules:

If no liquidity sweep:
→ WAIT

If no MSS:
→ WAIT

If displacement weak:
→ PREPARE

If FVG weak:
→ PREPARE

Strong setup:
→ VALID_SETUP

---

### 5M = Execution Timeframe

Role:
Determine actual entry readiness.

Required sequence:

Liquidity Sweep
→ MSS
→ Displacement
→ FVG Creation
→ Retracement
→ Entry Zone

Required confirmations:

- Session active
- HTF aligned
- displacement confirmed
- clean FVG
- no macro risk
- no abnormal spread

Outputs:

WAIT
PREPARE
EXECUTE
INVALIDATED

Rules:

If price has not returned to FVG:
→ PREPARE

If price enters FVG cleanly:
→ EXECUTE READY

If structure breaks:
→ INVALIDATED

If FVG fails:
→ WAIT

---

### 1M = Precision Entry (Optional)

Role:
Refine execution.

Purpose:
- better entry precision
- tighter invalidation
- reduce poor timing

Never override:
- 5M bias
- 15M confirmation
- 1H direction
- 4H bias

If 1M conflicts with HTF:
Ignore 1M.

---

## 2. Session Intelligence

### London Session

High priority pairs:
- EUR/USD
- GBP/JPY
- XAU/USD

Highest-quality window:

07:00–11:00 GMT

Avoid:
- pre-open noise
- dead liquidity

---

### New York Session

High priority pairs:
- XAU/USD
- USD/JPY
- BTC/USD
- EUR/USD

Highest-quality window:

13:00–17:00 GMT

Avoid:
- random midday chop

---

### London + New York Overlap

Highest-quality opportunities.

Priority:
- XAU/USD
- EUR/USD
- USD/JPY

Confidence boost:
+10

---

## 3. Kill Zone Rules

Preferred execution windows:

London Kill Zone:
07:00–10:00 GMT

New York Kill Zone:
13:00–16:00 GMT

Outside kill zones:
Reduce confidence.

Late session:
Avoid new entries.

---

## 4. Market State Detection

Possible states:

TRENDING
RANGING
VOLATILE
CHOPPY
UNSAFE

Rules:

TRENDING:
Prefer continuation setups.

RANGING:
Require stronger confirmation.

VOLATILE:
Reduce confidence.

CHOPPY:
→ WAIT

UNSAFE:
→ WAIT

---

## 5. Macro Timing Filters

WAIT conditions:

- Powell speaking
- FOMC
- CPI
- NFP
- major interest rate event
- abnormal geopolitical event

Rules:

30 min before:
WAIT

30–45 min after:
WAIT

Only resume if structure normalizes.

---

## 6. Execution Checklist

Before EXECUTE:

✓ 4H aligned
✓ 1H aligned
✓ 15M confirms AMD
✓ liquidity sweep happened
✓ MSS confirmed
✓ displacement confirmed
✓ FVG created
✓ retracement active
✓ session active
✓ no bad news
✓ spread acceptable
✓ confidence ≥ 75

If any critical item missing:
→ WAIT

---

## 7. Final State Logic

### WAIT
Meaning:
Do nothing.

Triggers:
- no structure
- no FVG
- conflicting bias
- poor session
- bad news
- weak displacement

---

### PREPARE
Meaning:
Setup forming.

Triggers:
- setup valid
- FVG exists
- waiting for retrace
- waiting for execution timing

Action:
Watch market.

---

### EXECUTE
Meaning:
High-probability setup ready.

Requirements:
- all confirmations valid
- confidence ≥ 75
- execution window active

Action:
Notify user immediately.

---

### INVALIDATED
Meaning:
Setup failed.

Triggers:
- structure break
- failed retracement
- macro disruption
- poor price action

Action:
Cancel setup.

---

## 8. WhatsApp Alert Format

When EXECUTE:

PAIR:
BIAS:
STATE: EXECUTE
CONFIDENCE:
WHY:
ENTRY WINDOW:
FVG LOCATION:
INVALIDATION:
MARKET CONDITION:
FINAL ACTION:

Example Final Action:

"Prepare for manual execution if 5M confirms retracement into valid FVG."

Never send blind entries.