export const vendorArchive = {
  vendor: "Previous vendor engagement",
  period: "Archived · Q2–Q3 2026",
  summary:
    "Working notes from the prior vendor relationship. This section holds background context and discussion only — not live pipeline data.",
  context: [
    {
      label: "Scope discussed",
      detail: "Media distribution, event supply access, campaign co-creation, and whether a permissioned content-to-action flow could send qualified traffic back to official sources.",
    },
    {
      label: "What we needed",
      detail: "Clear content rights, update frequency, attribution rules, commercial-use boundaries, and a takedown process before any feed or integration moved forward.",
    },
    {
      label: "Open constraints",
      detail: "Informal founder access, audience reach, and data sharing were not treated as guaranteed. Any integration required an explicit value exchange and user-visible data use.",
    },
    {
      label: "Where Atlas fits",
      detail: "Use strategic partnerships as a workspace for relationship owners, commitments, follow-ups, and shared learning — not as a live CRM replacement in the first prototype.",
    },
  ],
  discussions: [
    {
      date: "12 Jun 2026",
      topic: "Kickoff alignment",
      note: "Confirmed the vendor’s role is credibility and supply-side reach, while Buzo owns consumer decision flow and Atlas owns operator coordination.",
    },
    {
      date: "28 Jun 2026",
      topic: "Content-to-action journey",
      note: "Explored a lightweight path: discover on vendor surface → ask Buzo if it fits → compare options → open the official ticket or venue link with attribution preserved.",
    },
    {
      date: "15 Jul 2026",
      topic: "Rights and feed boundaries",
      note: "Paused structured feed work until content rights, attribution, commercial use, and takedown behavior were documented. No implied permission to reuse listings or audience data.",
    },
    {
      date: "02 Aug 2026",
      topic: "Partnership workspace scope",
      note: "Agreed Atlas should store relationship context, campaign briefs, commitments, and outcomes — not attempt full investment-platform breadth in the hackathon slice.",
    },
    {
      date: "09 Aug 2026",
      topic: "Handover",
      note: "Archived vendor discussions here for continuity. Live coordination moves to human review and future approved partner workflows.",
    },
  ],
};

export const partnershipRecords = [
  {
    id: "bandwagon",
    name: "Bandwagon",
    category: "Media + distribution",
    status: "Exploratory archive",
    period: "Archived · Q2–Q3 2026",
    summary: "A prior exploratory conversation about credible event discovery, content-to-action journeys, campaign co-creation, and clear permission boundaries.",
    markdown: `# Bandwagon × Buzo

> **Record:** exploratory archive
> **Period:** Q2–Q3 2026

## Discussion context

Explored credible event discovery, content-to-action journeys, campaign co-creation, and the conditions for a permissioned relationship.

## Scope discussed

- Media distribution and event-supply access
- Campaign co-creation and attribution-preserving journeys
- A permissioned path that returns qualified traffic to official sources

## What needed to be clear

- Content rights, refresh frequency, and commercial-use boundaries
- Attribution rules and a takedown process before any feed work
- A defined value exchange and user-visible data use

## Working boundary

Atlas can retain commitments, follow-ups, and shared learning. It is not a live CRM or evidence that rights, audience access, or a partnership have been granted.`,
    context: vendorArchive.context,
    discussions: vendorArchive.discussions,
  },
  {
    id: "marquee",
    name: "Marquee",
    category: "Venue + nightlife",
    status: "Research context",
    period: "Research note · 2026",
    summary: "An early venue research record for a potential Buzo discovery and conversion workflow. No commercial discussion or partnership is implied.",
    markdown: `# Marquee × Buzo

> **Record:** venue research context
> **Status:** no partnership discussion recorded

## Why it is on the radar

Marquee is a useful reference point for high-intent, DJ-led nightlife discovery in the Marina Bay area.

## Hypothesis to test

- Can Buzo help a group decide whether this venue and a specific night fit their taste, budget, and travel constraints?
- Can the journey send people to the official venue or ticketing destination with clear attribution?

## Evidence to collect

- How event information is published and how often it changes
- Which information can be quoted, linked, or surfaced with permission
- Whether referral, table-booking, or campaign workflows create measurable value

## Guardrails

This is a research note, not a commercial relationship. Do not imply access to listings, customer data, brand assets, or venue inventory without a written agreement.`,
    context: [
      { label: "Focus", detail: "High-intent nightlife discovery and the decision path from a group question to an official venue or ticketing destination." },
      { label: "Evidence needed", detail: "Publishing cadence, permitted information use, attribution requirements, and a measurable value exchange." },
      { label: "Current state", detail: "Research context only. No venue access, data sharing, or commercial arrangement is implied." },
    ],
    discussions: [
      { date: "Research note", topic: "Venue discovery hypothesis", note: "Capture the questions, signals, and permission checks needed before any outreach or integration proposal." },
    ],
  },
  {
    id: "zouk",
    name: "Zouk",
    category: "Venue + nightlife",
    status: "Research context",
    period: "Research note · 2026",
    summary: "An early venue research record for testing reliable club-night discovery and an operator-friendly handoff. No commercial discussion or partnership is implied.",
    markdown: `# Zouk × Buzo

> **Record:** venue research context
> **Status:** no partnership discussion recorded

## Why it is on the radar

Zouk is a strong reference point for recurring club-night decisions around Clarke Quay, where people often choose a venue before they know the night's full programme.

## Hypothesis to test

- Can Buzo make the "where should we go tonight?" decision clearer with current programming, group fit, and logistics?
- Can an operator-facing workflow surface intent without exposing personal data or displacing official booking channels?

## Evidence to collect

- Which programme details are stable enough for discovery and which require same-day verification
- Whether official links, table bookings, or campaign referrals are the right handoff
- What reporting would be useful to a venue without turning Atlas into a CRM

## Guardrails

This is a research note, not a commercial relationship. Do not imply access to programming feeds, customer data, brand assets, or venue inventory without a written agreement.`,
    context: [
      { label: "Focus", detail: "Reliable club-night discovery, group-fit guidance, and a handoff to an official booking or event destination." },
      { label: "Evidence needed", detail: "Programme freshness, approved data use, referral mechanics, and an operator-relevant reporting need." },
      { label: "Current state", detail: "Research context only. No venue access, data sharing, or commercial arrangement is implied." },
    ],
    discussions: [
      { date: "Research note", topic: "Club-night decision flow", note: "Capture the assumptions that need evidence before outreach or an operator workflow is proposed." },
    ],
  },
];
