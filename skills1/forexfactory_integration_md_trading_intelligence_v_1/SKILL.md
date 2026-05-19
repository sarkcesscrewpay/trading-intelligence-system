# forexfactory-integration.md

## Purpose

Act as the Macro Event Risk Filter.

This skill protects the system from dangerous trading conditions caused by high-impact economic news.

Role in architecture:

ForexFactory = Macro Safety Layer

Primary objective:

Prevent trading during unstable macro conditions.

Core philosophy:

Preserve capital during uncertainty.

When macro risk high:
→ WAIT

---

## 1. Architecture Role

System flow:

ForexFactory
→ Economic Event Detection
→ Macro Risk Assessment
→ master-trading-brain.md
→ WAIT / PREPARE / EXECUTE decision

The system MUST NEVER bypass macro filtering.

---

## 2. Event Priority Levels

### RED EVENTS (Highest Risk)

Always monitor:

- FOMC
- CPI
- NFP
- Powell speeches
- Interest rate decisions
- GDP
- inflation data
- unemployment reports
- central bank statements

Action:
WAIT

---

### ORANGE EVENTS (Moderate Risk)

Monitor:

- PMI
- retail sales
- consumer confidence
- manufacturing data

Action:
Reduce confidence.

---

### YELLOW EVENTS (Low Risk)

Monitor only.

Action:
No major change.

---

## 3. Event Detection Rules

The system MUST detect:

EVENT NAME
TIME
CURRENCY IMPACT
SEVERITY
COUNTDOWN

Example:

USD CPI
08:30 GMT
RED EVENT
T-minus 28 minutes

Action:
WAIT

---

## 4. Pre-News Safety Window

### RED EVENTS

30 minutes before:
→ WAIT

Reason:

Liquidity distortion
Spread widening
Fake breakouts
Manipulation risk

No new setups allowed.

---

### ORANGE EVENTS

15 minutes before:
Reduce confidence.

Prefer:
WAIT.

---

## 5. Post-News Safety Window

### RED EVENTS

30–45 minutes after:
→ WAIT

Only resume if:

✓ spreads normalized
✓ volatility reasonable
✓ structure stabilized
✓ displacement clean

If chaotic:
Continue WAIT.

---

### ORANGE EVENTS

10–15 minutes after:
Reassess conditions.

---

## 6. Currency Impact Logic

The system MUST understand event impact.

Example:

USD event:
Impacts:
- XAU/USD
- EUR/USD
- USD/JPY
- GBP/JPY
- BTC/USD sentiment

JPY event:
Impacts:
- USD/JPY
- GBP/JPY

EUR event:
Impacts:
- EUR/USD

Rules:

If affected pair exposed:
Increase macro risk.

---

## 7. Powell Speech Logic

Highest priority event.

If Powell speaking:

Immediate:
WAIT

Reason:

Unpredictable volatility.

Fake directional moves.

Liquidity traps.

Cooldown:
Minimum 45 minutes after speech.

Resume only if:

Market structure normalizes.

---

## 8. Macro Danger States

Outputs:

SAFE
CAUTION
HIGH RISK
UNSAFE

Rules:

SAFE:
Normal conditions.

CAUTION:
Moderate event risk.
Reduce confidence.

HIGH RISK:
Prefer WAIT.

UNSAFE:
No trading.

---

## 9. Confidence Adjustments

SAFE:
+5 confidence

ORANGE EVENT:
-10 confidence

RED EVENT:
WAIT

Post-news instability:
-20 confidence

Powell speaking:
WAIT

---

## 10. Daily Macro Scan Schedule

Run scans:

06:00 GMT
Before London

08:30 GMT
London validation

12:30 GMT
Before New York

Real-time monitoring:
Always active.

---

## 11. Event Override Rules

Macro risk overrides technicals.

Example:

Pattern Engine:
XAU/USD = 89 confidence

ForexFactory:
CPI in 20 mins

Final Decision:
WAIT

Macro always wins.

---

## 12. WhatsApp Macro Warning Template

⚠ MACRO RISK WARNING

EVENT:

TIME:

SEVERITY:

AFFECTED PAIRS:

STATE:
WAIT

REASON:

High-impact macro event.

Trading paused until market stabilizes.

FINAL ACTION:

"Preserve capital. Wait for post-news confirmation."

---

## 13. Daily Macro Brief Template

🌍 DAILY MACRO BRIEF

Major Event Risk:

Highest Priority Event:

Market Risk Level:

Affected Markets:

Recommended Trading Windows:

Avoid Windows:

FINAL GUIDANCE:

"Trade only after macro risk clears."

---

## 14. Anti-Hallucination Rules

The AI MUST NEVER:

- invent economic events
- assume event timing
- fake Powell schedule
- ignore real macro danger

Only reason from verified ForexFactory data.

If uncertain:
→ WAIT

Prime rule:
Macro safety before technical opportunity.

