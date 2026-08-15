import type { ReactNode } from "react";
import {
  aumOverTime,
  chartHeight,
  chartMax,
  commandCentreKpis,
  earningsByYear,
  financialsByYear,
  investorGrowth,
  investorsByMechanism,
  signupsByYear,
} from "./commandCentreMetrics";

const portfolioMechanisms = [
  {
    index: "01",
    name: "Strategic partnerships",
    value: "$1.20m",
    detail: "Contracted commitments",
    allocation: "10%",
  },
  {
    index: "02",
    name: "Buzo Originals",
    value: "$4.35m",
    detail: "Rights & format portfolio",
    allocation: "35%",
  },
  {
    index: "03",
    name: "Digital art",
    value: "$2.65m",
    detail: "Art & licensing rights",
    allocation: "21%",
  },
  {
    index: "04",
    name: "Concierge IP + technology",
    value: "$4.40m",
    detail: "Technology & data IP",
    allocation: "34%",
  },
];

function ChartPanel({
  title,
  meta,
  badge,
  children,
  wide = false,
}: {
  title: string;
  meta: string;
  badge?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <article className={`atlas-chart-panel${wide ? " atlas-chart-panel-wide" : ""}`}>
      <div className="atlas-chart-panel-head">
        <div>
          <span>{title}</span>
          <strong>{meta}</strong>
        </div>
        {badge ? <em>{badge}</em> : null}
      </div>
      {children}
    </article>
  );
}

export default function OverviewTab() {
  const aumMax = chartMax(aumOverTime.map((point) => point.value));
  const investorMax = chartMax(investorGrowth.map((point) => point.value));
  const mechanismMax = chartMax(investorsByMechanism.map((point) => point.value));
  const signupMax = chartMax(signupsByYear.map((point) => point.value));
  const earningsMax = chartMax(earningsByYear.map((point) => point.value));
  const financialMax = chartMax(
    financialsByYear.flatMap((year) => [year.revenue, year.expenses]),
  );

  return (
    <section className="atlas-overview" aria-labelledby="atlas-overview-title">
      <header className="atlas-console-header">
        <div className="atlas-console-title-wrap">
          <span className="atlas-live-dot" aria-hidden="true" />
          <div>
            <p className="atlas-eyebrow">Atlas / Cultural capital intelligence</p>
            <h1 className="atlas-console-title" id="atlas-overview-title">
              Capital under stewardship
            </h1>
          </div>
        </div>
        <dl className="atlas-aum-summary" aria-label="Portfolio value summary">
          <div>
            <dt>AUM</dt>
            <dd>{commandCentreKpis.aum}</dd>
          </div>
          <div>
            <dt>Investors</dt>
            <dd>{commandCentreKpis.totalInvestors}</dd>
          </div>
        </dl>
      </header>

      <dl className="atlas-kpi-strip" aria-label="Portfolio metrics">
        <div>
          <dt>Total investors</dt>
          <dd>{commandCentreKpis.totalInvestors}</dd>
        </div>
        <div>
          <dt>Revenue</dt>
          <dd>{commandCentreKpis.revenue}</dd>
        </div>
        <div>
          <dt>Expenses</dt>
          <dd>{commandCentreKpis.expenses}</dd>
        </div>
        <div>
          <dt>Net earnings</dt>
          <dd>{commandCentreKpis.netEarnings}</dd>
        </div>
        <div>
          <dt>Signups</dt>
          <dd>{commandCentreKpis.signups}</dd>
        </div>
        <div>
          <dt>Shareholders</dt>
          <dd>{commandCentreKpis.shareholders}</dd>
        </div>
      </dl>

      <div className="atlas-portfolio-strip" aria-label="Portfolio summary">
        <div className="atlas-strip-intro">
          <span className="atlas-mono-label">Capital allocation / 04 mechanisms</span>
          <strong>One view of cultural capital.</strong>
        </div>
        {portfolioMechanisms.map((mechanism) => (
          <article className="atlas-mechanism-card" key={mechanism.index}>
            <div className="atlas-card-index-row">
              <span className="atlas-card-index">{mechanism.index}</span>
              <span className="atlas-positive-signal">{mechanism.allocation}</span>
            </div>
            <p>{mechanism.name}</p>
            <div className="atlas-mechanism-metric">
              <strong>{mechanism.value}</strong>
              <span>{mechanism.detail}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="atlas-metrics-dashboard">
        <ChartPanel title="AUM over time" meta="Quarterly reported value" badge={`Now ${commandCentreKpis.aum}`} wide>
          <div className="atlas-chart-bars atlas-chart-bars-tall" aria-label="AUM over time by quarter">
            {aumOverTime.map((point) => (
              <div className="atlas-chart-bar-col" key={point.label}>
                <div className="atlas-chart-bar-track">
                  <span className="atlas-chart-bar atlas-chart-bar-aum" style={{ height: chartHeight(point.value, aumMax) }} />
                </div>
                <small>{point.label}</small>
                <strong>{point.display}</strong>
              </div>
            ))}
          </div>
        </ChartPanel>

        <ChartPanel title="Total investors" meta="Cumulative growth" badge={`${commandCentreKpis.totalInvestors} total`}>
          <div className="atlas-chart-bars" aria-label="Total investors over time">
            {investorGrowth.map((point) => (
              <div className="atlas-chart-bar-col" key={point.label}>
                <div className="atlas-chart-bar-track">
                  <span className="atlas-chart-bar atlas-chart-bar-investors" style={{ height: chartHeight(point.value, investorMax) }} />
                </div>
                <small>{point.label}</small>
              </div>
            ))}
          </div>
        </ChartPanel>

        <ChartPanel title="Investors by mechanism" meta="Current split across portfolio">
          <div className="atlas-chart-bars" aria-label="Investors by portfolio mechanism">
            {investorsByMechanism.map((point) => (
              <div className="atlas-chart-bar-col atlas-chart-bar-col-wide" key={point.label}>
                <div className="atlas-chart-bar-track">
                  <span className="atlas-chart-bar atlas-chart-bar-investors" style={{ height: chartHeight(point.value, mechanismMax) }} />
                </div>
                <small>{point.label}</small>
                <strong>{point.value}</strong>
              </div>
            ))}
          </div>
        </ChartPanel>

        <ChartPanel title="Revenue vs expenses" meta="Buzo Originals by year">
          <div className="atlas-chart-legend">
            <span><i className="atlas-chart-legend-revenue" aria-hidden="true" />Revenue</span>
            <span><i className="atlas-chart-legend-expense" aria-hidden="true" />Expenses</span>
          </div>
          <div className="atlas-chart-grouped" aria-label="Revenue versus expenses by year">
            {financialsByYear.map((year) => (
              <div className="atlas-chart-group" key={year.label}>
                <div className="atlas-chart-group-bars">
                  <span
                    className="atlas-chart-bar-revenue"
                    style={{ height: chartHeight(year.revenue, financialMax) }}
                    title={`Revenue ${year.revenue}`}
                  />
                  <span
                    className="atlas-chart-bar-expense"
                    style={{ height: chartHeight(year.expenses, financialMax) }}
                    title={`Expenses ${year.expenses}`}
                  />
                </div>
                <small>{year.label}</small>
              </div>
            ))}
          </div>
        </ChartPanel>

        <ChartPanel title="Signups" meta="Event registrations by year" badge={commandCentreKpis.signups}>
          <div className="atlas-chart-bars" aria-label="Signups by year">
            {signupsByYear.map((point) => (
              <div className="atlas-chart-bar-col atlas-chart-bar-col-wide" key={point.label}>
                <div className="atlas-chart-bar-track">
                  <span className="atlas-chart-bar atlas-chart-bar-signups" style={{ height: chartHeight(point.value, signupMax) }} />
                </div>
                <small>{point.label}</small>
                <strong>{point.display}</strong>
              </div>
            ))}
          </div>
        </ChartPanel>

        <ChartPanel title="Net earnings" meta="Buzo Originals by year">
          <div className="atlas-chart-bars" aria-label="Net earnings by year">
            {earningsByYear.map((point) => (
              <div className="atlas-chart-bar-col atlas-chart-bar-col-wide" key={point.label}>
                <div className="atlas-chart-bar-track">
                  <span className="atlas-chart-bar atlas-chart-bar-earnings" style={{ height: chartHeight(point.value, earningsMax) }} />
                </div>
                <small>{point.label}</small>
                <strong>{point.display}</strong>
              </div>
            ))}
          </div>
        </ChartPanel>
      </div>
    </section>
  );
}
