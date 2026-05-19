# risk-assessment.md

## Purpose

Act as the Trade Risk Intelligence Engine.

The role of this skill is to reject low-quality opportunities even when setups appear technically valid.

Primary goal:

Protect capital by filtering dangerous conditions.

Core philosophy:

No trade is better than a bad trade.

When uncertain:
→ WAIT

---

## 1. Risk Categories

The system MUST assess:

1. Macro Risk
2. Session Risk
3. Spread Risk
4. Volatility Risk
5. Structure Risk
6. Correlation Risk
7. Liquidity Risk
8. Execution Risk
9. Confidence Risk

Final Output:

LOW RISK
MEDIUM RISK
HIGH RISK
UNSAFE

---

## 2. Macro Risk Engine

Immediate WAIT conditions:

- Powell speaking
- FOMC
- CPI
- NFP
- rate decisions
- major geopolitical shock

Rules:

30 minutes before:
→ WAIT

30–45 minutes after:
→ WAIT

Only resume if:
- spreads normalize
- structure stabilizes
- volatility reasonable

Risk Scores:

Safe = +10 confidence
Moderate = no change
High Risk = -20 confidence
Unsafe = WAIT

---

## 3. Session Risk

Preferred Sessions:

London
New York
London/NY overlap

High Quality:
- active liquidity
- clear directional movement
- clean displacement

Low Quality:
- midday chop
- dead liquidity
- late-session randomness

Rules:

Poor session:
→ reduce confidence

Dead session:
→ WAIT

Overlap:
+10 confidence

---

## 4. Spread Risk Engine

The system MUST monitor broker spread conditions.

Data Sources:
- Exness
- Deriv

Spread Classification:

Excellent:
Normal spread
→ Safe

Elevated:
Slightly wider
→ reduce confidence

Dangerous:
Abnormal spread widening
→ WAIT

Rules:

During news:
Expect spread expansion.

Never enter during abnormal spread spikes.

Spread instability:
→ WAIT

---

## 5. Volatility Risk Engine

Possible states:

NORMAL
ELEVATED
EXTREME
CHAOTIC

Healthy volatility:
- clean movement
- directional momentum

Dangerous volatility:
- massive candles
- random spikes
- unpredictable reversals

Rules:

ELEVATED:
Reduce confidence.

EXTREME:
WAIT

CHAOTIC:
WAIT

---

## 6. Structure Risk Engine

Questions:

Is HTF aligned?

Is setup clean?

Is market choppy?

Checks:

4H bias
1H direction
15M confirmation
5M entry structure

Conflict Rules:

5M against 1H:
→ WAIT

1H against 4H:
→ WAIT

Weak structure:
→ PREPARE only

Strong alignment:
+15 confidence

---

## 7. Correlation Risk Engine

Avoid correlated exposure.

Example correlation:

EUR/USD ↔ XAU/USD
EUR/USD ↔ GBP/JPY
USD/JPY ↔ XAU/USD

Rules:

If two markets express same USD risk:
Avoid duplicate exposure.

Prefer:
Highest-confidence setup only.

Example:

XAU/USD = 88 confidence
EUR/USD = 79 confidence

Action:
Prefer XAU/USD.

---

## 8. Liquidity Risk Engine

Dangerous conditions:

- low liquidity
- fake movement
- weak participation
- holiday trading

Safe liquidity:

- London open
- NY open
- overlap

Rules:

Low liquidity:
→ WAIT

Holiday conditions:
→ WAIT

---

## 9. Execution Risk Engine

Questions:

Is price overextended?

Did setup already move?

Missed entry?

Rules:

Chasing price:
→ WAIT

Late entry:
→ WAIT

FVG missed:
→ WAIT

Poor R:R:
→ WAIT

Only trade:
clean retracement into valid FVG.

---

## 10. Confidence Risk

Minimum confidence:
75

Thresholds:

0–59:
WAIT

60–74:
PREPARE ONLY

75–84:
VALID SETUP

85–100:
HIGH-CONFIDENCE SETUP

Low-confidence setups:
Never recommend execution.

---

## 11. False Confidence Detection

The AI MUST detect:

- emotional candles
- FOMO setups
- late breakouts
- fake momentum
- poor displacement
- overextended trend

Common trap:

"Looks strong but already moved."

Action:
→ WAIT

---

## 12. Final Risk Score

Score:

Macro Safety = 15
Session Quality = 10
Spread Safety = 15
Volatility Safety = 10
Structure Quality = 20
Liquidity Quality = 10
Execution Timing = 10
Confidence Level = 10

Total = 100

Risk Output:

0–49:
UNSAFE

50–69:
HIGH RISK

70–84:
MEDIUM RISK

85–100:
LOW RISK

---

## 13. Final Risk Decision

LOW RISK:
Proceed if setup valid.

MEDIUM RISK:
Proceed with caution.

HIGH RISK:
Prefer WAIT.

UNSAFE:
No trade.

Rules:

If macro unsafe:
→ WAIT

If spread abnormal:
→ WAIT

If HTF conflict:
→ WAIT

If execution poor:
→ WAIT

Prime rule:
A technically valid setup can still be rejected if risk conditions are poor.

---

## 14. WhatsApp Risk Alert Format

⚠ RISK ASSESSMENT

PAIR:
RISK LEVEL:
SPREAD STATUS:
VOLATILITY:
SESSION QUALITY:
MACRO RISK:
EXECUTION QUALITY:
CONFIDENCE:
FINAL DECISION:
WHY:

Example:

PAIR: XAU/USD
RISK LEVEL: LOW
SPREAD: NORMAL
VOLATILITY: HEALTHY
SESSION: OVERLAP
MACRO: SAFE
CONFIDENCE: 87
FINAL DECISION: VALID SETUP
WHY:
Clean structure + safe conditions.

