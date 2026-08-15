"use client";

import { useState } from "react";

const formats = [
  {
    code: "OR-01",
    title: "Moonphase Assembly",
    type: "Owned format",
    moment: "Mid-Autumn / 03 Oct",
    venue: "Pasir Panjang Power Station",
    state: "In production",
    progress: 78,
  },
  {
    code: "OR-02",
    title: "Night Bloom",
    type: "Co-owned format",
    moment: "Singapore Art Week / 24 Jan",
    venue: "Gillman Barracks",
    state: "Rights clearing",
    progress: 61,
  },
  {
    code: "OR-03",
    title: "Afterlight Sessions",
    type: "Commissioned work",
    moment: "Hari Raya / 11 Apr",
    venue: "Kampong Gelam",
    state: "Partner review",
    progress: 42,
  },
  {
    code: "OR-04",
    title: "Monsoon Frequency",
    type: "Licensed format",
    moment: "Year-end monsoon / 06 Dec",
    venue: "The Warehouse Hotel",
    state: "Option secured",
    progress: 27,
  },
];

const seasonalMoments = [
  { month: "JAN", title: "Night Bloom", detail: "Art Week premiere", state: "active" },
  { month: "APR", title: "Afterlight", detail: "Raya cultural circuit", state: "planned" },
  { month: "AUG", title: "City in Stereo", detail: "National Day edition", state: "option" },
  { month: "OCT", title: "Moonphase", detail: "Mid-Autumn assembly", state: "active" },
  { month: "DEC", title: "Monsoon Frequency", detail: "Year-end residency", state: "planned" },
];

const dependencies = [
  { partner: "Power Station venue team", task: "Final capacity and curfew confirmation", due: "18 AUG", risk: "Low" },
  { partner: "Asterism artist collective", task: "AV master and reproduction schedule", due: "21 AUG", risk: "Watch" },
  { partner: "Night transport partner", task: "Post-event route allocation", due: "24 AUG", risk: "Low" },
  { partner: "Rights counsel", task: "Regional livestream rider", due: "26 AUG", risk: "Action" },
];

const rights = [
  { asset: "Moonphase Assembly", structure: "Buzo owned", territory: "Worldwide", window: "2026–2031", uses: "Live · Stream · Merch", status: "Clear" },
  { asset: "Night Bloom", structure: "50/50 co-owned", territory: "SG · MY · ID", window: "2026–2029", uses: "Live · Exhibit · Reproduce", status: "1 rider open" },
  { asset: "Afterlight Sessions", structure: "Commission", territory: "Singapore", window: "18 months", uses: "Live · Archive", status: "Review" },
  { asset: "Monsoon Frequency", structure: "Exclusive licence", territory: "Southeast Asia", window: "24 months", uses: "Live · Adapt", status: "Optioned" },
];

export default function OriginalsTab() {
  const [approval, setApproval] = useState<"pending" | "approved">("pending");

  return (
    <section className="atlas-tab atlas-originals-tab" aria-labelledby="atlas-originals-heading">
      <header className="atlas-tab-header">
        <div className="atlas-tab-heading-group">
          <p className="atlas-eyebrow">02 / BUZO ORIGINALS</p>
          <h1 className="atlas-tab-title" id="atlas-originals-heading">Cultural rights, built to compound.</h1>
          <p className="atlas-tab-intro">
            Plan, operate and reuse owned, co-owned, commissioned and licensed nightlife-event IP from one rights-aware view.
          </p>
        </div>
        <div className="atlas-live-indicator" aria-label="Live Singapore portfolio model">
          <span className="atlas-status-dot" aria-hidden="true" />
          <span className="atlas-live-copy">LIVE PORTFOLIO · SINGAPORE · 08:42 SGT</span>
        </div>
      </header>

      <div className="atlas-originals-overview">
        <article className="atlas-featured-original">
          <div className="atlas-panel-label-row">
            <span className="atlas-panel-label">ACTIVE CULTURAL RIGHT</span>
            <span className="atlas-panel-index">OR-01</span>
          </div>
          <div className="atlas-featured-copy">
            <p className="atlas-kicker">OWNED FORMAT · MID-AUTUMN</p>
            <h2 className="atlas-featured-title">Moonphase<br />Assembly</h2>
            <p className="atlas-featured-meta">Pasir Panjang Power Station · 03 Oct 2026</p>
          </div>
          <ul className="atlas-signal-tags" aria-label="Rights system status">
            <li><span className="atlas-signal-dot atlas-signal-dot-rights" aria-hidden="true" />Rights · Clear</li>
            <li><span className="atlas-signal-dot atlas-signal-dot-partner" aria-hidden="true" />Venue · Optioned</li>
            <li><span className="atlas-signal-dot atlas-signal-dot-demand" aria-hidden="true" />Demand · +28%</li>
          </ul>
          <dl className="atlas-featured-metrics">
            <div className="atlas-metric-row"><dt>Production readiness</dt><dd>78%</dd></div>
            <div className="atlas-metric-row"><dt>Rights window</dt><dd>1,872 days</dd></div>
            <div className="atlas-metric-row"><dt>Partner readiness</dt><dd>86%</dd></div>
          </dl>
        </article>

        <article className="atlas-agent-brief">
          <div className="atlas-panel-label-row">
            <span className="atlas-panel-label">AGENT-GENERATED LAUNCH BRIEF</span>
            <span className="atlas-panel-index">AGENT / 03</span>
          </div>
          <div className="atlas-brief-lead">
            <p className="atlas-brief-state">SEASONAL OPPORTUNITY DETECTED</p>
            <h2 className="atlas-brief-title">Advance Moonphase into its <em className="atlas-accent-copy">release window.</em></h2>
            <p className="atlas-brief-summary">
              Mid-Autumn search intent is rising 28% while the venue, artist roster and owned format rights are aligned. Atlas recommends opening the first allocation window on 28 August.
            </p>
          </div>
          <div className="atlas-signal-chart" aria-label="Demand signal increased twenty-eight percent">
            {[36, 42, 39, 51, 47, 60, 57, 69, 64, 77, 81, 96].map((height, index) => (
              <span className="atlas-signal-bar" style={{ height: `${height}%` }} key={`${height}-${index}`} />
            ))}
            <span className="atlas-chart-callout">DEMAND SIGNAL +28%</span>
          </div>
          <ol className="atlas-agent-steps">
            <li className="atlas-agent-step"><span className="atlas-step-number">01</span><div className="atlas-step-copy"><strong>Learn</strong><p>Reconciled demand, rights and production reports.</p></div></li>
            <li className="atlas-agent-step"><span className="atlas-step-number">02</span><div className="atlas-step-copy"><strong>Coordinate</strong><p>Flagged four partner actions and one open rider.</p></div></li>
            <li className="atlas-agent-step"><span className="atlas-step-number">03</span><div className="atlas-step-copy"><strong>Allocate</strong><p>Prepared an activation plan for human review.</p></div></li>
          </ol>
          <div className="atlas-approval-bar">
            <div className="atlas-approval-copy">
              <span className="atlas-approval-label">HUMAN CHECKPOINT</span>
              <strong>{approval === "approved" ? "Launch brief approved" : "Approval required before any allocation"}</strong>
            </div>
            <button
              className="atlas-primary-action"
              type="button"
              onClick={() => setApproval(approval === "pending" ? "approved" : "pending")}
              aria-pressed={approval === "approved"}
            >
              {approval === "approved" ? "Approved ✓" : "Review & approve"}
            </button>
          </div>
        </article>
      </div>

      <section className="atlas-section-block" aria-labelledby="atlas-formats-heading">
        <div className="atlas-section-heading-row">
          <div className="atlas-section-heading-copy">
            <p className="atlas-eyebrow">PORTFOLIO / 04 FORMATS</p>
            <h2 className="atlas-section-title" id="atlas-formats-heading">Event-format portfolio</h2>
          </div>
          <p className="atlas-section-note">Rights position, cultural moment and route to production.</p>
        </div>
        <div className="atlas-format-grid">
          {formats.map((format) => (
            <article className="atlas-format-card" key={format.code}>
              <div className="atlas-card-topline"><span>{format.code}</span><span>{format.type}</span></div>
              <h3 className="atlas-card-title">{format.title}</h3>
              <p className="atlas-card-meta">{format.moment}</p>
              <p className="atlas-card-location">{format.venue}</p>
              <div className="atlas-progress-label"><span>{format.state}</span><strong>{format.progress}%</strong></div>
              <progress className="atlas-progress" value={format.progress} max="100">{format.progress}%</progress>
            </article>
          ))}
        </div>
      </section>

      <div className="atlas-two-column-grid">
        <section className="atlas-section-block atlas-seasonal-section" aria-labelledby="atlas-season-heading">
          <div className="atlas-section-heading-row">
            <div className="atlas-section-heading-copy">
              <p className="atlas-eyebrow">SEASONAL ACTIVATION MAP</p>
              <h2 className="atlas-section-title" id="atlas-season-heading">Culture moves in seasons.</h2>
            </div>
            <span className="atlas-year-chip">2026</span>
          </div>
          <ol className="atlas-season-timeline">
            {seasonalMoments.map((moment) => (
              <li className={`atlas-season-item atlas-season-${moment.state}`} key={moment.month}>
                <span className="atlas-season-marker" aria-hidden="true" />
                <time className="atlas-season-month">{moment.month}</time>
                <strong className="atlas-season-title">{moment.title}</strong>
                <span className="atlas-season-detail">{moment.detail}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="atlas-section-block atlas-readiness-section" aria-labelledby="atlas-readiness-heading">
          <div className="atlas-section-heading-row">
            <div className="atlas-section-heading-copy">
              <p className="atlas-eyebrow">PRODUCTION CONTROL</p>
              <h2 className="atlas-section-title" id="atlas-readiness-heading">Readiness & dependencies</h2>
            </div>
            <span className="atlas-risk-chip">1 ACTION</span>
          </div>
          <div className="atlas-readiness-score">
            <div className="atlas-score-ring"><strong>78</strong><span>/100</span></div>
            <div className="atlas-score-copy"><strong>Production is advancing</strong><p>Programme and technical plans are stable. Rights rider requires action.</p></div>
          </div>
          <ul className="atlas-dependency-list">
            {dependencies.map((dependency) => (
              <li className="atlas-dependency-item" key={dependency.partner}>
                <div className="atlas-dependency-copy"><strong>{dependency.partner}</strong><p>{dependency.task}</p></div>
                <time className="atlas-dependency-date">{dependency.due}</time>
                <span className={`atlas-risk-badge atlas-risk-${dependency.risk.toLowerCase()}`}>{dependency.risk}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="atlas-section-block atlas-rights-section" aria-labelledby="atlas-rights-heading">
        <div className="atlas-section-heading-row">
          <div className="atlas-section-heading-copy">
            <p className="atlas-eyebrow">RIGHTS REGISTER</p>
            <h2 className="atlas-section-title" id="atlas-rights-heading">Rights and territory</h2>
          </div>
          <p className="atlas-section-note">Every format stays tied to its evidence, permissible uses and commercial window.</p>
        </div>
        <div className="atlas-table-wrap">
          <table className="atlas-data-table">
            <thead className="atlas-table-head">
              <tr className="atlas-table-row">
                <th className="atlas-table-heading" scope="col">Asset</th>
                <th className="atlas-table-heading" scope="col">Rights structure</th>
                <th className="atlas-table-heading" scope="col">Territory</th>
                <th className="atlas-table-heading" scope="col">Window</th>
                <th className="atlas-table-heading" scope="col">Permitted uses</th>
                <th className="atlas-table-heading" scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="atlas-table-body">
              {rights.map((right) => (
                <tr className="atlas-table-row" key={right.asset}>
                  <th className="atlas-table-asset" scope="row">{right.asset}</th>
                  <td className="atlas-table-cell">{right.structure}</td>
                  <td className="atlas-table-cell">{right.territory}</td>
                  <td className="atlas-table-cell">{right.window}</td>
                  <td className="atlas-table-cell">{right.uses}</td>
                  <td className="atlas-table-cell"><span className="atlas-table-status">{right.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
