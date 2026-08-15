import type { Metadata } from "next";
import "./architecture-summary.css";

export const metadata: Metadata = {
  title: "Buzo Atlas — Architecture Summary",
  description: "Buzo Atlas: an agentic operating system for a family-office model in nightlife and culture.",
};

const mechanisms = [
  ["01", "Strategic partnerships", "Artists, venues, promoters, hospitality groups, brands, distributors, technology providers, and capital partners.", "Access, distribution, execution capacity, and shared risk."],
  ["02", "Buzo Originals", "Create, acquire, co-own, commission, or license repeatable nightlife-event formats and cultural IP.", "Tickets, sponsorship, royalties, revenue share, and licensing rights."],
  ["03", "Digital art", "Physical, digital, audiovisual, and interactive work connected to live experiences.", "Clear provenance plus exhibition, reproduction, commercial, and edition rights."],
  ["04", "Concierge IP + technology", "Reusable agents, workflows, recommendation systems, knowledge structures, and integrations.", "A shared operating layer instead of custom work rebuilt for every activation."],
];

const economics = [
  ["NOW", "Services", "Atlas implementation, bespoke concierge, and event-operations fees."],
  ["NEXT", "Performance", "Revenue share or performance fees where Buzo’s contribution is measurable."],
  ["THEN", "Licensing", "Technology, event-format, artwork, content, and commercial licences."],
  ["LATER", "Ownership", "Selective co-ownership, equity, or direct investment after cash flow and governance are in place."],
];

export default function ArchitectureSummaryPage() {
  return <main className="atlas-summary">
    <header className="summary-nav">
      <a className="summary-brand" href="/" aria-label="Return to Buzo Atlas home"><span>B</span> BUZO ATLAS</a>
      <p>ARCHITECTURE SUMMARY / AUG 2026</p>
      <a href="/">BACK TO ATLAS ↗</a>
    </header>

    <section className="summary-hero">
      <p className="eyebrow">THE OPERATING MODEL</p>
      <h1>An agentic operating system for a family-office model in <em>nightlife and culture.</em></h1>
      <div className="hero-copy"><p>Buzo Atlas is the intelligence, workflow, and decision layer for a proposed long-horizon model that builds partnerships, cultural rights, digital art, and concierge technology.</p><p><b>Scope:</b> a strategy and hackathon prototype—not an established family office, investment fund, or autonomous investment adviser.</p></div>
    </section>

    <section className="section project-section">
      <div className="section-heading"><span>01 / WHAT IS THE PROJECT?</span><h2>Four connected parts.<br /><em>One operating model.</em></h2></div>
      <div className="project-grid">
        <article><span>BUZO LABS</span><h3>Builder &amp; operator</h3><p>Forms strategic partnerships and operates the model.</p></article>
        <article><span>BUZO</span><h3>Consumer concierge</h3><p>Helps people decide and act, while creating permissioned demand feedback loops.</p></article>
        <article><span>BUZO ORIGINALS</span><h3>Cultural IP portfolio</h3><p>Owned, co-owned, commissioned, or licensed experiences and creative work.</p></article>
        <article className="atlas-card"><span>BUZO ATLAS</span><h3>Intelligence layer</h3><p>Coordinates partnerships, assets, rights, performance, obligations, and risk.</p></article>
      </div>
    </section>

    <section className="section problem-section">
      <div className="section-heading"><span>02 / THE PROBLEM</span><h2>Culture assets are connected.<br /><em>Their information is not.</em></h2></div>
      <div className="problem-content">
        <p>A culture-focused family-office model can hold or monitor venue exposure, private debt, event rights, artworks, proprietary technology, and partnership agreements. The facts arrive in incompatible reports, spreadsheets, contracts, and conversations.</p>
        <div className="questions"><span>What do we own or have rights to?</span><span>Which values, obligations, or reports are stale?</span><span>Where are rights approaching expiry?</span><span>Which assets depend on the same partner, venue, or season?</span><span>What should we allocate to an activation?</span><span>Which conclusions are facts, inferences, or assumptions?</span></div>
      </div>
    </section>

    <section className="section solution-section">
      <div className="section-heading"><span>03 / HOW WE PLAN TO SOLVE IT</span><h2>Build assets. Connect them.<br /><em>Let the system compound.</em></h2></div>
      <div className="operating-loop" aria-label="Buzo Atlas operating loop">
        <div><b>01</b>Source opportunity</div><i>→</i><div><b>02</b>Structure partnership + rights</div><i>→</i><div><b>03</b>Create or acquire IP</div><i>→</i><div><b>04</b>Activate through Buzo + partners</div><i>→</i><div><b>05</b>Measure in Atlas</div><i>→</i><div><b>06</b>Allocate resources</div>
      </div>
      <div className="mechanism-grid">{mechanisms.map(([number, title, description, result]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><small>{result}</small></article>)}</div>
    </section>

    <section className="revenue-section">
      <div className="revenue-intro"><span>04 / HOW THE MODEL MAKES MONEY</span><h2>Earn rights in proportion to contribution and risk.</h2><p>Start with services and reusable technology. Move into ownership only where Buzo has created sustained value and the economics are explicit.</p></div>
      <div className="economics">{economics.map(([phase, title, description]) => <article key={phase}><span>{phase}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      <p className="revenue-note">Potential economics: software and implementation fees · concierge and operations fees · performance fees and revenue shares · sponsorship · royalties · event, artwork, media, and technology licences · selective ownership.</p>
    </section>

    <section className="section comparison-section">
      <div className="section-heading"><span>05 / FAMILY OFFICE VS AGENTIC FAMILY OFFICE</span><h2>Same long horizon.<br /><em>Different operating cadence.</em></h2></div>
      <div className="comparison-grid">
        <article><span>TRADITIONAL FAMILY OFFICE</span><h3>Periodic, people-led portfolio management</h3><ul><li>Information sits across reports, spreadsheets, advisers, and operators.</li><li>Review cycles are manual and often retrospective.</li><li>Capital allocation is the primary organising activity.</li><li>Relationship, cultural, and operating knowledge can remain implicit.</li></ul></article>
        <article className="agentic-card"><span>AGENTIC FAMILY-OFFICE MODEL</span><h3>Continuous, evidence-linked operating intelligence</h3><ul><li>Agents consolidate fragmented evidence, while uncertainty stays visible.</li><li>Rights, obligations, dependencies, and expiry dates are continuously monitored.</li><li>Operators allocate capital, attention, technology, and relationships together.</li><li>Humans approve every material investment, legal, creative, and safety decision.</li></ul></article>
      </div>
    </section>

    <section className="agent-section"><div><span>ATLAS AGENT LAYER</span><h2>Learn.<br />Coordinate.<br /><em>Allocate.</em></h2></div><div className="agent-steps"><article><b>Learn</b><p>Read reports, contracts, operating data, and market signals into one evidence-linked view.</p></article><article><b>Coordinate</b><p>Surface owners, rights, dependencies, approval gates, and time-sensitive obligations.</p></article><article><b>Allocate</b><p>Prepare options for capital, technology, management attention, and relationship capacity.</p></article></div></section>
    <footer className="summary-footer"><span>BUZO ATLAS / ARCHITECTURE SUMMARY</span><p>Strategy and hackathon prototype. Human review and approval required.</p><a href="/">RETURN TO ATLAS ↑</a></footer>
  </main>;
}
