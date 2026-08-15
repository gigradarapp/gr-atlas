import { artworkTotals } from "./digitalArtCollection";
import { formatOriginalsCurrency, originalsPortfolioMetrics, pastOriginalRows } from "./originalsPastEvents";

export type ChartPoint = {
  label: string;
  value: number;
  display?: string;
};

export type YearFinancials = {
  label: string;
  revenue: number;
  expenses: number;
  earnings: number;
  signups: number;
};

export const currentAum = 12.6;

export const aumOverTime: ChartPoint[] = [
  { label: "Q1 '24", value: 4.2, display: "$4.2m" },
  { label: "Q2 '24", value: 5.1, display: "$5.1m" },
  { label: "Q3 '24", value: 5.8, display: "$5.8m" },
  { label: "Q4 '24", value: 6.4, display: "$6.4m" },
  { label: "Q1 '25", value: 7.3, display: "$7.3m" },
  { label: "Q2 '25", value: 8.5, display: "$8.5m" },
  { label: "Q3 '25", value: 9.6, display: "$9.6m" },
  { label: "Q4 '25", value: 10.8, display: "$10.8m" },
  { label: "Q1 '26", value: 11.4, display: "$11.4m" },
  { label: "Q2 '26", value: 12.0, display: "$12.0m" },
  { label: "Q3 '26", value: 12.6, display: "$12.6m" },
];

export const investorsByMechanism: ChartPoint[] = [
  { label: "Partnerships", value: 12 },
  { label: "Originals", value: 18 },
  { label: "Digital art", value: artworkTotals.investors },
  { label: "IP + tech", value: 7 },
];

export const investorGrowth: ChartPoint[] = [
  { label: "Q1 '24", value: 8 },
  { label: "Q2 '24", value: 14 },
  { label: "Q3 '24", value: 19 },
  { label: "Q4 '24", value: 24 },
  { label: "Q1 '25", value: 31 },
  { label: "Q2 '25", value: 38 },
  { label: "Q3 '25", value: 46 },
  { label: "Q4 '25", value: 52 },
  { label: "Q1 '26", value: 57 },
  { label: "Q2 '26", value: 61 },
  { label: "Q3 '26", value: 64 },
];

export const financialsByYear: YearFinancials[] = pastOriginalRows.map((row) =>
  row.events.reduce(
    (totals, event) => ({
      label: row.label,
      revenue: totals.revenue + event.metrics.revenue,
      expenses: totals.expenses + event.metrics.expenses,
      earnings: totals.earnings + (event.metrics.revenue - event.metrics.expenses),
      signups: totals.signups + event.metrics.signups,
    }),
    { label: row.label, revenue: 0, expenses: 0, earnings: 0, signups: 0 },
  ),
);

export const signupsByYear: ChartPoint[] = financialsByYear.map((year) => ({
  label: year.label,
  value: year.signups,
  display: year.signups.toLocaleString("en-SG"),
}));

export const earningsByYear: ChartPoint[] = financialsByYear.map((year) => ({
  label: year.label,
  value: year.earnings,
  display: formatOriginalsCurrency(year.earnings),
}));

export const commandCentreKpis = {
  aum: `$${currentAum.toFixed(2)}m`,
  totalInvestors: investorGrowth[investorGrowth.length - 1]?.value ?? 0,
  shareholders: artworkTotals.shareholders,
  revenue: formatOriginalsCurrency(originalsPortfolioMetrics.revenue),
  expenses: formatOriginalsCurrency(originalsPortfolioMetrics.expenses),
  netEarnings: formatOriginalsCurrency(originalsPortfolioMetrics.earnings),
  signups: originalsPortfolioMetrics.signups.toLocaleString("en-SG"),
  events: originalsPortfolioMetrics.events,
};

export function chartMax(values: number[]) {
  return Math.max(...values, 1);
}

export function chartHeight(value: number, max: number) {
  return `${Math.round((value / max) * 100)}%`;
}
