"use client";

import { useState } from "react";
import OverviewTab from "./components/OverviewTab";
import PartnershipsTab from "./components/PartnershipsTab";
import OriginalsTab from "./components/OriginalsTab";
import DigitalArtTab from "./components/DigitalArtTab";
import TechnologyTab from "./components/TechnologyTab";
import "./atlas.css";

const tabs = [
  { id: "overview", number: "00", label: "Command centre" },
  { id: "partnerships", number: "01", label: "Strategic partnerships" },
  { id: "originals", number: "02", label: "Buzo Originals" },
  { id: "art", number: "03", label: "Digital art" },
  { id: "technology", number: "04", label: "Concierge IP + technology" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const panels: Record<TabId, React.ComponentType> = {
  overview: OverviewTab,
  partnerships: PartnershipsTab,
  originals: OriginalsTab,
  art: DigitalArtTab,
  technology: TechnologyTab,
};

export default function AtlasDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [agentOpen, setAgentOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const ActivePanel = panels[activeTab];
  const activeLabel = tabs.find((tab) => tab.id === activeTab)?.label;

  const selectTab = (tab: TabId) => {
    setActiveTab(tab);
    setNavOpen(false);
  };

  return (
    <main className={`atlas-app ${agentOpen ? "atlas-agent-is-open" : ""}`}>
      <aside className={`atlas-sidebar ${navOpen ? "is-open" : ""}`}>
        <div className="atlas-brand-row">
          <span className="atlas-brand-glyph" aria-hidden="true">B</span>
          <div><strong>BUZO ATLAS</strong><small>AGENTIC FAMILY OFFICE</small></div>
        </div>
        <nav className="atlas-section-nav" aria-label="Atlas workspaces">
          <p>PORTFOLIO SYSTEM</p>
          {tabs.map((tab) => (
            <button key={tab.id} type="button" className={activeTab === tab.id ? "active" : ""} onClick={() => selectTab(tab.id)}>
              <span>{tab.number}</span><b>{tab.label}</b><i>↗</i>
            </button>
          ))}
        </nav>
        <div className="atlas-sidebar-status">
          <div><span className="atlas-live-dot" /><b>Atlas agents online</b></div>
          <p>4 sources awaiting review</p>
          <a href="/landing">← View public website</a>
        </div>
      </aside>

      <section className="atlas-workspace">
        <header className="atlas-appbar">
          <button className="atlas-mobile-menu" type="button" aria-label="Toggle workspace navigation" aria-expanded={navOpen} onClick={() => setNavOpen(!navOpen)}>☰</button>
          <div className="atlas-breadcrumb"><span>ATLAS</span><i>/</i><strong>{activeLabel}</strong></div>
          <div className="atlas-model-meta"><span>LIVE MODEL</span><span>SINGAPORE</span><span>08:42 SGT</span></div>
          <button className="atlas-agent-trigger" type="button" onClick={() => setAgentOpen(true)}><span className="atlas-live-dot" /> Ask Atlas <b>⌘ K</b></button>
        </header>

        <div className="atlas-page" key={activeTab}>
          <ActivePanel />
        </div>

        <button className="atlas-command-bar" type="button" onClick={() => setAgentOpen(true)}>
          <span className="atlas-agent-star">✦</span>
          <span><b>Ask Atlas</b><small>Compare rights, surface dependencies, or prepare an allocation brief…</small></span>
          <kbd>⌘ K</kbd>
        </button>
      </section>

      <aside className="atlas-agent-drawer" aria-hidden={!agentOpen}>
        <header><div><span>ATLAS AGENT / 03</span><h2>Prepare the next move.</h2></div><button type="button" aria-label="Close Atlas agent" onClick={() => setAgentOpen(false)}>×</button></header>
        <div className="atlas-agent-context"><span>ACTIVE CONTEXT</span><strong>{activeLabel}</strong><p>9 evidence-linked records · 2 unresolved dependencies</p></div>
        <div className="atlas-agent-plan">
          <div><i>01</i><span><b>Learn</b>Reconcile the latest rights, partner and operating records.</span><em>DONE</em></div>
          <div><i>02</i><span><b>Coordinate</b>Identify owners and decisions before the activation window.</span><em>ACTIVE</em></div>
          <div><i>03</i><span><b>Allocate</b>Prepare options for capital, attention, technology and relationships.</span><em>NEXT</em></div>
        </div>
        <div className="atlas-agent-output"><span>DRAFT BRIEF</span><p>Moonphase Assembly can move forward if the venue option and regional exhibition rights are resolved within 21 days.</p><div><b>87%</b> confidence <b>9</b> sources <b>2</b> assumptions</div></div>
        <div className="atlas-review-actions"><button type="button">Needs review</button><button type="button">Prepare for approval →</button></div>
        <label className="atlas-agent-input"><span>✦</span><input aria-label="Ask Atlas" placeholder="Ask a portfolio question…" /><button type="button">↑</button></label>
        <p className="atlas-agent-boundary">Fictional wireframe · Human review required · Not investment advice</p>
      </aside>
      {agentOpen && <button className="atlas-drawer-backdrop" type="button" aria-label="Close agent panel" onClick={() => setAgentOpen(false)} />}
    </main>
  );
}
