"use client";

import { useEffect, useState } from "react";
import OverviewTab from "./components/OverviewTab";
import PartnershipsTab from "./components/PartnershipsTab";
import OriginalsTab from "./components/OriginalsTab";
import DigitalArtTab from "./components/DigitalArtTab";
import TechnologyTab from "./components/TechnologyTab";
import AtlasChat from "./components/AtlasChat";
import AtlasAgentHealth from "./components/AtlasAgentHealth";
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setAgentOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className={`atlas-app ${agentOpen ? "atlas-agent-is-open" : ""}`}>
      <aside className={`atlas-sidebar ${navOpen ? "is-open" : ""}`}>
        <div className="atlas-brand-row">
          <span className="atlas-brand-glyph" aria-hidden="true">
            <span>B</span>
          </span>
          <strong>BUZO ATLAS</strong>
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
          <a href="/">← Back to landing</a>
        </div>
      </aside>

      <section className="atlas-workspace">
        <header className="atlas-appbar">
          <button className="atlas-mobile-menu" type="button" aria-label="Toggle workspace navigation" aria-expanded={navOpen} onClick={() => setNavOpen(!navOpen)}>☰</button>
          <div className="atlas-breadcrumb"><span>ATLAS</span><i>/</i><strong>{activeLabel}</strong></div>
          <AtlasAgentHealth />
        </header>

        <div className="atlas-page" key={activeTab}>
          <ActivePanel />
        </div>

        {!agentOpen && (
          <button className="atlas-command-bar" type="button" onClick={() => setAgentOpen(true)}>
            <span className="atlas-agent-star">✦</span>
            <span>Ask Atlas…</span>
            <kbd>⌘ K</kbd>
          </button>
        )}
      </section>

      <AtlasChat
        open={agentOpen}
        onClose={() => setAgentOpen(false)}
        workspace={activeLabel ?? "Command centre"}
        tabId={activeTab}
      />
      {agentOpen && <button className="atlas-drawer-backdrop" type="button" aria-label="Close agent panel" onClick={() => setAgentOpen(false)} />}
    </main>
  );
}
