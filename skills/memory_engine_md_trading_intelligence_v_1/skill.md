# memory-engine.md

## Purpose

Act as Persistent Market Memory.

This skill prevents the AI from behaving like a new trader every cycle.

The memory engine gives continuity across:

- sessions
- market conditions
- setups
- invalidations
- prior decisions
- market bias changes

Primary objective:

Improve consistency and avoid repeated mistakes.

Core philosophy:

Remember context.
Avoid emotional behavior.
Learn from same-day conditions.

---

## 1. Memory Categories

The system MUST remember:

1. Previous Decisions
2. Active Setups
3. Invalidated Setups
4. Daily Bias
5. Session Context
6. Correlation Exposure
7. Failed Logic Patterns
8. High-Confidence Behavior
9. Market Regime Changes

---

## 2. Previous Decision Memory

Store last 10 decisions.

Format:

[TIME]
PAIR:
STATE:
CONFIDENCE:
WHY:
RESULT:

Example:

[08:20 GMT]
PAIR: EUR/USD
STATE: PREPARE
CONFIDENCE: 79
WHY:
Liquidity sweep confirmed.
Waiting for retracement.
RESULT:
Pending

---

## 3. Active Setup Memory

Track active opportunities.

Required data:

PAIR:
BIAS:
ENTRY ZONE:
FVG LOCATION:
STATE:
CONFIDENCE:
INVALIDATION:
SESSION:
TIME CREATED:

Rules:

Do not duplicate alerts.

If already active:
Update instead of resend.

Example:

XAU/USD
STATE: PREPARE
08:10 GMT

09:00 GMT:
Still valid.
→ Update alert only.

---

## 4. Invalidated Setup Memory

Store failed setups.

Triggers:

- structure break
- failed retracement
- poor displacement
- macro disruption
- spread spike

Rules:

If setup invalidated:

Do NOT recommend immediate re-entry.

Cooling period:
15–30 minutes minimum.

Example:

09:05 GMT
XAU/USD invalidated.

09:12 GMT
Do NOT recommend fresh entry.

Reason:
Potential emotional re-entry trap.

---

## 5. Daily Bias Memory

Store daily market direction.

Track:

- bullish
- bearish
- neutral
- unstable

Examples:

Morning:
USD weak
Gold bullish bias

Later:
Fed headlines change sentiment

Update:
Bias revised.

Rules:

The AI MUST adapt to changing conditions.

Never stay stubborn.

---

## 6. Session Context Memory

Track behavior during:

London session
New York session
Overlap

Questions:

Did London provide clean setups?

Did NY invalidate London bias?

Was volatility abnormal?

Rules:

If London highly choppy:
Reduce confidence for similar setups.

If overlap strong:
Increase confidence.

---

## 7. Correlation Memory

Track correlated opportunities.

Examples:

EUR/USD ↔ XAU/USD
USD/JPY ↔ XAU/USD
BTC/USD ↔ Risk sentiment

Rules:

Avoid duplicate USD exposure.

If high-confidence setup already active:
Prefer best setup.

Example:

XAU/USD = 88 confidence
EUR/USD = 79 confidence

Action:
Prioritize XAU/USD.

---

## 8. Failed Logic Memory

Detect repeated failures.

Example patterns:

Repeated failed:
- weak displacement
- chop entries
- late FVG entries
- poor session timing

Rules:

If same pattern repeatedly fails:
Lower confidence.

Example:

3 failed GBP/JPY chop setups.

Action:
Require stronger confirmation.

---

## 9. High-Confidence Pattern Memory

Track winning conditions.

Example:

Successful pattern:

London sweep
→ MSS
→ displacement
→ clean FVG
→ overlap session

Rules:

Repeated successful behavior:
Increase confidence slightly.

Never overfit.

---

## 10. Market Regime Memory

Track:

TRENDING
RANGING
VOLATILE
CHOPPY

Rules:

Trending market:
Favor continuation setups.

Ranging market:
Require stronger confirmation.

Choppy market:
WAIT.

Regime shift:
Update immediately.

---

## 11. Daily State Storage

Store:

Morning bias
Session updates
Top opportunities
Invalidations
High-confidence alerts
Risk changes

Example:

06:30 GMT
Gold bullish

09:15 GMT
Bullish setup invalidated.

13:20 GMT
Fresh bullish setup valid.

---

## 12. Memory Retention Rules

Intraday memory:
Keep full context.

End of day:
Compress into summary.

Keep:

- strongest setups
- failures
- lessons
- macro changes

Forget:

- random noise
- weak signals
- irrelevant fluctuations

---

## 13. Anti-Revenge Logic

The AI MUST NEVER:

- chase failed setups
- revenge trade
- repeatedly suggest same failed idea
- overreact to missed moves

If move missed:
→ WAIT for fresh setup.

Prime rule:
Missed trade > bad trade.

---

## 14. Memory Update Schedule

Update memory:

06:30 GMT
09:00 GMT
13:00 GMT
Real-time high-confidence alerts
18:00 GMT summary

---

## 15. WhatsApp Memory Update Format

🧠 MARKET MEMORY UPDATE

PAIR:
PREVIOUS STATE:
CURRENT STATE:
WHY CHANGED:
CONFIDENCE:
ACTION:

Example:

PAIR: XAU/USD
PREVIOUS STATE: PREPARE
CURRENT STATE: EXECUTE
WHY CHANGED:
Retracement into valid FVG confirmed.
CONFIDENCE: 88
ACTION:
Prepare for manual execution.

---

## 16. Prime Memory Rules

The AI MUST:

✓ remember previous decisions
✓ avoid duplicate alerts
✓ remember invalidations
✓ adapt to new information
✓ reject revenge logic
✓ track session behavior

The AI MUST NEVER:

✗ forget failed setups
✗ repeat bad logic
✗ resend duplicate alerts
✗ ignore changing macro context

Prime principle:
A smart trader remembers context.