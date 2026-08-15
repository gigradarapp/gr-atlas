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
    context: vendorArchive.context,
    discussions: vendorArchive.discussions,
  },
];
