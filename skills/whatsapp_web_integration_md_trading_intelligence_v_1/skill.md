# whatsapp-web-integration.md

## Purpose

Act as the WhatsApp Communication Layer.

This skill enables the AI system to communicate through an existing WhatsApp number using QR authentication.

Role in architecture:

WhatsApp Web = Communication Layer

Primary objective:

Deliver accurate daily market intelligence and real-time alerts directly to WhatsApp.

Core philosophy:

Clear communication.
No spam.
Only high-value alerts.

---

## 1. Architecture

System flow:

TradingView
→ Webhooks
→ OpenClaw / Claude Brain
→ master-trading-brain.md
→ WhatsApp Web Agent
→ User WhatsApp

Technology:

Recommended:
whatsapp-web.js

Fallback:
Baileys

Runtime:
Node.js on VPS

---

## 2. Authentication Method

Method:

QR Scan Authentication

Setup Flow:

1. Start WhatsApp Agent
2. Generate QR Code
3. User scans QR with existing WhatsApp number
4. Session token saved
5. Persistent login enabled

Result:

Existing number connected.

No new business number required.

---

## 3. Session Persistence

The system MUST save session data.

Purpose:

Avoid repeated QR scans.

Store:

- login session
- auth token
- reconnect state

Rules:

Restart VPS:
Reconnect automatically.

Do NOT request QR repeatedly.

If session invalid:
Generate new QR.

---

## 4. Message Types

The system sends ONLY:

### Daily Market Report

Time:
06:30 GMT

Purpose:
Daily outlook.

---

### London Session Update

Time:
09:00 GMT

Purpose:
Update setups.

---

### New York Session Update

Time:
13:00 GMT

Purpose:
New opportunities.

---

### High-Confidence Alert

Condition:
Confidence ≥ 85
AND
EXECUTE state

Purpose:
Immediate action notice.

---

### WAIT Alert

Condition:
Macro danger or invalidation.

Purpose:
Capital preservation.

---

## 5. Message Priority Levels

HIGH PRIORITY:

- EXECUTE alerts
- macro warnings
- invalidations

MEDIUM PRIORITY:

- PREPARE alerts
- session updates

LOW PRIORITY:

- summaries
- end-of-day reviews

---

## 6. Duplicate Prevention

The system MUST prevent spam.

Rules:

Same setup:
Do NOT resend repeatedly.

Only resend if:

PREPARE → EXECUTE
EXECUTE → INVALIDATED
Confidence materially changes
Bias changes

Example:

08:15
XAU/USD PREPARE sent.

08:22
No meaningful change.
→ No message.

08:41
EXECUTE state confirmed.
→ Send update.

---

## 7. Message Formatting Rules

Messages MUST be:

- structured
- concise
- confidence-based
- readable on mobile
- actionable

Never:

- send walls of text
- overhype certainty
- spam notifications

---

## 8. Daily Report Template

📊 DAILY MARKET INTELLIGENCE REPORT

Date:

Market Mood:

Risk Environment:

USD Bias:

━━━━━━━━━━━━━━━

🥇 TOP OPPORTUNITY

PAIR:

BIAS:

CONFIDENCE:

WHY:

EXECUTION WINDOW:

ENTRY CONDITION:

FINAL ACTION:

━━━━━━━━━━━━━━━

📌 WATCHLIST

PAIR:
STATE:
WHY:

━━━━━━━━━━━━━━━

⚠ AVOID

PAIR:
REASON:

━━━━━━━━━━━━━━━

FINAL GUIDANCE:

Wait for clean confirmation.

---

## 9. High-Confidence Alert Template

🚨 HIGH-CONFIDENCE SETUP

PAIR:

STATE:
EXECUTE

CONFIDENCE:

WHY:

AMD:
✓ Confirmed

MSS:
✓ Confirmed

Displacement:
✓ Strong

FVG:
✓ Valid

SESSION:

ENTRY WINDOW:

FINAL ACTION:

Prepare for manual execution.

---

## 10. WAIT Alert Template

⚠ MARKET WARNING

PAIR:

STATE:
WAIT

REASON:

Examples:

- Powell speaking
- CPI risk
- spread unstable
- weak structure
- no retracement

FINAL ACTION:

No trade. Preserve capital.

---

## 11. Quiet Hours Logic

Avoid notification overload.

Default quiet hours:

22:00–05:30 GMT

Exceptions:

✓ major macro warning
✓ EXECUTE alert
✓ severe risk warning

---

## 12. Contact Routing

Primary destination:

User personal WhatsApp

Future support:

- multiple contacts
- group delivery
- VIP routing

---

## 13. Reconnection Logic

If WhatsApp disconnects:

Step 1:
Reconnect automatically.

Step 2:
Retry session.

Step 3:
Notify admin if failed.

If authentication lost:
Generate QR.

---

## 14. OpenClaw Orchestration

OpenClaw responsibilities:

✓ trigger messaging
✓ schedule reports
✓ process reasoning outputs
✓ route alerts
✓ prevent duplicates

OpenClaw MUST NOT:

✗ bypass master brain
✗ send unvalidated trades
✗ spam repeated signals

---

## 15. VPS Requirements

VPS MUST run:

- Node.js
- whatsapp-web.js
- session persistence
- scheduler
- OpenClaw agent

24/7 uptime preferred.

---

## 16. Prime Rules

The WhatsApp layer MUST:

✓ send accurate reports
✓ prioritize quality
✓ avoid spam
✓ persist login
✓ reconnect automatically

The WhatsApp layer MUST NEVER:

✗ send duplicate alerts
✗ force trades
✗ over-message
✗ bypass reasoning

Prime principle:
Deliver only high-value intelligence.

