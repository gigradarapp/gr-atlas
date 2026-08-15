const systemInventory = [
  {
    id: "AG-01",
    name: "Intent Graph Agent",
    type: "Agent",
    purpose: "Turns nightlife intent into explainable venue, event and route options.",
    version: "v2.8.1",
    owner: "Buzo Labs",
    state: "Production",
  },
  {
    id: "AG-04",
    name: "Night Route Planner",
    type: "Agent",
    purpose: "Coordinates timing, distance, availability and group constraints.",
    version: "v1.6.3",
    owner: "Buzo Labs",
    state: "Production",
  },
  {
    id: "WF-07",
    name: "Partner Offer Reconciliation",
    type: "Workflow",
    purpose: "Normalises packages, inventory, blackout dates and commercial terms.",
    version: "v3.2.0",
    owner: "Atlas Ops",
    state: "Review",
  },
  {
    id: "KS-02",
    name: "Culture & Venue Ontology",
    type: "Knowledge",
    purpose: "Shared structure for mood, scene, venue, artist, rights and audience signals.",
    version: "2026.08",
    owner: "Buzo Labs",
    state: "Production",
  },
  {
    id: "IN-12",
    name: "Reservation Mesh",
    type: "Integration",
    purpose: "Connects table, ticket and guest-list availability without exposing credentials.",
    version: "v1.4.2",
    owner: "Platform",
    state: "Production",
  },
  {
    id: "IF-03",
    name: "Cultural Signal Warehouse",
    type: "Infrastructure",
    purpose: "Evidence-linked store for intent, recommendations, selections and outcomes.",
    version: "v2.1.0",
    owner: "Data",
    state: "Production",
  },
] as const;

const runtimeHealth = [
  { label: "Agent success", value: "97.8%", detail: "+0.6% / 7d", tone: "healthy" },
  { label: "P95 response", value: "2.4s", detail: "Within 3.0s SLO", tone: "healthy" },
  { label: "Grounded outputs", value: "94.1%", detail: "+2.3% / 30d", tone: "healthy" },
  { label: "Fallback rate", value: "3.7%", detail: "1 route degraded", tone: "review" },
] as const;

const dataSources = [
  { source: "Buzo concierge sessions", records: "48.2k intents", sync: "2 min ago", quality: "98%", state: "Live" },
  { source: "Partner inventory feeds", records: "1,284 offers", sync: "8 min ago", quality: "91%", state: "Live" },
  { source: "Ticketing & attendance", records: "18.6k outcomes", sync: "24 min ago", quality: "88%", state: "Review" },
  { source: "Venue knowledge register", records: "376 venues", sync: "1 hr ago", quality: "96%", state: "Live" },
] as const;

const demandSignals = [
  { name: "Afro-electronic", intent: "8,420", selection: "38%", outcome: "71%", change: "+24%" },
  { name: "Art after dark", intent: "6,180", selection: "42%", outcome: "76%", change: "+18%" },
  { name: "F1 late-night", intent: "5,760", selection: "51%", outcome: "83%", change: "+31%" },
  { name: "Intimate live sets", intent: "4,390", selection: "36%", outcome: "68%", change: "+12%" },
] as const;

const technologyRights = [
  { asset: "Concierge orchestration system", basis: "Buzo-authored source + workflows", territory: "Global", control: "Owned", renewal: "—" },
  { asset: "Culture & Venue Ontology", basis: "Proprietary knowledge structure", territory: "Global", control: "Owned", renewal: "—" },
  { asset: "Partner catalogue adapter", basis: "Co-developed connector licence", territory: "SEA", control: "Licensed", renewal: "31 Mar 2027" },
  { asset: "Audience intent taxonomy", basis: "Buzo first-party interaction data", territory: "SG · MY", control: "Restricted", renewal: "Policy review" },
] as const;

const integrations = [
  { name: "Bandwagon", role: "Events + editorial distribution", status: "Healthy", latency: "420ms", lastSync: "08:39" },
  { name: "Chope", role: "Restaurant + venue reservation", status: "Healthy", latency: "610ms", lastSync: "08:38" },
  { name: "Ticketing adapter", role: "Tickets + attendance outcomes", status: "Degraded", latency: "1.8s", lastSync: "08:21" },
  { name: "Venue partner portal", role: "Inventory + operating constraints", status: "Healthy", latency: "290ms", lastSync: "08:40" },
] as const;

const evaluations = [
  { metric: "Recommendation acceptance", value: "41.8%", benchmark: "Target ≥ 38%", delta: "+3.1 pts" },
  { metric: "Venue constraint accuracy", value: "96.4%", benchmark: "Target ≥ 95%", delta: "+0.8 pts" },
  { metric: "Novelty without mismatch", value: "88.7%", benchmark: "Target ≥ 86%", delta: "+1.4 pts" },
  { metric: "Outcome capture coverage", value: "63.2%", benchmark: "Target ≥ 70%", delta: "−6.8 pts" },
] as const;

const risks = [
  {
    severity: "High",
    title: "Outcome feed is 19 minutes behind SLO",
    impact: "Tonight's model evaluation may under-count attended bookings.",
    owner: "Data platform",
    due: "Now",
  },
  {
    severity: "Medium",
    title: "Two venue policies lack evidence freshness",
    impact: "Closing-time constraints may be outdated for weekend routes.",
    owner: "Knowledge ops",
    due: "4 hrs",
  },
  {
    severity: "Watch",
    title: "F1 demand cluster is over-represented",
    impact: "Seasonal traffic could distort baseline preference learning.",
    owner: "Applied AI",
    due: "2 days",
  },
] as const;

export default function TechnologyTab() {
  return (
    <section className="atlas-tab atlas-technology-tab" aria-labelledby="atlas-technology-title">
      <header className="atlas-tab-header atlas-tech-header">
        <div className="atlas-tab-title-group">
          <p className="atlas-eyebrow">04 / Proprietary concierge IP + technology</p>
          <h1 id="atlas-technology-title">The system that learns after every night.</h1>
          <p className="atlas-tab-intro">
            Atlas governs the reusable agents, workflows, integrations, recommendation systems, knowledge
            structures and infrastructure that turn nightlife intent into compounding operating intelligence.
          </p>
        </div>
        <dl className="atlas-summary-metrics atlas-tech-summary" aria-label="Technology portfolio summary">
          <div className="atlas-summary-metric"><dt>Reusable systems</dt><dd>09</dd></div>
          <div className="atlas-summary-metric"><dt>Runtime health</dt><dd>97.8%</dd></div>
          <div className="atlas-summary-metric"><dt>Evidence coverage</dt><dd>94.1%</dd></div>
          <div className="atlas-summary-metric"><dt>Open risks</dt><dd>03</dd></div>
        </dl>
      </header>

      <div className="atlas-tech-health-strip" aria-label="Agent and runtime health">
        {runtimeHealth.map((item) => (
          <article className={`atlas-tech-health-card atlas-tech-tone-${item.tone}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.detail}</small>
          </article>
        ))}
        <article className="atlas-tech-runtime-card">
          <span className="atlas-live-indicator"><i aria-hidden="true" /> Runtime / Singapore</span>
          <strong>5 agents online</strong>
          <small>Last evaluated 08:42 SGT</small>
        </article>
      </div>

      <div className="atlas-tech-grid">
        <article className="atlas-panel atlas-tech-inventory-panel" aria-labelledby="atlas-tech-inventory-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">System register</p><h2 id="atlas-tech-inventory-title">Reusable IP inventory</h2></div>
            <button className="atlas-text-button" type="button">Open architecture register ↗</button>
          </header>
          <div className="atlas-table-wrap">
            <table className="atlas-data-table atlas-tech-inventory-table">
              <thead><tr><th>System</th><th>Type</th><th>Operating purpose</th><th>Version</th><th>Control</th><th>State</th></tr></thead>
              <tbody>
                {systemInventory.map((system) => (
                  <tr key={system.id}>
                    <th scope="row"><small>{system.id}</small><strong>{system.name}</strong></th>
                    <td>{system.type}</td>
                    <td>{system.purpose}</td>
                    <td><code>{system.version}</code></td>
                    <td>{system.owner}</td>
                    <td><span className={`atlas-status atlas-status-${system.state.toLowerCase()}`}>{system.state}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="atlas-panel atlas-tech-lineage-panel" aria-labelledby="atlas-tech-lineage-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Ingestion + lineage</p><h2 id="atlas-tech-lineage-title">Evidence into intelligence</h2></div>
            <span className="atlas-panel-count">4 sources / 68.4k records</span>
          </header>
          <ol className="atlas-tech-lineage-flow" aria-label="Data lineage stages">
            <li><span>01</span><div><strong>Capture</strong><small>Intent · inventory · booking · attendance</small></div></li>
            <li><span>02</span><div><strong>Normalise</strong><small>Identity · venue · rights · time · evidence</small></div></li>
            <li><span>03</span><div><strong>Resolve</strong><small>Deduplicate · reconcile · confidence-score</small></div></li>
            <li><span>04</span><div><strong>Learn</strong><small>Demand graph · evaluations · operator briefs</small></div></li>
          </ol>
          <ul className="atlas-tech-source-list" aria-label="Connected data sources">
            {dataSources.map((source) => (
              <li key={source.source}>
                <span className="atlas-tech-source-mark" aria-hidden="true" />
                <div><strong>{source.source}</strong><small>{source.records}</small></div>
                <span><small>Quality</small><b>{source.quality}</b></span>
                <time>{source.sync}</time>
                <em className={`atlas-status atlas-status-${source.state.toLowerCase()}`}>{source.state}</em>
              </li>
            ))}
          </ul>
        </article>

        <article className="atlas-panel atlas-tech-demand-panel" aria-labelledby="atlas-tech-demand-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Closed-loop advantage</p><h2 id="atlas-tech-demand-title">Nightlife demand graph</h2></div>
            <span className="atlas-positive-signal">+22% signal depth</span>
          </header>
          <div className="atlas-tech-demand-loop" aria-label="Intent to outcome learning loop">
            <span>Wanted</span><i aria-hidden="true">→</i><span>Recommended</span><i aria-hidden="true">→</i>
            <span>Selected</span><i aria-hidden="true">→</i><span>Booked</span><i aria-hidden="true">→</i>
            <span>Attended</span><i aria-hidden="true">→</i><span>Returned</span>
          </div>
          <div className="atlas-table-wrap">
            <table className="atlas-data-table atlas-tech-demand-table">
              <thead><tr><th>Intent cluster</th><th>Observed intent</th><th>Selection rate</th><th>Positive outcome</th><th>30d signal</th></tr></thead>
              <tbody>
                {demandSignals.map((signal) => (
                  <tr key={signal.name}><th scope="row">{signal.name}</th><td>{signal.intent}</td><td>{signal.selection}</td><td>{signal.outcome}</td><td><strong>{signal.change}</strong></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="atlas-tech-method-note">Aggregated fictional signals only. Personal identity is separated from the portfolio intelligence layer.</p>
        </article>

        <article className="atlas-panel atlas-tech-rights-panel" aria-labelledby="atlas-tech-rights-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Control + defensibility</p><h2 id="atlas-tech-rights-title">IP &amp; technology rights</h2></div>
            <span className="atlas-panel-count">2 owned / 1 licensed / 1 restricted</span>
          </header>
          <div className="atlas-table-wrap">
            <table className="atlas-data-table atlas-tech-rights-table">
              <thead><tr><th>Asset</th><th>Rights basis</th><th>Territory</th><th>Control</th><th>Renewal / review</th></tr></thead>
              <tbody>
                {technologyRights.map((item) => (
                  <tr key={item.asset}><th scope="row">{item.asset}</th><td>{item.basis}</td><td>{item.territory}</td><td><span className={`atlas-status atlas-status-${item.control.toLowerCase()}`}>{item.control}</span></td><td>{item.renewal}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="atlas-panel atlas-tech-integrations-panel" aria-labelledby="atlas-tech-integrations-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Connected operating layer</p><h2 id="atlas-tech-integrations-title">Integration status</h2></div>
            <button className="atlas-text-button" type="button">Manage connections ↗</button>
          </header>
          <ul className="atlas-tech-integration-list">
            {integrations.map((integration) => (
              <li key={integration.name}>
                <span className={`atlas-tech-connection-dot atlas-tech-connection-${integration.status.toLowerCase()}`} aria-hidden="true" />
                <div><strong>{integration.name}</strong><small>{integration.role}</small></div>
                <span><small>Latency</small><b>{integration.latency}</b></span>
                <span><small>Last sync</small><b>{integration.lastSync}</b></span>
                <em className={`atlas-status atlas-status-${integration.status.toLowerCase()}`}>{integration.status}</em>
              </li>
            ))}
          </ul>
        </article>

        <article className="atlas-panel atlas-tech-evaluation-panel" aria-labelledby="atlas-tech-evaluation-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Evaluation suite / 30 days</p><h2 id="atlas-tech-evaluation-title">Recommendation quality</h2></div>
            <span className="atlas-live-indicator"><i aria-hidden="true" /> Weekly evaluation passed</span>
          </header>
          <div className="atlas-tech-evaluation-grid">
            {evaluations.map((evaluation) => (
              <article key={evaluation.metric}>
                <span>{evaluation.metric}</span>
                <strong>{evaluation.value}</strong>
                <small>{evaluation.benchmark}</small>
                <em className={evaluation.delta.startsWith("−") ? "atlas-tech-negative" : "atlas-tech-positive"}>{evaluation.delta}</em>
              </article>
            ))}
          </div>
          <p className="atlas-tech-method-note">Evaluation set: 1,240 anonymised Singapore concierge journeys · Human-rated relevance sample: 180.</p>
        </article>

        <article className="atlas-panel atlas-tech-risk-panel" aria-labelledby="atlas-tech-risk-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Reliability + governance</p><h2 id="atlas-tech-risk-title">Incident &amp; risk queue</h2></div>
            <span className="atlas-alert-count">03 require attention</span>
          </header>
          <ul className="atlas-exception-list atlas-tech-risk-list">
            {risks.map((risk) => (
              <li className="atlas-exception-item" key={risk.title}>
                <span className={`atlas-risk-level atlas-risk-${risk.severity.toLowerCase()}`}>{risk.severity}</span>
                <div><p>{risk.title}</p><small>{risk.impact}</small></div>
                <span className="atlas-tech-risk-owner"><small>Owner</small><b>{risk.owner}</b></span>
                <time>{risk.due}</time>
                <button className="atlas-icon-button" type="button" aria-label={`Review risk: ${risk.title}`}>↗</button>
              </li>
            ))}
          </ul>
        </article>

        <aside className="atlas-panel atlas-agent-brief atlas-tech-agent-brief" aria-labelledby="atlas-tech-agent-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Agent / Optimisation brief 021</p><h2 id="atlas-tech-agent-title">Restore the outcome loop before expanding reach.</h2></div>
            <span className="atlas-agent-confidence">Evidence confidence 89%</span>
          </header>
          <p className="atlas-agent-summary">
            Atlas found that recommendation acceptance is above target, but outcome capture is 6.8 points below
            policy. Scaling the F1 campaign now would improve reach while weakening the evidence needed to learn
            which nights create return behaviour.
          </p>
          <ol className="atlas-agent-actions">
            <li><span>01</span><div><strong>Stabilise</strong><p>Retry the delayed ticketing outcome feed and reconcile the missing 214 attendance records.</p></div></li>
            <li><span>02</span><div><strong>Protect</strong><p>Cap F1 seasonal traffic at 25% of the evaluation sample to preserve baseline scene diversity.</p></div></li>
            <li><span>03</span><div><strong>Evaluate</strong><p>Run a seven-day shadow test before promoting Night Route Planner v1.6.4 to production.</p></div></li>
          </ol>
          <div className="atlas-evidence-row atlas-tech-agent-evidence">
            <span>4 runtime logs</span><span>1,240 journeys</span><span>3 data-quality checks</span><span>2 assumptions</span>
          </div>
          <div className="atlas-tech-agent-boundary">
            <strong>Agent boundary</strong>
            <p>Atlas can prepare configuration changes and an evaluation plan. It cannot deploy, alter data policy, contact partners or modify rights without an authorised operator.</p>
          </div>
          <footer className="atlas-review-gate">
            <div><span className="atlas-gate-lock" aria-hidden="true">●</span><p><strong>Human approval required</strong><small>Review evidence, assumptions and rollback conditions before any runtime change.</small></p></div>
            <div className="atlas-review-actions"><button className="atlas-button-secondary" type="button">Request changes</button><button className="atlas-button-primary" type="button">Review optimisation brief</button></div>
          </footer>
        </aside>
      </div>

      <p className="atlas-tech-disclaimer">Fictional prototype data · Evidence-linked recommendations · Human-controlled execution</p>
    </section>
  );
}
