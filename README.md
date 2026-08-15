# Buzo Atlas

**The operator intelligence layer for the nightlife economy.**

Buzo Labs is building the AI operating system for the nightlife economy. Buzo Atlas is the operator layer: a place to map the assets, operators, partnerships, and demand shaping hospitality and entertainment.

For the **Single Family Office** hackathon track, Atlas starts with a focused problem: family offices with hospitality and entertainment exposure receive fragmented reports across private companies, real estate, and private debt. Atlas is being designed to turn those reports into one evidence-linked portfolio and risk view.

## Product system

| Product | Role | Status |
| --- | --- | --- |
| **Buzo** | Consumer concierge for discovering credible events, expressing intent, and planning a night out. | Existing companion product |
| **Buzo Atlas** | Operator intelligence for consolidating asset, operating, partnership, and—later—demand data. | Hackathon MVP in development |
| **Demand graph** | Connects what people wanted, what Buzo recommended, what they chose, and eventual booking, attendance, and return signals. | Long-term thesis; not yet integrated |

## Hackathon MVP

The planned prototype will demonstrate a focused decision workflow:

1. Ingest sample private-asset, real-estate, and private-debt reports.
2. Normalize holdings, valuations, ownership, debt, dates, and source references.
3. Flag missing data, stale reports, conflicting values, concentration, and upcoming obligations.
4. Present a unified portfolio view with drill-down to source evidence.
5. Let an operator ask portfolio questions in natural language.

The goal is decision support with traceable evidence and human review—not autonomous investment advice.

## Why this could become defensible

Event listings alone are replicable. The longer-term opportunity is a closed loop between consumer intent and operator decisions:

`intent -> recommendation -> selection -> booking or attendance -> return`

Buzo already covers the early consumer discovery and planning loop. Atlas explores how aggregated, permissioned demand signals could eventually complement operational and asset reporting for venues, hospitality groups, strategic partners, and investors.

## Scope

This repository begins as a hackathon prototype. Portfolio ingestion, risk analysis, family-office integrations, and Buzo demand-signal integration should be treated as planned work until implemented and demonstrated.

The concept's [original inspiration](docs/ORIGINAL_INSPIRATION.md) is preserved separately from the evolving product thesis.

## Related Buzo repositories

- [gr-frontend](https://github.com/gigradarapp/gr-frontend) — consumer app
- [gr-backend](https://github.com/gigradarapp/gr-backend) — API and product services
- [gr-openclaw](https://github.com/gigradarapp/gr-openclaw) — event ingestion and normalization
- [gr-landing-page](https://github.com/gigradarapp/gr-landing-page) — company thesis
