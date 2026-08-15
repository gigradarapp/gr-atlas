"use client";

import { useRef, useState } from "react";

const artworks = [
  { title: "Monsoon Memory", artist: "Aisha Rahman", rights: "Exhibition · SEA", position: "0%" },
  { title: "Silk After Dark", artist: "Jun Wei", rights: "Commercial · Global", position: "33.333%" },
  { title: "Orchid Protocol", artist: "Mira Sen", rights: "Edition 01 / 08", position: "66.666%" },
  { title: "Signal / City", artist: "Studio Nadi", rights: "Installation · 3 years", position: "100%" },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span>B</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const artRailRef = useRef<HTMLDivElement>(null);

  const scrollArt = (direction: number) => {
    artRailRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  };

  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Buzo Atlas home">
          <BrandMark />
          <span>BUZO ATLAS</span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#partnerships" onClick={() => setMenuOpen(false)}>Partnerships</a>
          <a href="#originals" onClick={() => setMenuOpen(false)}>Originals</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
          <a href="/architecture-summary" onClick={() => setMenuOpen(false)}>Architecture</a>
        </div>
        <a className="nav-cta" href="/app">Enter Atlas <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Buzo Labs · Singapore</p>
          <h1>The agentic family office for <em>nightlife &amp; culture.</em></h1>
          <p className="hero-intro">Atlas uses AI to discover opportunities, coordinate partners, and manage cultural assets—guiding where we allocate capital, technology, and attention.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#atlas-live">Explore the system <span>↓</span></a>
            <a className="text-link" href="#thesis">Read the thesis <span>↗</span></a>
          </div>
        </div>

        <div className="atlas-console-stage" id="atlas-live" aria-label="Illustrative Buzo Atlas intelligence artefact">
          <div className="console-aurora" />
          <div className="atlas-console">
            <div className="console-top">
              <div className="console-name">Atlas / Agentic Family Office</div>
            </div>
            <div className="console-body">
              <section className="console-column console-asset">
                <div className="console-label"><span>Active cultural right</span><span>01</span></div>
                <h2>Moonphase<br />Assembly</h2>
                <p>Seasonal event IP / partnership atlas</p>
                <div className="console-orbital" aria-hidden="true"><i /><i /><b /></div>
                <div className="console-measure"><span>PARTNER READINESS</span><strong>86%</strong></div>
                <div className="console-measure"><span>RIGHTS WINDOW</span><strong>47 days</strong></div>
              </section>

              <section className="console-column console-brief">
                <div className="console-label"><span>Allocation brief</span><span>AGENT / 03</span></div>
                <h2>The next season is <em>coalescing.</em></h2>
                <p>Atlas connects intent, venue capacity, partner commitments and owned cultural rights into a decision-ready operating view.</p>
                <div className="signal-chart" aria-label="Demand signal increased by 28 percent">
                  <span className="chart-note">demand signal +28%</span>
                  {[24,31,28,43,36,51,48,62,56,70,73,88].map((height,index) => <i key={index} style={{height:`${height}%`}} />)}
                </div>
                <div className="console-agent-feed">
                  <div><i>01</i><p><b>Learn</b>New venue report reconciled with the programme and rights register.</p></div>
                  <div><i>02</i><p><b>Coordinate</b>Partner decision flagged before the next production window.</p></div>
                  <div><i>03</i><p><b>Allocate</b>Human-reviewed activation brief prepared for the season.</p></div>
                </div>
              </section>

              <aside className="console-column console-logic">
                <div className="console-label"><span>Portfolio logic</span><span>04</span></div>
                <div className="console-number">04</div>
                <p>WAYS ATLAS CREATES COMPOUNDING CULTURAL ADVANTAGE</p>
                <div className="console-assets">
                  <span><i />Strategic partnerships</span>
                  <span><i />Buzo Originals event rights</span>
                  <span><i />Digital art &amp; cultural works</span>
                  <span><i />Concierge technology IP</span>
                </div>
                <a href="#thesis">Open allocation thesis <span>↗</span></a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="thesis" id="thesis">
        <p className="section-kicker">THE NIGHTLIFE &amp; CULTURE ECONOMY</p>
        <h2>Not a dashboard for passive wealth.<br /><em>An active system for cultural advantage.</em></h2>
        <p>We apply long-horizon family-office discipline to relationship capital, cultural rights, digital art and proprietary technology—building assets that become stronger together.</p>
      </section>

      <section className="partnerships" id="partnerships">
        <div className="section-heading dark-ink"><span>02 / STRATEGIC PARTNERSHIPS</span><h2>Relationships are an<br /><em>operating advantage.</em></h2></div>
        <div className="partnership-layout">
          <div className="relationship-map" aria-label="Partnership relationship map">
            <div className="map-orbit orbit-a" /><div className="map-orbit orbit-b" /><div className="map-orbit orbit-c" />
            <span className="map-node node-atlas"><BrandMark /><b>ATLAS</b></span>
            <span className="map-node node-venue"><i /> Venue<br /><small>Space · 2027</small></span>
            <span className="map-node node-artist"><i /> Artist collective<br /><small>Rights · SEA</small></span>
            <span className="map-node node-media"><i /> Media partner<br /><small>Distribution</small></span>
            <span className="map-node node-season"><i /> Seasonal partner<br /><small>Activation</small></span>
            <span className="map-node node-capital"><i /> Capital partner<br /><small>Co-investment</small></span>
          </div>
          <div className="partnership-copy">
            <p>Atlas turns scattered conversations, commitments and dependencies into a living relationship graph—so the next move compounds the last.</p>
            <div className="relationship-stats"><div><strong>12</strong><span>active relationships</span></div><div><strong>3</strong><span>shared dependencies</span></div></div>
            <a href="#contact">Map the opportunity <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="originals" id="originals">
        <div className="originals-image" />
        <div className="originals-scrim" />
        <div className="originals-top"><span>03 / BUZO ORIGINALS</span><span>OWNED · CO-OWNED · LICENSED</span></div>
        <div className="originals-main">
          <p>ORIGINAL FORMAT 001</p>
          <h2>Night<br /><em>Bloom</em></h2>
          <div className="originals-meta"><span>SINGAPORE / 2027</span><span>ART × MUSIC × MONSOON</span></div>
        </div>
        <div className="originals-bottom">
          <p>Recurring event formats designed as cultural assets—not one-off productions.</p>
          <div><span><b>06</b> repeatable modules</span><span><b>04</b> commercial rights</span><span><b>03</b> partner territories</span></div>
          <button type="button" onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}>Enter the format <span>↗</span></button>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="collection-heading"><div><span>04 / DIGITAL ART</span><h2>A collection with<br /><em>rights attached.</em></h2></div><p>We treat digital artworks as cultural assets with clear provenance, exhibition and commercial rights—not token speculation.</p></div>
        <div className="art-rail" ref={artRailRef}>
          {artworks.map((work, index) => (
            <article className="art-card" key={work.title}>
              <div className="art-image" style={{ backgroundPosition: `${work.position} center` }}><span>0{index + 1}</span><button type="button" aria-label={`View ${work.title}`}>↗</button></div>
              <div className="art-caption"><div><h3>{work.title}</h3><p>{work.artist}</p></div><span>{work.rights}</span></div>
            </article>
          ))}
        </div>
        <div className="carousel-controls"><span>01 — 04</span><div><button type="button" onClick={() => scrollArt(-1)} aria-label="Previous artwork">←</button><button type="button" onClick={() => scrollArt(1)} aria-label="Next artwork">→</button></div></div>
      </section>

      <section className="technology" id="technology">
        <div className="section-heading"><span>05 / PROPRIETARY CONCIERGE IP + TECHNOLOGY</span><h2>The intelligence<br /><em>beneath the experience.</em></h2></div>
        <div className="bento-grid">
          <article className="bento-card bento-agent">
            <span className="bento-label">AGENT LAYER</span>
            <div className="kernel"><i className="ring ring-one" /><i className="ring ring-two" /><i className="ring ring-three" /><span><BrandMark /></span><b className="kernel-node n-one" /><b className="kernel-node n-two" /><b className="kernel-node n-three" /></div>
            <div><h3>Learn. Coordinate.<br />Allocate.</h3><p>Evidence-bounded agents turn reports, contracts and signals into a human-reviewed brief.</p></div>
          </article>
          <article className="bento-card bento-demand">
            <span className="bento-label">DEMAND GRAPH</span><h3>Intent becomes intelligence.</h3><p>What people wanted → what Buzo recommended → what they chose → whether they returned.</p>
            <div className="flow-line"><span>INTENT</span><i /><span>CHOICE</span><i /><span>OUTCOME</span></div>
          </article>
          <article className="bento-card bento-chat">
            <span className="bento-label">BUZO CONCIERGE</span>
            <div className="chat-window"><div className="chat-question">Something intimate, art-led, east side tonight.</div><div className="chat-answer"><BrandMark /><p><b>Two strong matches.</b><br />The Projector × New Bahru has the closest atmosphere. Want the quieter set?</p></div></div>
          </article>
          <article className="bento-card bento-data">
            <span className="bento-label">STRUCTURED CULTURE DATA</span><h3>From fragmented signals to a trusted record.</h3>
            <div className="data-stack"><span>EVENT SOURCES <b>142</b></span><span>RIGHTS RECORDS <b>31</b></span><span>PARTNER EDGES <b>58</b></span><span>EVIDENCE LINKS <b>286</b></span></div>
          </article>
          <article className="bento-card bento-rights">
            <span className="bento-label">RIGHTS ENGINE</span>
            <div className="rights-head"><h3>Know what we own.<br />Know what moves next.</h3><span>94%</span></div>
            <div className="rights-progress"><i /></div><p>Portfolio rights completeness</p>
          </article>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closing-mark"><BrandMark /></div><p>BUZO LABS / SINGAPORE</p><h2>Build the future<br />of culture <em>with us.</em></h2>
        <a href="mailto:hello@buzo.sg">Start a conversation <span>↗</span></a>
        <div className="closing-orbit"><i /><i /><i /></div>
      </section>

      <footer><span>© 2026 BUZO LABS</span><p>Buzo Atlas is a fictional hackathon prototype. It is not investment advice and does not autonomously deploy capital, execute contracts or acquire rights.</p><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
