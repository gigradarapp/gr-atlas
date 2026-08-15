const partnerGroups = [
  { type: "Artists", name: "Syndicate SG", detail: "Audiovisual commission", status: "Active" },
  { type: "Venues", name: "The Projector", detail: "2 activation windows", status: "Ready" },
  { type: "Promoters", name: "Collective Minds", detail: "Regional routing", status: "Active" },
  { type: "Hospitality", name: "The Lo & Behold Group", detail: "Guest experience pilot", status: "Review" },
  { type: "Brands", name: "Tiger Soju Infusions", detail: "Seasonal sponsorship", status: "Draft" },
  { type: "Technology", name: "Chope", detail: "Reservation integration", status: "Ready" },
  { type: "Distributors", name: "Bandwagon", detail: "Audience distribution", status: "Active" },
  { type: "Capital", name: "Northbank Partners", detail: "Co-investment mandate", status: "Review" },
];

const pipeline = [
  { stage: "Qualified", count: "06", value: "$184k", next: "2 intros due" },
  { stage: "Designing", count: "04", value: "$126k", next: "Rights split" },
  { stage: "Negotiating", count: "03", value: "$92k", next: "Legal review" },
  { stage: "Committed", count: "05", value: "$218k", next: "Activation" },
];

const commitments = [
  { owner: "The Projector", commitment: "300-capacity hall hold", due: "18 Aug", dependency: "Artist routing", state: "Confirmed" },
  { owner: "Bandwagon", commitment: "Editorial + ticketing launch", due: "22 Aug", dependency: "Key visual", state: "At risk" },
  { owner: "Syndicate SG", commitment: "Original AV performance", due: "28 Aug", dependency: "Rights schedule", state: "In review" },
  { owner: "Northbank Partners", commitment: "Release production tranche", due: "02 Sep", dependency: "Human IC approval", state: "Blocked" },
];

const activations = [
  { date: "22 AUG", name: "Hungry Ghost listening room", partners: "Syndicate SG · The Projector", mode: "Cultural pilot" },
  { date: "14 SEP", name: "F1 after-dark route", partners: "Bandwagon · Chope · 4 venues", mode: "Demand capture" },
  { date: "05 OCT", name: "Moonphase Assembly", partners: "Collective Minds · Northbank", mode: "Buzo Original" },
  { date: "31 OCT", name: "Night Bloom: Monsoon", partners: "Artist + hospitality consortium", mode: "Rights expansion" },
];

const exceptions = [
  { level: "High", issue: "Distribution launch precedes artwork approval by 48 hours.", action: "Move launch or fast-track creative review." },
  { level: "Medium", issue: "Venue cancellation clause differs from the master rights schedule.", action: "Reconcile before deposit release." },
  { level: "Watch", issue: "F1 audience forecast relies on one incomplete ticketing feed.", action: "Request second demand signal." },
];

export default function PartnershipsTab() {
  return (
    <section className="atlas-tab atlas-partnerships-tab" aria-labelledby="atlas-partnerships-title">
      <header className="atlas-tab-header">
        <div className="atlas-tab-title-group">
          <p className="atlas-eyebrow">01 / Strategic partnerships</p>
          <h1 id="atlas-partnerships-title">Relationship capital, coordinated.</h1>
          <p className="atlas-tab-intro">
            Atlas turns partner conversations, rights, commitments and dependencies into a shared operating view.
          </p>
        </div>
        <dl className="atlas-summary-metrics" aria-label="Partnership summary">
          <div className="atlas-summary-metric"><dt>Active network</dt><dd>27 partners</dd></div>
          <div className="atlas-summary-metric"><dt>Committed value</dt><dd>S$218k</dd></div>
          <div className="atlas-summary-metric"><dt>Readiness</dt><dd>86%</dd></div>
        </dl>
      </header>

      <div className="atlas-partnership-grid">
        <article className="atlas-panel atlas-relationship-panel" aria-labelledby="atlas-network-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Relationship graph</p><h2 id="atlas-network-title">Partner network</h2></div>
            <span className="atlas-live-indicator"><i aria-hidden="true" /> Live model</span>
          </header>
          <div className="atlas-relationship-map" aria-label="Partner categories connected through Buzo Atlas">
            <div className="atlas-map-core"><span>BUZO</span><strong>ATLAS</strong><small>27 active edges</small></div>
            <div className="atlas-map-orbit atlas-map-orbit-one" aria-hidden="true" />
            <div className="atlas-map-orbit atlas-map-orbit-two" aria-hidden="true" />
            <span className="atlas-map-node atlas-map-node-artists">Artists <b>04</b></span>
            <span className="atlas-map-node atlas-map-node-venues">Venues <b>06</b></span>
            <span className="atlas-map-node atlas-map-node-promoters">Promoters <b>03</b></span>
            <span className="atlas-map-node atlas-map-node-hospitality">Hospitality <b>04</b></span>
            <span className="atlas-map-node atlas-map-node-brands">Brands <b>03</b></span>
            <span className="atlas-map-node atlas-map-node-technology">Technology <b>02</b></span>
            <span className="atlas-map-node atlas-map-node-distributors">Distributors <b>02</b></span>
            <span className="atlas-map-node atlas-map-node-capital">Capital <b>03</b></span>
          </div>
          <ul className="atlas-partner-list" aria-label="Representative partners">
            {partnerGroups.map((partner) => (
              <li className="atlas-partner-row" key={partner.type}>
                <span className="atlas-partner-type">{partner.type}</span>
                <span className="atlas-partner-name"><strong>{partner.name}</strong><small>{partner.detail}</small></span>
                <span className={`atlas-status atlas-status-${partner.status.toLowerCase().replace(" ", "-")}`}>{partner.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="atlas-panel atlas-pipeline-panel" aria-labelledby="atlas-pipeline-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Commercial flow</p><h2 id="atlas-pipeline-title">Partnership pipeline</h2></div>
            <button className="atlas-text-button" type="button">View all 18 <span aria-hidden="true">↗</span></button>
          </header>
          <div className="atlas-pipeline-stages">
            {pipeline.map((item, index) => (
              <div className="atlas-pipeline-stage" key={item.stage}>
                <span className="atlas-stage-index">0{index + 1}</span>
                <h3>{item.stage}</h3>
                <strong>{item.count}</strong>
                <dl><div><dt>Potential</dt><dd>{item.value}</dd></div><div><dt>Next gate</dt><dd>{item.next}</dd></div></dl>
              </div>
            ))}
          </div>
        </article>

        <article className="atlas-panel atlas-commitments-panel" aria-labelledby="atlas-commitments-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Execution register</p><h2 id="atlas-commitments-title">Commitments &amp; dependencies</h2></div>
            <span className="atlas-panel-count">04 open</span>
          </header>
          <div className="atlas-table-wrap">
            <table className="atlas-data-table">
              <thead><tr><th>Partner</th><th>Commitment</th><th>Due</th><th>Dependency</th><th>State</th></tr></thead>
              <tbody>
                {commitments.map((item) => (
                  <tr key={item.owner}>
                    <th scope="row">{item.owner}</th><td>{item.commitment}</td><td>{item.due}</td><td>{item.dependency}</td>
                    <td><span className={`atlas-status atlas-status-${item.state.toLowerCase().replace(" ", "-")}`}>{item.state}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="atlas-panel atlas-calendar-panel" aria-labelledby="atlas-calendar-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Next 90 days</p><h2 id="atlas-calendar-title">Activation calendar</h2></div>
            <span className="atlas-panel-count">Singapore / SGT</span>
          </header>
          <ol className="atlas-activation-list">
            {activations.map((item) => (
              <li className="atlas-activation-item" key={item.name}>
                <time>{item.date}</time>
                <div><h3>{item.name}</h3><p>{item.partners}</p></div>
                <span>{item.mode}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="atlas-panel atlas-risk-panel" aria-labelledby="atlas-risks-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Attention queue</p><h2 id="atlas-risks-title">Risks &amp; exceptions</h2></div>
            <span className="atlas-alert-count">03 flagged</span>
          </header>
          <ul className="atlas-exception-list">
            {exceptions.map((item) => (
              <li className="atlas-exception-item" key={item.issue}>
                <span className={`atlas-risk-level atlas-risk-${item.level.toLowerCase()}`}>{item.level}</span>
                <div><p>{item.issue}</p><small>{item.action}</small></div>
                <button className="atlas-icon-button" type="button" aria-label={`Review ${item.level.toLowerCase()} risk`}>↗</button>
              </li>
            ))}
          </ul>
        </article>

        <aside className="atlas-panel atlas-agent-brief" aria-labelledby="atlas-agent-brief-title">
          <header className="atlas-panel-header">
            <div><p className="atlas-panel-kicker">Agent / Coordination brief 014</p><h2 id="atlas-agent-brief-title">Protect the October production window.</h2></div>
            <span className="atlas-agent-confidence">Evidence confidence 91%</span>
          </header>
          <p className="atlas-agent-summary">
            Atlas reconciled the venue hold, artist route, distribution launch and capital-release conditions. One sequencing conflict needs a human decision before commitments can advance.
          </p>
          <ol className="atlas-agent-actions">
            <li><span>01</span><div><strong>Coordinate</strong><p>Move Bandwagon&apos;s launch to 24 August, after the commissioned key visual clears artist approval.</p></div></li>
            <li><span>02</span><div><strong>Resolve</strong><p>Align the venue cancellation clause with the Moonphase master rights schedule.</p></div></li>
            <li><span>03</span><div><strong>Prepare</strong><p>Release an updated partner brief and S$46k production-tranche recommendation.</p></div></li>
          </ol>
          <div className="atlas-evidence-row"><span>8 partner records</span><span>3 contracts</span><span>2 demand feeds</span><span>Last reconciled 08:42 SGT</span></div>
          <footer className="atlas-review-gate">
            <div><span className="atlas-gate-lock" aria-hidden="true">●</span><p><strong>Human review required</strong><small>No contract, payment, rights transfer or partner message will be executed automatically.</small></p></div>
            <div className="atlas-review-actions"><button className="atlas-button-secondary" type="button">Request changes</button><button className="atlas-button-primary" type="button">Review coordination brief</button></div>
          </footer>
        </aside>
      </div>
    </section>
  );
}
