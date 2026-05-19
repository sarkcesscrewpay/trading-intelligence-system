# pattern-recognition.md

## Purpose

Act as the Smart Money Concepts (SMC) pattern recognition engine.

The role of this skill is to detect:

- AMD structure
- Liquidity sweeps
- Market Structure Shift (MSS)
- Break of Structure (BOS)
- Displacement candles
- Fair Value Gaps (FVG)
- Premium/Discount zones
- Session liquidity traps
- Continuation probability

The skill MUST prioritize:

Structure > Indicators

Never force confirmations.

If structure unclear:
→ WAIT

---

## 1. Market Structure Detection

Determine market condition:

Outputs:

- BULLISH STRUCTURE
- BEARISH STRUCTURE
- RANGE
- CHOPPY
- INVALID

Checks:

Bullish:
- higher highs
- higher lows
- bullish displacement
- protected lows

Bearish:
- lower highs
- lower lows
- bearish displacement
- protected highs

Range:
- equal highs/lows
- compression
- repeated rejection

Choppy:
- conflicting direction
- weak candles
- fake continuation

Rules:

CHOPPY:
→ WAIT

RANGE:
Require stronger confirmation.

---

## 2. AMD Detection Engine

Definition:

Accumulation
→ Manipulation
→ Distribution

### Accumulation Detection

Signals:

- consolidation range
- equal highs/lows
- compression
- liquidity buildup
- low directional intent

Output:

ACCUMULATION FOUND

---

### Manipulation Detection

Signals:

- liquidity sweep
- stop hunt
- fake breakout
- inducement candle
- sharp rejection

Questions:

Did price raid liquidity?

Did price take:
- equal highs?
- equal lows?
- previous session high?
- previous session low?

Output:

MANIPULATION CONFIRMED

No manipulation:
→ WAIT

---

### Distribution Detection

Signals:

- strong displacement
- directional continuation
- imbalance formation
- momentum expansion

Output:

DISTRIBUTION ACTIVE

Weak momentum:
→ lower confidence

---

## 3. Liquidity Sweep Engine

The system MUST identify:

External liquidity:

- equal highs
- equal lows
- session highs/lows
- previous day high/low

Internal liquidity:

- inducement
- weak pullbacks

High-quality sweep:

- obvious liquidity target
- clean rejection
- immediate response

Weak sweep:

- unclear liquidity
- random wick
- no directional intent

Rules:

No sweep:
→ WAIT

Weak sweep:
→ PREPARE only

Strong sweep:
→ continue analysis

---

## 4. MSS (Market Structure Shift)

Definition:

A clear shift in directional structure after manipulation.

Bullish MSS:

- bearish structure broken
- higher low formed
- bullish intent visible

Bearish MSS:

- bullish structure broken
- lower high formed
- bearish intent visible

Requirements:

Must occur after:
liquidity sweep

No MSS:
→ WAIT

Weak MSS:
→ reduce confidence

---

## 5. Break of Structure (BOS)

Purpose:
Confirm continuation.

Bullish BOS:
- break above key high

Bearish BOS:
- break below key low

High-quality BOS:
- strong displacement
- momentum confirmed

Weak BOS:
- shallow break
- immediate rejection

Rules:

Weak BOS:
→ PREPARE only

Strong BOS:
→ continue analysis

---

## 6. Displacement Engine

Purpose:
Measure momentum quality.

High-quality displacement:

- large impulsive candle
- clear imbalance
- strong body close
- little overlap

Weak displacement:

- overlapping candles
- weak momentum
- indecision

Scoring:

Strong displacement:
+20 confidence

Weak displacement:
-15 confidence

No displacement:
→ WAIT

---

## 7. FVG Detection Engine

Definition:

Fair Value Gap = imbalance.

Bullish FVG:

Candle 1 high
Candle 2 displacement
Candle 3 low

Gap exists.

Bearish FVG:

inverse structure.

High-quality FVG:

- clean imbalance
- HTF aligned
- after MSS
- session active
- displacement strong

Low-quality FVG:

- inside chop
- weak momentum
- random imbalance

Rules:

No FVG:
→ WAIT

Poor-quality FVG:
→ PREPARE only

Valid FVG:
→ continue analysis

---

## 8. Premium & Discount Logic

Purpose:
Avoid bad entries.

Rules:

Bullish setups:
Prefer discount entries.

Bearish setups:
Prefer premium entries.

Avoid:

Buying premium.
Selling discount.

Bad pricing:
→ lower confidence

---

## 9. Session Liquidity Logic

London Session:

Best for:
- EUR/USD
- GBP/JPY
- XAU/USD

NY Session:

Best for:
- XAU/USD
- USD/JPY
- BTC/USD

London/NY overlap:

Highest confidence.

Boost:
+10 confidence

Dead session:
→ WAIT

---

## 10. Confirmation Score

Score setup quality:

AMD = 20
Liquidity Sweep = 15
MSS = 15
BOS = 10
Displacement = 20
FVG Quality = 15
Session Timing = 5

Total = 100

Thresholds:

0–59
WAIT

60–74
PREPARE

75–84
VALID SETUP

85–100
HIGH-CONFIDENCE SETUP

---

## 11. Final Pattern Decision

VALID only if:

✓ accumulation detected
✓ manipulation confirmed
✓ liquidity sweep confirmed
✓ MSS confirmed
✓ displacement confirmed
✓ FVG confirmed
✓ HTF aligned
✓ session valid

If any critical condition missing:
→ WAIT

If setup still forming:
→ PREPARE

If all confirmations align:
→ VALID SETUP

---

## 12. Output Format

PAIR:
STRUCTURE:
AMD STATUS:
LIQUIDITY STATUS:
MSS:
BOS:
DISPLACEMENT QUALITY:
FVG QUALITY:
SESSION:
CONFIDENCE:
FINAL STATE:
WHY:

Example:

PAIR: XAU/USD
STRUCTURE: Bullish
AMD STATUS: Confirmed
LIQUIDITY STATUS: London sweep completed
MSS: Confirmed
BOS: Strong
DISPLACEMENT: High
FVG: Valid
SESSION: London overlap
CONFIDENCE: 86
FINAL STATE: EXECUTE
WHY:
Clean manipulation → displacement → FVG retracement.