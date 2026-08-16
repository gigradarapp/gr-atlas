import Image from "next/image";
import {
  eventEarnings,
  formatOriginalsCurrency,
  originalsPortfolioMetrics,
  pastOriginalRows,
} from "./originalsPastEvents";

export default function OriginalsTab() {
  return (
    <section className="atlas-tab atlas-originals-tab" aria-labelledby="atlas-originals-heading">
      <header className="atlas-originals-hero">
        <div>
          <p className="atlas-eyebrow">02 / Buzo Originals</p>
          <h1 className="atlas-tab-title" id="atlas-originals-heading">
            Past events we ran
          </h1>
          <p className="atlas-originals-intro">
            A catalogue of completed Buzo Original runs — revenue, costs, signups, and archive in one view.
          </p>
        </div>
        <dl className="atlas-originals-metrics-summary" aria-label="Originals portfolio metrics">
          <div>
            <dt>Revenue</dt>
            <dd>{formatOriginalsCurrency(originalsPortfolioMetrics.revenue)}</dd>
          </div>
          <div>
            <dt>Expenses</dt>
            <dd>{formatOriginalsCurrency(originalsPortfolioMetrics.expenses)}</dd>
          </div>
          <div>
            <dt>Net earnings</dt>
            <dd>{formatOriginalsCurrency(originalsPortfolioMetrics.earnings)}</dd>
          </div>
          <div>
            <dt>Signups</dt>
            <dd>{originalsPortfolioMetrics.signups.toLocaleString("en-SG")}</dd>
          </div>
        </dl>
      </header>

      <div className="atlas-netflix-catalog">
        {pastOriginalRows.map((row) => (
          <section key={row.label} className="atlas-netflix-row-wrap" aria-labelledby={`atlas-originals-${row.label}`}>
            <div className="atlas-netflix-row-head">
              <h2 id={`atlas-originals-${row.label}`}>{row.label}</h2>
              <span>{row.events.length} events</span>
            </div>
            <div className="atlas-netflix-row" role="list">
              {row.events.map((event) => (
                <article
                  key={event.id}
                  className="atlas-netflix-card"
                  role="listitem"
                  style={
                    {
                      "--event-accent": event.accent,
                      "--event-glow": event.glow,
                    } as React.CSSProperties
                  }
                >
                  <div className="atlas-netflix-poster">
                    <Image
                      src={event.poster}
                      alt={`${event.title} poster`}
                      className="atlas-netflix-poster-image"
                      fill
                      sizes="(max-width: 768px) 58vw, 220px"
                    />
                    <span className="atlas-netflix-poster-overlay" aria-hidden="true" />
                  </div>
                  <div className="atlas-netflix-meta">
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                    <p>
                      {event.venue} · {event.city}
                    </p>
                    <span>{event.format}</span>
                    <dl className="atlas-netflix-metrics">
                      <div>
                        <dt>Revenue</dt>
                        <dd>{formatOriginalsCurrency(event.metrics.revenue)}</dd>
                      </div>
                      <div>
                        <dt>Expenses</dt>
                        <dd>{formatOriginalsCurrency(event.metrics.expenses)}</dd>
                      </div>
                      <div>
                        <dt>Earned</dt>
                        <dd>{formatOriginalsCurrency(eventEarnings(event.metrics))}</dd>
                      </div>
                      <div>
                        <dt>Signups</dt>
                        <dd>{event.metrics.signups.toLocaleString("en-SG")}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
