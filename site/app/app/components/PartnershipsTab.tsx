"use client";

import { useState } from "react";
import { partnershipRecords } from "./partnershipsVendorArchive";

function renderInlineMarkdown(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
      : part,
  );
}

function renderMarkdown(markdown: string) {
  return markdown.trim().split("\n").map((line, index) => {
    const key = `${index}-${line}`;
    if (!line.trim()) return <div className="atlas-markdown-spacer" key={key} aria-hidden="true" />;
    if (line.startsWith("# ")) return <h2 key={key}>{renderInlineMarkdown(line.slice(2))}</h2>;
    if (line.startsWith("## ")) return <h3 key={key}>{renderInlineMarkdown(line.slice(3))}</h3>;
    if (line.startsWith("> ")) return <p className="atlas-markdown-quote" key={key}>{renderInlineMarkdown(line.slice(2))}</p>;
    if (line.startsWith("- ")) return <p className="atlas-markdown-list-item" key={key}>{renderInlineMarkdown(line.slice(2))}</p>;
    return <p key={key}>{renderInlineMarkdown(line)}</p>;
  });
}

export default function PartnershipsTab() {
  const [activeId, setActiveId] = useState(partnershipRecords[0].id);
  const activePartner = partnershipRecords.find((partner) => partner.id === activeId) ?? partnershipRecords[0];

  return (
    <section className="atlas-tab atlas-partnerships-tab" aria-labelledby="atlas-partnerships-title">
      <header className="atlas-radar-header">
        <div>
          <p className="atlas-eyebrow">01 / Strategic partnerships</p>
          <h1 id="atlas-partnerships-title">Relationship radar</h1>
          <p>Map prior conversations around Buzo Atlas, then open the recorded context before deciding whether a relationship should move forward.</p>
        </div>
        <div className="atlas-radar-header-meta"><span>{partnershipRecords.length} named relationship</span><span>Archive-backed context</span></div>
      </header>

      <div className="atlas-partnership-radar-grid">
        <article className="atlas-partner-radar" aria-label="Strategic partnership relationship radar">
          <div className="atlas-radar-title-row"><span>Relationship field</span><small>Select a node to inspect its record</small></div>
          <div className="atlas-radar-field">
            <span className="atlas-radar-circle atlas-radar-circle-one" aria-hidden="true" />
            <span className="atlas-radar-circle atlas-radar-circle-two" aria-hidden="true" />
            <span className="atlas-radar-circle atlas-radar-circle-three" aria-hidden="true" />
            <span className="atlas-radar-axis atlas-radar-axis-horizontal" aria-hidden="true" />
            <span className="atlas-radar-axis atlas-radar-axis-vertical" aria-hidden="true" />
            <span className="atlas-radar-sector atlas-radar-sector-media">Media / distribution</span>
            <span className="atlas-radar-sector atlas-radar-sector-venues">Venues / hospitality</span>
            <span className="atlas-radar-sector atlas-radar-sector-culture">Culture / programming</span>
            <span className="atlas-radar-sector atlas-radar-sector-capital">Capital / commercial</span>

            <div className="atlas-radar-core" aria-label="Buzo Atlas"><span className="atlas-radar-core-orbit" aria-hidden="true" /><strong>B</strong><small>BUZO<br />ATLAS</small></div>

            {partnershipRecords.map((partner) => (
              <button key={partner.id} type="button" className={`atlas-radar-partner atlas-radar-partner-${partner.id} ${activeId === partner.id ? "is-active" : ""}`} aria-pressed={activeId === partner.id} onClick={() => setActiveId(partner.id)}>
                <span className="atlas-radar-partner-dot" aria-hidden="true" /><strong>{partner.name}</strong><small>{partner.category}</small>
              </button>
            ))}
          </div>
          <footer className="atlas-radar-legend"><span><i className="atlas-radar-legend-live" /> Recorded discussion</span><span><i /> Future evidence-backed relationship</span></footer>
        </article>

        <aside className="atlas-partner-detail" aria-live="polite">
          <header><div><span>Selected relationship</span><h2>{activePartner.name}</h2></div><em>{activePartner.status}</em></header>
          <div className="atlas-partner-markdown" aria-label={`${activePartner.name} stored discussion context`}>
            <div className="atlas-partner-markdown-label"><span>Stored context</span><span>Markdown record</span></div>
            {renderMarkdown(activePartner.markdown)}
          </div>
          <div className="atlas-partner-detail-foot"><span>{activePartner.period}</span><span>{activePartner.discussions.length} logged discussion{activePartner.discussions.length === 1 ? "" : "s"}</span></div>
        </aside>
      </div>

      <article className="atlas-partner-discussion-panel" aria-labelledby="atlas-vendor-discussion-title">
        <header><div><span>Relationship record</span><h2 id="atlas-vendor-discussion-title">Discussion timeline</h2></div><p>Stored context only · no live CRM or implied rights</p></header>
        <ol>{activePartner.discussions.map((entry) => <li key={`${entry.date}-${entry.topic}`}><time dateTime={entry.date}>{entry.date}</time><div><strong>{entry.topic}</strong><p>{entry.note}</p></div></li>)}</ol>
      </article>
    </section>
  );
}
