# folder-structure.md

## Purpose

Define the production-grade project structure for the AI Trading Intelligence System.

Primary objective:

Make the system modular, scalable, maintainable, and easy for Claude/OpenClaw to code.

Core philosophy:

One responsibility per module.

Avoid spaghetti architecture.

---

## 1. Root Structure

```txt
trading-intelligence-system/
│
├── src/
├── skills/
├── agents/
├── services/
├── webhooks/
├── scheduler/
├── memory/
├── prompts/
├── config/
├── logs/
├── database/
├── scripts/
├── tests/
├── docs/
├── .env
├── .gitignore
├── package.json
├── README.md
└── ecosystem.config.js
```

---

## 2. src/

Purpose:

Main application logic.

Structure:

```txt
src/
│
├── app.js
├── server.js
├── bootstrap.js
├── orchestrator.js
└── constants.js
```

Responsibilities:

app.js
→ starts system

server.js
→ API server

bootstrap.js
→ initializes services

orchestrator.js
→ controls reasoning flow

constants.js
→ global configs

---

## 3. skills/

Purpose:

AI reasoning skills.

Structure:

```txt
skills/
│
├── constitution.md
├── timeframe-engine.md
├── market-brief.md
├── pattern-recognition.md
├── risk-assessment.md
├── daily-market-report.md
├── master-trading-brain.md
├── memory-engine.md
├── tradingview-integration.md
├── forexfactory-integration.md
├── exness-deriv-integration.md
└── whatsapp-web-integration.md
```

Responsibilities:

Reasoning instructions for Claude/OpenClaw.

---

## 4. agents/

Purpose:

AI agent orchestration.

Structure:

```txt
agents/
│
├── brain.agent.js
├── scheduler.agent.js
├── whatsapp.agent.js
├── tradingview.agent.js
├── market.agent.js
├── risk.agent.js
└── memory.agent.js
```

Responsibilities:

brain.agent.js
→ central reasoning

scheduler.agent.js
→ timed workflows

whatsapp.agent.js
→ messaging

tradingview.agent.js
→ chart intelligence

market.agent.js
→ live market data

risk.agent.js
→ validation

memory.agent.js
→ context persistence

---

## 5. services/

Purpose:

External integrations.

Structure:

```txt
services/
│
├── tradingview.service.js
├── forexfactory.service.js
├── exness.service.js
├── deriv.service.js
├── whatsapp.service.js
├── reasoning.service.js
├── memory.service.js
└── logging.service.js
```

Responsibilities:

tradingview.service.js
→ webhook handling

forexfactory.service.js
→ macro events

exness.service.js
→ broker data

deriv.service.js
→ broker data

whatsapp.service.js
→ WhatsApp connection

reasoning.service.js
→ Claude/OpenClaw execution

memory.service.js
→ memory storage

logging.service.js
→ system logs

---

## 6. webhooks/

Purpose:

Receive TradingView alerts.

Structure:

```txt
webhooks/
│
└── tradingview.webhook.js
```

Endpoint:

```txt
POST /webhook/tradingview
```

Responsibilities:

✓ validate payload
✓ normalize alert
✓ trigger reasoning

---

## 7. scheduler/

Purpose:

Timed jobs.

Structure:

```txt
scheduler/
│
├── daily-report.job.js
├── london-session.job.js
├── ny-session.job.js
├── end-day.job.js
└── monitor.job.js
```

Responsibilities:

06:30 GMT
Daily report

09:00 GMT
London update

13:00 GMT
NY update

18:00 GMT
End-day summary

Real-time:
Monitor market.

---

## 8. memory/

Purpose:

Persistent context.

Structure:

```txt
memory/
│
├── active-setups.json
├── invalidated-setups.json
├── daily-context.json
├── confidence-history.json
└── session-memory.json
```

Alternative:

SQLite database.

---

## 9. prompts/

Purpose:

Reusable prompt templates.

Structure:

```txt
prompts/
│
├── daily-report.prompt.md
├── execute-alert.prompt.md
├── wait-alert.prompt.md
├── macro-warning.prompt.md
└── analysis.prompt.md
```

Purpose:

Improve consistency.

---

## 10. config/

Purpose:

System settings.

Structure:

```txt
config/
│
├── markets.config.js
├── schedule.config.js
├── risk.config.js
├── whatsapp.config.js
└── app.config.js
```

Responsibilities:

markets.config.js
→ symbols

schedule.config.js
→ timing

risk.config.js
→ confidence rules

whatsapp.config.js
→ contact settings

---

## 11. logs/

Purpose:

Debugging + monitoring.

Structure:

```txt
logs/
│
├── app.log
├── errors.log
├── whatsapp.log
├── webhook.log
└── market.log
```

Rules:

Log everything important.

---

## 12. database/

Purpose:

Persistent storage.

Structure:

```txt
database/
│
└── trading-intelligence.db
```

Store:

- memory
- setups
- alerts
- logs
- confidence history

Recommended:
SQLite

---

## 13. scripts/

Purpose:

Operational scripts.

Structure:

```txt
scripts/
│
├── start.sh
├── restart.sh
├── deploy.sh
└── backup.sh
```

---

## 14. tests/

Purpose:

Reliability.

Structure:

```txt
tests/
│
├── webhook.test.js
├── reasoning.test.js
├── whatsapp.test.js
├── scheduler.test.js
└── memory.test.js
```

---

## 15. docs/

Purpose:

Documentation.

Structure:

```txt
docs/
│
├── setup-guide.md
├── deployment-guide.md
├── troubleshooting.md
└── architecture.md
```

---

## 16. Deployment Files

### .env

Secrets.

### ecosystem.config.js

PM2 process manager.

### package.json

Dependencies.

### README.md

Project documentation.

---

## 17. Prime Principles

The structure MUST:

✓ stay modular
✓ separate responsibilities
✓ be easy to scale
✓ support OpenClaw orchestration
✓ support Claude reasoning

Prime principle:

Clean structure = reliable system.

