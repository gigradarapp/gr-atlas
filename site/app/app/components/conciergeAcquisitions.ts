export type IpDocument = {
  name: string;
  filename: string;
};

export type AcquiredIpTechnology = {
  id: string;
  ip: string;
  technology: string;
  valuation: string;
  documents: IpDocument[];
};

export const acquiredIpTechnology: AcquiredIpTechnology[] = [
  {
    id: "IP-01",
    ip: "Concierge orchestration system",
    technology: "Agent runtime, workflow engine, and operator review gates",
    valuation: "S$1,240,000",
    documents: [
      { name: "Assignment deed", filename: "IP-01-assignment-deed.pdf" },
      { name: "Architecture spec", filename: "IP-01-orchestration-spec.pdf" },
    ],
  },
  {
    id: "IP-02",
    ip: "Intent Graph Agent",
    technology: "Nightlife intent parsing and explainable recommendation stack",
    valuation: "S$980,000",
    documents: [
      { name: "IP register extract", filename: "IP-02-register-extract.pdf" },
      { name: "Model card", filename: "IP-02-intent-graph-model-card.pdf" },
    ],
  },
  {
    id: "IP-03",
    ip: "Night Route Planner",
    technology: "Timing, distance, availability, and group-constraint routing",
    valuation: "S$620,000",
    documents: [
      { name: "Acquisition memo", filename: "IP-03-acquisition-memo.pdf" },
      { name: "Routing logic brief", filename: "IP-03-route-planner-brief.pdf" },
    ],
  },
  {
    id: "IP-04",
    ip: "Culture & Venue Ontology",
    technology: "Proprietary knowledge graph for mood, scene, venue, and rights",
    valuation: "S$1,450,000",
    documents: [
      { name: "Ontology schema", filename: "IP-04-ontology-schema.pdf" },
      { name: "Rights schedule", filename: "IP-04-rights-schedule.pdf" },
      { name: "Due diligence pack", filename: "IP-04-dd-pack.pdf" },
    ],
  },
  {
    id: "IP-05",
    ip: "Partner Offer Reconciliation",
    technology: "Package, inventory, blackout-date, and terms normalisation workflow",
    valuation: "S$410,000",
    documents: [
      { name: "Workflow diagram", filename: "IP-05-reconciliation-flow.pdf" },
      { name: "Vendor terms addendum", filename: "IP-05-vendor-addendum.pdf" },
    ],
  },
  {
    id: "IP-06",
    ip: "Reservation Mesh",
    technology: "Table, ticket, and guest-list availability integration layer",
    valuation: "S$530,000",
    documents: [
      { name: "Integration charter", filename: "IP-06-integration-charter.pdf" },
      { name: "Connector inventory", filename: "IP-06-connector-inventory.pdf" },
    ],
  },
  {
    id: "IP-07",
    ip: "Cultural Signal Warehouse",
    technology: "Evidence-linked store for intent, selection, and outcome data",
    valuation: "S$760,000",
    documents: [
      { name: "Data lineage map", filename: "IP-07-lineage-map.pdf" },
      { name: "Retention policy", filename: "IP-07-retention-policy.pdf" },
    ],
  },
  {
    id: "IP-08",
    ip: "Audience intent taxonomy",
    technology: "First-party interaction classification and demand clustering",
    valuation: "S$290,000",
    documents: [
      { name: "Taxonomy workbook", filename: "IP-08-taxonomy-workbook.pdf" },
      { name: "Classification audit", filename: "IP-08-classification-audit.pdf" },
    ],
  },
  {
    id: "IP-09",
    ip: "Partner catalogue adapter",
    technology: "Licensed connector for SEA partner inventory and editorial feeds",
    valuation: "S$380,000",
    documents: [
      { name: "Licence summary", filename: "IP-09-licence-summary.pdf" },
      { name: "Adapter API notes", filename: "IP-09-adapter-api-notes.pdf" },
    ],
  },
];

export const ipTechnologyTotals = {
  records: acquiredIpTechnology.length,
  documents: acquiredIpTechnology.reduce((total, item) => total + item.documents.length, 0),
};

export const ipTechnologyPortfolioValue = "S$6,660,000";
