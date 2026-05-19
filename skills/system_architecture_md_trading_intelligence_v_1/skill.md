# system-architecture.md

## Purpose

Define the full working architecture of the AI Trading Intelligence System.

This document converts the strategy and skills into a deployable production system.

Primary objective:

Reliable market intelligence.
High-probability analysis.
Manual execution only.
WhatsApp delivery.

Core philosophy:

Data → Reasoning → Validation → Intelligence Delivery

No autonomous trading.

---

## 1. High-Level Architecture

System flow:

TradingView
(chart intelligence)
        ↓
Webhook Server
        ↓
Market Data Collector
        ↓
Macro Intelligence Layer
(ForexFactory)
        ↓
Broker Validation Layer
(Exness + Deriv)
        ↓
Reasoning Layer
(Claude / OpenClaw)
        ↓
Master Trading Brain
        ↓
Memory Engine
        ↓
WhatsApp Web Agent
        ↓
User WhatsApp

---

## 2. Core Components

### 1. TradingView Layer

Responsibilities:

✓ detect structure
✓ detect AMD
✓ detect FVG
✓ send alerts
✓ detect session timing

Technology:

- TradingView alerts
- Pine Script
- webhook payloads

Input:

Live chart data.

Output:

Market setup events.

---

### 2. Webhook Server

Responsibilities:

✓ receive TradingView alerts
✓ validate payload
✓ normalize data
✓ forward to reasoning system

Technology:

Recommended:

Node.js + Express

Alternative:
Python FastAPI

Endpoint example:

POST /webhook/tradingview

---

### 3. Market Data Collector

Responsibilities:

✓ gather live prices
✓ broker spread monitoring
✓ volatility detection
✓ market health checks

Sources:

- Exness MT5
- Deriv
- TradingView

Update cycle:

5–30 seconds.

---

### 4. Macro Intelligence Layer

Responsibilities:

✓ ForexFactory calendar
✓ Powell speech detection
✓ CPI/NFP/FOMC risk
✓ macro danger scoring

Output:

SAFE
CAUTION
HIGH RISK
UNSAFE

Macro overrides technicals.

---

### 5. Broker Validation Layer

Responsibilities:

✓ spread monitoring
✓ slippage risk
✓ liquidity quality
✓ broker health

Sources:

- Exness
- Deriv

Output:

HEALTHY
CAUTION
UNSTABLE
UNSAFE

---

### 6. Reasoning Layer

Technology:

Claude / OpenClaw

Responsibilities:

✓ analyze all signals
✓ compare markets
✓ rank opportunities
✓ reject weak setups
✓ assign confidence

Input:

All skill outputs.

Output:

WAIT
PREPARE
EXECUTE
INVALIDATED

---

### 7. Master Trading Brain

Responsibilities:

✓ orchestration
✓ final decision
✓ opportunity ranking
✓ trade filtering
✓ report generation

Consumes:

All .md skill files.

---

### 8. Memory Engine

Responsibilities:

✓ remember prior setups
✓ prevent duplicates
✓ avoid revenge logic
✓ track daily behavior

Persistence:

JSON / SQLite database.

---

### 9. Scheduler

Responsibilities:

✓ run daily reports
✓ trigger updates
✓ monitor markets
✓ execute timing logic

Schedule:

06:30 GMT
09:00 GMT
13:00 GMT
18:00 GMT

Real-time alerts always active.

Technology:

- cron
- node-cron

---

### 10. WhatsApp Communication Layer

Technology:

whatsapp-web.js

Responsibilities:

✓ QR authentication
✓ persistent session
✓ report delivery
✓ alerts
✓ reconnect logic

Runs on VPS.

---

## 3. Market Workflow

Example:

08:10 GMT

TradingView detects:

XAU/USD
Liquidity sweep
MSS confirmed
Displacement strong
FVG valid

Webhook fires.

↓

Reasoning layer receives data.

↓

ForexFactory checks:

No macro risk.

↓

Broker validation:

Spread normal.

↓

Brain computes:

Confidence = 88

State = EXECUTE

↓

WhatsApp message sent.

---

## 4. File Responsibilities

constitution.md
→ system laws

market-brief.md
→ macro bias

timeframe-engine.md
→ timing

pattern-recognition.md
→ structure analysis

risk-assessment.md
→ trade filtering

daily-market-report.md
→ final messaging

master-trading-brain.md
→ orchestration

memory-engine.md
→ continuity

tradingview-integration.md
→ chart intelligence

forexfactory-integration.md
→ macro protection

exness-deriv-integration.md
→ broker validation

whatsapp-web-integration.md
→ communication

---

## 5. Data Flow

Raw Market Data
↓
Signal Detection
↓
Macro Filtering
↓
Broker Validation
↓
Reasoning
↓
Memory Check
↓
Ranking
↓
Decision
↓
WhatsApp Delivery

---

## 6. Decision Pipeline

IF macro unsafe:
WAIT

ELSE IF broker unstable:
WAIT

ELSE IF confidence < 75:
WAIT

ELSE IF confidence 75–84:
PREPARE

ELSE IF confidence ≥ 85:
EXECUTE

---

## 7. Recommended Stack

Backend:
Node.js

Reasoning:
Claude + OpenClaw

Database:
SQLite

Messaging:
whatsapp-web.js

Server:
Ubuntu VPS

Monitoring:
PM2

Logging:
Winston

---

## 8. VPS Requirements

Recommended:

CPU:
2–4 vCPU

RAM:
4–8GB

Storage:
40GB+

OS:
Ubuntu 22.04

24/7 uptime preferred.

---

## 9. Safety Rules

The system MUST NEVER:

✗ auto place trades
✗ override risk engine
✗ ignore macro danger
✗ ignore broker conditions
✗ spam WhatsApp

Prime principle:
Human executes.
AI analyzes.

---

## 10. Final Goal

Deliver:

High-quality market intelligence.

Not signals.

The system should behave like:

A disciplined institutional analyst
sending you only high-value opportunities.