const portfolioMechanisms = [
  {
    index: "01",
    name: "Strategic partnerships",
    metric: "12",
    detail: "7 ready · 3 in review",
    signal: "+18%",
  },
  {
    index: "02",
    name: "Buzo Originals",
    metric: "06",
    detail: "4 active rights windows",
    signal: "+28%",
  },
  {
    index: "03",
    name: "Digital art",
    metric: "24",
    detail: "21 rights-complete works",
    signal: "+09%",
  },
  {
    index: "04",
    name: "Concierge IP + technology",
    metric: "09",
    detail: "5 reusable agent systems",
    signal: "+31%",
  },
];

const demandBars = [37, 44, 41, 58, 49, 66, 62, 79, 71, 86, 91, 100];

const operatingFeed = [
  {
    index: "01",
    stage: "Learn",
    status: "Reconciled",
    copy: "A new venue report was matched against the programme, provenance and rights registers.",
  },
  {
    index: "02",
    stage: "Coordinate",
    status: "Decision flagged",
    copy: "Artist, venue and distribution commitments are aligned for the next production window.",
  },
  {
    index: "03",
    stage: "Allocate",
    status: "Human review",
    copy: "A seasonal activation brief is ready for an operator to approve, revise or defer.",
  },
];

const evidenceItems = [
  ["Venue capacity report", "Verified", "Today · 08:31"],
  ["Artist rights schedule", "Verified", "Yesterday · 19:12"],
  ["Distribution commitment", "Review", "Yesterday · 17:44"],
] as const;

export default function OverviewTab() {
  return (
    <section className="atlas-overview" aria-labelledby="atlas-overview-title">
      <header className="atlas-console-header">
        <div className="atlas-console-title-wrap">
          <span className="atlas-live-dot" aria-hidden="true" />
          <div>
            <p className="atlas-eyebrow">Atlas / Cultural intelligence</p>
            <h1 className="atlas-console-title" id="atlas-overview-title">
              Portfolio operating view
            </h1>
          </div>
        </div>
      </header>

      <div className="atlas-portfolio-strip" aria-label="Portfolio summary">
        <div className="atlas-strip-intro">
          <span className="atlas-mono-label">Portfolio mechanisms / 04</span>
          <strong>One agentic family office.</strong>
        </div>
        {portfolioMechanisms.map((mechanism) => (
          <article className="atlas-mechanism-card" key={mechanism.index}>
            <div className="atlas-card-index-row">
              <span className="atlas-card-index">{mechanism.index}</span>
              <span className="atlas-positive-signal">{mechanism.signal}</span>
            </div>
            <p>{mechanism.name}</p>
            <div className="atlas-mechanism-metric">
              <strong>{mechanism.metric}</strong>
              <span>{mechanism.detail}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="atlas-intelligence-grid">
        <article className="atlas-active-right">
          <div className="atlas-panel-kicker">
            <span>Active cultural right</span>
            <span>01</span>
          </div>

          <div className="atlas-right-heading">
            <h2>Moonphase Assembly</h2>
            <p>Seasonal event IP / partnership atlas</p>
          </div>

          <ul className="atlas-signal-tags" aria-label="Active partner and demand signals">
            <li><span className="atlas-signal-dot atlas-signal-dot-partner" aria-hidden="true" />Partner · Collective Minds</li>
            <li><span className="atlas-signal-dot atlas-signal-dot-demand" aria-hidden="true" />Demand · Rising</li>
            <li><span className="atlas-signal-dot atlas-signal-dot-rights" aria-hidden="true" />Rights · Window open</li>
          </ul>

          <dl className="atlas-right-metrics">
            <div>
              <dt>Partner readiness</dt>
              <dd>86%</dd>
            </div>
            <div>
              <dt>Rights window</dt>
              <dd>47 days</dd>
            </div>
            <div>
              <dt>Evidence confidence</dt>
              <dd>92%</dd>
            </div>
          </dl>
        </article>

        <article className="atlas-allocation-brief">
          <div className="atlas-panel-kicker">
            <span>Allocation brief</span>
            <span>Agent / 03</span>
          </div>

          <div className="atlas-brief-copy">
            <h2>
              The next season is <em>coalescing.</em>
            </h2>
            <p>
              Atlas connects intent, venue capacity, partner commitments and owned cultural rights into a
              decision-ready operating view.
            </p>
          </div>

          <div className="atlas-demand-chart" aria-label="Demand signal trend increased 28 percent">
            <div className="atlas-demand-chart-topline">
              <span>Audience intent / 12 weeks</span>
              <strong>Demand signal +28%</strong>
            </div>
            <div className="atlas-bars" aria-hidden="true">
              {demandBars.map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="atlas-operating-feed" aria-label="Agent operating feed">
            {operatingFeed.map((item) => (
              <section className="atlas-feed-item" key={item.index}>
                <span className="atlas-feed-index">{item.index}</span>
                <div>
                  <div className="atlas-feed-heading">
                    <h3>{item.stage}</h3>
                    <span>{item.status}</span>
                  </div>
                  <p>{item.copy}</p>
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <div className="atlas-review-grid">
        <article className="atlas-evidence-panel">
          <div className="atlas-panel-kicker">
            <span>Evidence register</span>
            <span>18 linked</span>
          </div>
          <div className="atlas-evidence-list" role="list">
            {evidenceItems.map(([name, status, time]) => (
              <div className="atlas-evidence-row" role="listitem" key={name}>
                <span className="atlas-evidence-mark" aria-hidden="true" />
                <strong>{name}</strong>
                <span className={status === "Review" ? "atlas-status-review" : "atlas-status-verified"}>
                  {status}
                </span>
                <time>{time}</time>
              </div>
            ))}
          </div>
        </article>

        <aside className="atlas-review-panel" aria-label="Human review queue">
          <div className="atlas-panel-kicker">
            <span>Human review</span>
            <span>Required</span>
          </div>
          <div className="atlas-review-counts">
            <div>
              <strong>03</strong>
              <span>Decisions queued</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Rights conflicts</span>
            </div>
          </div>
          <button className="atlas-review-button" type="button">
            Open review room <span aria-hidden="true">↗</span>
          </button>
        </aside>
      </div>

      <footer className="atlas-wireframe-note">
        <span>Fictional operating data</span>
        <span>Human-reviewed decisions</span>
        <span>Not investment advice</span>
      </footer>
    </section>
  );
}
