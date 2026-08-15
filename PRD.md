# Buzo Atlas — Hackathon MVP PRD

**Status:** Draft implementation target

**Track:** Single Family Office

**Scope:** Hackathon prototype, not the complete long-term Buzo Labs model

## 1. Canonical positioning

> **Buzo Atlas is the operating system for an AI-native family-office model focused on the nightlife and culture economy.**

The model is built around four connected mechanisms:

1. **Strategic partnerships** — the operating mechanism for working with artists, venues, promoters, hospitality groups, brands, technology providers, distributors, and capital partners.
2. **Buzo Originals** — the planned portfolio of owned, co-owned, commissioned, or licensed nightlife-event rights and reusable cultural IP.
3. **Digital art** — physical, digital, audiovisual, or interactive work with explicit provenance, ownership, exhibition, reproduction, and commercial rights.
4. **Proprietary concierge IP and technology** — reusable agents, workflows, integrations, recommendation systems, knowledge structures, and operating infrastructure.

The [product thesis](docs/PRODUCT_THESIS.md) defines the longer-term strategy. This PRD specifies the first buildable prototype.

## 2. Product objective

Build a hackathon prototype that converts a fictional, fragmented nightlife-and-culture family-office portfolio into one evidence-linked decision workspace.

The demo must show operators:

1. **learning** from bespoke reports and contracts
2. **coordinating** around partners, rights, obligations, and risk
3. **allocating** capital, technology, management attention, and relationships

The target outcome is one traceable decision passing through a human approval gate for a proposed nightlife or cultural activation—not a generic wealth dashboard.

## 3. Problem statement

A culture-focused family-office model may hold or monitor private-company equity, venue property or leases, private debt, event rights, artworks, proprietary technology, and strategic-partnership agreements.

The information describing these exposures arrives in incompatible reports, spreadsheets, and contracts. Operators cannot easily answer:

- What do we own or have rights to?
- Which values and reports are stale, missing, or contradictory?
- What obligations or rights are approaching expiry?
- Where are multiple assets dependent on the same partner, venue, or season?
- What resources should be allocated to a proposed activation?
- Which parts of the answer are facts, inferences, or assumptions?

## 4. Target users

### Primary user

A principal, investment analyst, or operating partner working within a culture-focused family-office model.

### Secondary users

- portfolio and finance operators
- legal and rights-management advisors
- venue, event, hospitality, and creative operators
- strategic-partnership managers

The MVP is optimized for the primary user. Secondary users provide information or review decisions rather than receiving separate product experiences.

## 5. Core demo scenario

The fictional family-office model is considering a seasonal digital-art and nightlife activation under Buzo Originals.

Its seeded portfolio contains:

- equity in a nightlife or hospitality operator
- venue-related real-estate or lease exposure
- private debt issued to an event promoter
- rights to one recurring Buzo Original
- one physical or digital artwork and its licence
- proprietary concierge technology
- one strategic-partnership agreement or dependency

The source bundle must contain these fixture formats:

- one PDF portfolio or operating report
- one CSV valuation or obligation report
- one Markdown or plain-text rights or partnership agreement

The fixtures must be fictional and contain deliberately planted risks and inconsistencies for deterministic evaluation.

## 6. Core user journey

1. Load the deterministic seeded document bundle.
2. Extract and normalize holdings, parties, values, dates, debt, rights, obligations, and source references.
3. Review the unified portfolio and relationship map.
4. Inspect risk and exception flags, then drill into supporting evidence.
5. Ask an evidence-bounded portfolio question.
6. Generate an allocation brief for the proposed activation.
7. Record **approve**, **reject**, or **needs review** with a note.

Atlas must not deploy capital, execute a contract, or change an external system.

## 7. Product surfaces

The hackathon MVP should contain five judge-visible surfaces:

1. **Portfolio overview** — consolidated assets, exposures, reported value, freshness, and open risks.
2. **Relationship and ownership map** — entities, partners, dependencies, and ownership or contractual relationships.
3. **Risk and exception brief** — prioritized missing, conflicting, stale, concentrated, expiring, or obligation-related issues.
4. **Asset and rights detail** — normalized facts displayed beside their source evidence and review status.
5. **Activation allocation workspace** — proposed activation, AI-assisted brief, evidence, assumptions, and human decision gate.

## 8. P0 functional requirements

| ID | Requirement | Acceptance condition |
| --- | --- | --- |
| **FR-01** | Seeded workspace | A reset action loads the complete fictional portfolio without manual database changes. |
| **FR-02** | Fixture ingestion | Atlas processes the curated PDF, CSV, and Markdown or plain-text fixtures and preserves each document's identity. Ad-hoc upload is not P0. |
| **FR-03** | Normalized portfolio | Assets, exposures, partners, rights, obligations, valuations, dates, and statuses use a consistent domain model. |
| **FR-04** | Evidence provenance | Every material extracted field and derived risk links to its source document and location. |
| **FR-05** | Review state | Each extracted or derived fact carries confidence and review status; missing or conflicting facts are never silently resolved. |
| **FR-06** | Exception engine | Atlas surfaces every deliberately planted stale value, debt or lease obligation, expiring or missing right, conflicting field, partner dependency, and concentration risk. |
| **FR-07** | Portfolio overview | The user can compare exposure, current reported value, reporting freshness, material rights or obligations, and open risks. |
| **FR-08** | Asset and rights detail | The user can inspect normalized facts and reach their source evidence within two interactions. |
| **FR-09** | Relationship map | The user can see how assets, partners, ownership, contracts, and dependencies connect, with contractual edges traceable to evidence. |
| **FR-10** | Agent Q&A | Answers use only portfolio evidence, cite sources, separate fact from inference, and return insufficient evidence when unsupported. |
| **FR-11** | Allocation brief | Atlas produces a brief covering the proposed allocation, rationale, facts, assumptions, conflicts, uncertainty, resource needs, and source evidence. |
| **FR-12** | Human decision gate | The user can approve, reject, or request review; Atlas records the decision, note, owner, and timestamp without executing it. |
| **FR-13** | Deterministic reset | The complete scripted demo can be returned to its canonical starting state. |

## 9. Minimal domain model

| Entity | Purpose |
| --- | --- |
| **Portfolio** | Groups the fictional family-office holdings and exposures |
| **SourceDocument** | Records an uploaded report, spreadsheet, agreement, or contract |
| **Evidence** | Links a field or conclusion to a document location |
| **AssetOrExposure** | Represents equity, property or lease exposure, debt, art, technology, or IP |
| **Partner** | Represents an artist, venue, promoter, brand, operator, distributor, or capital partner |
| **Right** | Records ownership, licensing, exhibition, reproduction, adaptation, exclusivity, territory, or commercial rights |
| **Obligation** | Records debt, payment, delivery, expiry, renewal, covenant, approval, or other commitments |
| **Valuation** | Stores a reported value, date, currency, methodology, and source |
| **RiskFlag** | Records an exception, severity, rationale, evidence, and review state |
| **Activation** | Represents the proposed nightlife or cultural initiative |
| **AllocationBrief** | Stores agent-assisted analysis for the proposed decision |
| **HumanDecision** | Records approve, reject, or needs-review with owner, note, and timestamp |

Every extracted or derived record must retain, where applicable:

- source document
- source location
- confidence
- review status
- creation and update timestamps

## 10. Agentic requirements

### Portfolio intelligence

- consolidate holdings, valuations, debt, performance, concentration, and reporting freshness
- calculate deterministic portfolio totals and exposures from normalized facts
- identify missing or contradictory inputs instead of inventing replacements

### Rights intelligence

- extract parties, ownership, licence type, permitted use, territory, exclusivity, obligations, and expiry
- distinguish ownership of an object, copyright, licence, revenue share, access right, and token
- route uncertain or conflicting rights to review

### Partnership intelligence

- map contractual partners and asset dependencies
- show where multiple exposures rely on the same operator, venue, artist, or distributor
- never imply a partnership exists without source evidence

### Launch coordination

- generate an activation scenario, resource plan, dependencies, risks, and approval gates
- state which recommendations are facts, inferences, or assumptions
- keep cultural, creative, safety, legal, and financial approvals human-led

### Concierge intelligence

- if demand signals are included, use only fictional, aggregated, or permissioned data in the MVP
- label consumer signals as contextual indicators rather than financial evidence
- do not expose or treat personal data as an investment asset

## 11. AI reliability and safety

- Agent answers must be bounded to records supplied by the portfolio retrieval layer.
- Material claims must cite supporting evidence.
- Deterministic code must handle arithmetic, totals, date comparisons, and explicit rule checks.
- The model must abstain when evidence is insufficient.
- Low-confidence, missing, and conflicting facts must remain visible.
- Generated recommendations must not be presented as autonomous investment, legal, tax, valuation, or compliance advice.
- Every proposed allocation requires a human decision.

## 12. Non-functional requirements

- The scripted demo must work deterministically from a clean reset.
- A graceful fallback must preserve the portfolio and risk views if the model API is unavailable.
- No real personal, financial, contractual, or artist data may be committed to the repository.
- No secrets may be committed to the repository or exposed to the client.
- Evidence retrieval must not expose documents outside the active portfolio.
- Every surface must include clear loading, empty, and error states.
- Local setup must be reproducible from documented commands.
- Seeded normalization and risk rules must have automated tests.
- The primary workflow must be usable on a laptop display during judging.

## 13. Acceptance criteria

The MVP is ready for judging when:

1. The canonical positioning and four mechanisms appear consistently.
2. A reset loads the complete fictional portfolio without manual intervention.
3. The PDF, CSV, and Markdown or plain-text fixtures all ingest successfully and preserve source identity.
4. Private assets, real-estate or lease exposure, and private debt are visible.
5. Buzo Originals, digital-art rights, proprietary concierge technology, and a strategic-partner dependency are represented.
6. Every intentionally planted fixture exception is surfaced. This validates the fixture path, not arbitrary-document extraction accuracy.
7. Every material portfolio field and risk flag is traceable to source evidence within two interactions.
8. Missing, conflicting, or low-confidence information is visibly routed to review.
9. The relationship map connects the seeded assets to ownership, contracts, and the planted shared-partner dependency; every contractual edge links to evidence.
10. At least three curated supported questions return their expected evidence, while one curated unsupported question returns insufficient evidence.
11. The allocation brief separates facts, inferences, assumptions, conflicts, and confidence.
12. A human can approve, reject, or request review; the selected outcome, note, owner, and timestamp are recorded and retrievable without executing an external action.
13. When the model API is unavailable, the portfolio and deterministic risk views remain usable and the agentic surfaces show a clear fallback state.
14. From a fresh setup, documented commands can load or reset the seed data and run the automated normalization and risk-rule tests.
15. The complete scripted journey is demonstrable in under three minutes from a clean reset.
16. The UI visibly labels the portfolio as fictional and the product as a hackathon prototype that does not provide investment advice.

## 14. Success metrics and hypotheses

### Hackathon quality metrics

- percentage of planted fixture exceptions surfaced
- percentage of material displayed fields linked to evidence
- curated question grounded-answer rate
- unsupported-question abstention rate
- time to complete the scripted decision journey
- number of manual recovery steps required after reset

### Longer-term hypotheses

- reduced time to consolidate a portfolio reporting cycle
- reduced time from seasonal opportunity to approved event plan
- fewer missed rights expiries and contractual obligations
- increased reuse of technology, partnerships, and event IP
- reduced duplicated operating work and customer-acquisition cost

No longer-term metric should be presented as proven until measured across repeated real workflows.

## 15. Explicit non-goals

The hackathon MVP will not provide:

- real family-office operations, assets under management, custody, brokerage, payments, or contract execution
- autonomous investment advice or valuation authority
- live Buzo booking, attendance, return, or consumer-demand integrations
- claims of actual Buzo Originals ownership, digital-art holdings, or partner commitments
- production-grade arbitrary-document extraction
- full accounting, tax, legal, regulatory, or compliance workflows
- multi-tenant enterprise security or live third-party portfolio connectors
- real-time monitoring or automatic capital deployment
- NFT trading or token speculation
- ad-hoc document upload outside the curated fixture formats

## 16. Future scope — not in the hackathon MVP

- live partnership discovery, relationship management, and ongoing launch-workflow coordination beyond the single seeded activation
- ad-hoc ingestion and review of documents outside the curated fixture bundle
- permissioned Buzo consumer-demand enrichment
- booking, attendance, revenue, and return-outcome integrations
- rights, royalty, provenance, and contract lifecycle management
- multi-entity accounting and valuation integrations
- organization-level permissions, audit controls, and compliance workflows
- continuous portfolio and obligation monitoring
- repeated Buzo Originals and seasonal cultural activations
- direct investment after Buzo has cash flow, governance, underwriting capability, and an appropriate legal structure

## 17. Evidence boundary

Buzo Atlas is currently a strategy and hackathon prototype. The existing Buzo repositories demonstrate the consumer concierge, event ingestion and normalization, recommendations, and planning surfaces.

Atlas portfolio consolidation, Buzo Originals ownership, digital-art holdings, integrated partnership intelligence, and family-office operations remain proposed until implemented or contractually established.

The MVP principle is:

> **One corpus, one portfolio, one evidence-linked allocation decision, and one human approval gate.**
