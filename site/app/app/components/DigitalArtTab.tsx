const collectionWorks = [
  {
    id: "BA-024",
    title: "Monsoon Memory No. 3",
    artist: "Aisha Rahman",
    format: "Audiovisual",
    location: "Gillman Barracks",
    status: "Rights complete",
    value: "S$42K",
    freshness: "11d",
  },
  {
    id: "BA-019",
    title: "Orchid Protocol",
    artist: "Lim Wei",
    format: "Interactive",
    location: "Buzo archive",
    status: "Exhibition review",
    value: "S$31K",
    freshness: "34d",
  },
  {
    id: "BA-017",
    title: "Heat / Concrete",
    artist: "Nadia Yusuf",
    format: "Physical",
    location: "Partner storage",
    status: "Rights complete",
    value: "S$18K",
    freshness: "8d",
  },
  {
    id: "BA-011",
    title: "Afterhours Index",
    artist: "Studio Kaki",
    format: "Digital",
    location: "Rights vault",
    status: "Exception",
    value: "S$27K",
    freshness: "91d",
  },
] as const;

const provenance = [
  { date: "12 FEB 2025", event: "Commissioned", party: "Buzo Labs ↔ Aisha Rahman", evidence: "Signed artist agreement" },
  { date: "28 MAR 2025", event: "Master delivered", party: "SHA-256 verified", evidence: "Delivery manifest / 04" },
  { date: "19 JUN 2025", event: "First exhibited", party: "Night Bloom, Singapore", evidence: "Venue report + installation log" },
  { date: "08 AUG 2026", event: "Rights amended", party: "SEA touring addendum", evidence: "Countersigned schedule B" },
] as const;

const rights = [
  { right: "Ownership / master", scope: "Buzo Labs, 100%", territory: "Global", window: "Perpetual", state: "Verified" },
  { right: "Public exhibition", scope: "Nightlife + cultural venues", territory: "SG · MY · ID", window: "To 31 Dec 2027", state: "Verified" },
  { right: "Reproduction", scope: "Campaign, editorial, archive", territory: "Global digital", window: "5 years", state: "Verified" },
  { right: "Commercial licensing", scope: "Brand use requires consent", territory: "SEA", window: "Case by case", state: "Review" },
] as const;

const calendar = [
  { date: "22 AUG", city: "Singapore", venue: "Night Bloom / Tanjong Pagar", mode: "Immersive room", status: "Confirmed" },
  { date: "18 SEP", city: "Kuala Lumpur", venue: "RexKL / partner programme", mode: "Projection edition", status: "Hold" },
  { date: "07 NOV", city: "Jakarta", venue: "Creative District / TBC", mode: "Touring installation", status: "Rights check" },
] as const;

const exceptions = [
  { code: "EX-04", title: "Music stem consent", copy: "The Kuala Lumpur edit includes a third-party stem not listed in the master schedule.", owner: "Rights lead", due: "6 days" },
  { code: "EX-07", title: "Valuation freshness", copy: "Afterhours Index has no market or condition update within the 60-day policy window.", owner: "Collection lead", due: "Overdue" },
] as const;

export default function DigitalArtTab() {
  return (
    <section className="atlas-art-workspace" aria-labelledby="atlas-art-title">
      <header className="atlas-art-header">
        <div className="atlas-art-heading">
          <p className="atlas-art-eyebrow">Digital art / Collection intelligence</p>
          <h1 id="atlas-art-title">Rights before reach.</h1>
          <p>
            One operating register for physical, digital, audiovisual and interactive works—from origin
            evidence to the next commercial decision.
          </p>
        </div>
        <div className="atlas-art-summary" aria-label="Collection summary">
          <div><span>Works</span><strong>24</strong><small>4 formats</small></div>
          <div><span>Rights-complete</span><strong>21</strong><small>87.5% coverage</small></div>
          <div><span>Reported value</span><strong>S$684K</strong><small>Illustrative</small></div>
          <div><span>Open exceptions</span><strong>02</strong><small>Human action</small></div>
        </div>
      </header>

      <div className="atlas-art-command-row" aria-label="Collection filters and actions">
        <div className="atlas-art-filter-group">
          <button className="atlas-art-filter atlas-art-filter-active" type="button">All works <span>24</span></button>
          <button className="atlas-art-filter" type="button">Physical <span>06</span></button>
          <button className="atlas-art-filter" type="button">Digital <span>08</span></button>
          <button className="atlas-art-filter" type="button">Audiovisual <span>07</span></button>
          <button className="atlas-art-filter" type="button">Interactive <span>03</span></button>
        </div>
        <button className="atlas-art-add-button" type="button">＋ Register work</button>
      </div>

      <div className="atlas-art-primary-grid">
        <article className="atlas-art-inventory">
          <div className="atlas-art-panel-heading">
            <div><span>Collection inventory</span><strong>24 registered works</strong></div>
            <button type="button">View full register ↗</button>
          </div>
          <div className="atlas-art-table-wrap">
            <table className="atlas-art-table">
              <thead>
                <tr><th>Work</th><th>Format / location</th><th>Rights state</th><th>Report</th><th>Value</th></tr>
              </thead>
              <tbody>
                {collectionWorks.map((work, index) => (
                  <tr className={index === 0 ? "atlas-art-row-active" : ""} key={work.id}>
                    <td><small>{work.id}</small><strong>{work.title}</strong><span>{work.artist}</span></td>
                    <td><strong>{work.format}</strong><span>{work.location}</span></td>
                    <td><span className={`atlas-art-state atlas-art-state-${work.status.toLowerCase().replace(" ", "-")}`}>{work.status}</span></td>
                    <td><strong>{work.freshness}</strong><span>since update</span></td>
                    <td><strong>{work.value}</strong><span>reported</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="atlas-art-selected" aria-label="Selected artwork">
          <div className="atlas-art-panel-heading"><div><span>Selected work</span><strong>BA-024 / Active</strong></div><button type="button">•••</button></div>
          <div className="atlas-art-preview" role="img" aria-label="Abstract preview of Monsoon Memory Number 3">
            <span className="atlas-art-preview-moon" aria-hidden="true" />
            <span className="atlas-art-preview-rain atlas-art-preview-rain-one" aria-hidden="true" />
            <span className="atlas-art-preview-rain atlas-art-preview-rain-two" aria-hidden="true" />
            <p>AV / 08:40 LOOP</p>
          </div>
          <div className="atlas-art-detail-copy">
            <p>Aisha Rahman · Singapore</p>
            <h2>Monsoon Memory No. 3</h2>
            <span>Audiovisual installation · 2025 · Edition 1/3 + 1AP</span>
          </div>
          <dl className="atlas-art-detail-metrics">
            <div><dt>Acquisition basis</dt><dd>Commission</dd></div>
            <div><dt>Custody</dt><dd>Master verified</dd></div>
            <div><dt>Condition</dt><dd>Good · 11d</dd></div>
            <div><dt>Evidence</dt><dd>14 linked files</dd></div>
          </dl>
        </aside>
      </div>

      <div className="atlas-art-rights-grid">
        <article className="atlas-art-provenance">
          <div className="atlas-art-panel-heading"><div><span>Provenance chain</span><strong>4 verified events</strong></div><span className="atlas-art-confidence">98% confidence</span></div>
          <ol className="atlas-art-timeline">
            {provenance.map((item, index) => (
              <li key={item.date}>
                <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                <time>{item.date}</time>
                <div><strong>{item.event}</strong><span>{item.party}</span><small>{item.evidence}</small></div>
              </li>
            ))}
          </ol>
        </article>

        <article className="atlas-art-rights-matrix">
          <div className="atlas-art-panel-heading"><div><span>Rights matrix</span><strong>Ownership + permitted use</strong></div><button type="button">Open documents ↗</button></div>
          <div className="atlas-art-table-wrap">
            <table className="atlas-art-table atlas-art-rights-table">
              <thead><tr><th>Right</th><th>Scope</th><th>Territory</th><th>Window</th><th>Evidence</th></tr></thead>
              <tbody>
                {rights.map((item) => (
                  <tr key={item.right}>
                    <td><strong>{item.right}</strong></td><td>{item.scope}</td><td>{item.territory}</td><td>{item.window}</td>
                    <td><span className={`atlas-art-state atlas-art-state-${item.state.toLowerCase()}`}>{item.state}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>

      <div className="atlas-art-operations-grid">
        <article className="atlas-art-calendar">
          <div className="atlas-art-panel-heading"><div><span>Exhibition calendar</span><strong>Next 90 days</strong></div><button type="button">Calendar ↗</button></div>
          <div className="atlas-art-calendar-list">
            {calendar.map((item) => (
              <div className="atlas-art-calendar-row" key={`${item.date}-${item.city}`}>
                <time>{item.date}</time><div><strong>{item.city}</strong><span>{item.venue}</span></div><span>{item.mode}</span>
                <b className={`atlas-art-calendar-${item.status.toLowerCase().replace(" ", "-")}`}>{item.status}</b>
              </div>
            ))}
          </div>
        </article>

        <article className="atlas-art-valuation">
          <div className="atlas-art-panel-heading"><div><span>Valuation + report freshness</span><strong>Collection coverage</strong></div><span>Policy / 60d</span></div>
          <div className="atlas-art-value-total"><span>Reported collection value</span><strong>S$684,000</strong><small>↑ 9.4% versus prior reported basis</small></div>
          <div className="atlas-art-freshness-bars">
            <div><span>Updated ≤ 30 days</span><i><b style={{ width: "71%" }} /></i><strong>17</strong></div>
            <div><span>Updated 31–60 days</span><i><b style={{ width: "21%" }} /></i><strong>05</strong></div>
            <div><span>Stale &gt; 60 days</span><i><b style={{ width: "8%" }} /></i><strong>02</strong></div>
          </div>
          <p className="atlas-art-value-note">Reported values are evidence-linked estimates, not live market prices or investment advice.</p>
        </article>

        <aside className="atlas-art-exceptions">
          <div className="atlas-art-panel-heading"><div><span>Exceptions</span><strong>02 require action</strong></div><span className="atlas-art-alert-dot" aria-hidden="true" /></div>
          <div className="atlas-art-exception-list">
            {exceptions.map((item) => (
              <article key={item.code}>
                <div><span>{item.code}</span><strong>{item.title}</strong></div><p>{item.copy}</p><footer><span>{item.owner}</span><b>{item.due}</b></footer>
              </article>
            ))}
          </div>
        </aside>
      </div>

      <article className="atlas-art-agent-brief" aria-labelledby="atlas-art-agent-title">
        <div className="atlas-art-agent-mark" aria-hidden="true">✦</div>
        <div className="atlas-art-agent-copy">
          <div className="atlas-art-panel-heading"><div><span>Atlas recommendation / Evidence bounded</span><strong id="atlas-art-agent-title">Clear the touring rights before allocating production.</strong></div><span>Confidence / 84%</span></div>
          <p>
            Place a provisional hold on the Kuala Lumpur exhibition. Ask the artist to approve the third-party music stem,
            then issue a territory-specific reproduction schedule before committing installation spend.
          </p>
          <div className="atlas-art-agent-evidence">
            <span>Based on <b>11 linked records</b></span><span><b>1 unresolved right</b></span><span><b>2 assumptions</b></span><span>Last reconciled <b>08:36 SGT</b></span>
          </div>
        </div>
        <div className="atlas-art-agent-actions">
          <button type="button">Inspect evidence</button>
          <button type="button">Send to human review →</button>
          <small>No allocation executes without approval.</small>
        </div>
      </article>

      <footer className="atlas-art-disclaimer">
        <span>Fictional Singapore / SEA operating data</span>
        <span>Provenance and rights require source verification</span>
        <span>Human-reviewed decisions</span>
      </footer>
    </section>
  );
}
