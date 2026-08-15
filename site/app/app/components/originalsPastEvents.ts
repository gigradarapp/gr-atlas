export type OriginalEventMetrics = {
  revenue: number;
  expenses: number;
  signups: number;
};

export type PastOriginalEvent = {
  id: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  format: string;
  poster: string;
  accent: string;
  glow: string;
  metrics: OriginalEventMetrics;
};

export type OriginalsPortfolioMetrics = {
  revenue: number;
  expenses: number;
  earnings: number;
  signups: number;
  events: number;
};

export function formatOriginalsCurrency(amount: number) {
  return `S$${amount.toLocaleString("en-SG")}`;
}

export function eventEarnings(metrics: OriginalEventMetrics) {
  return metrics.revenue - metrics.expenses;
}

export const pastOriginalRows: { label: string; events: PastOriginalEvent[] }[] = [
  {
    label: "2026",
    events: [
      {
        id: "moonphase-2026",
        title: "Moonphase Assembly",
        date: "03 Oct 2026",
        venue: "Pasir Panjang Power Station",
        city: "Singapore",
        format: "Owned format",
        poster: "/assets/originals/moonphase-assembly-2026.png",
        accent: "#dfff31",
        glow: "rgba(223,255,49,.35)",
        metrics: { revenue: 180000, expenses: 95000, signups: 840 },
      },
      {
        id: "city-stereo-2026",
        title: "City in Stereo",
        date: "09 Aug 2026",
        venue: "Esplanade Annexe",
        city: "Singapore",
        format: "National Day edition",
        poster: "/assets/originals/city-in-stereo-2026.png",
        accent: "#ff7a45",
        glow: "rgba(255,122,69,.28)",
        metrics: { revenue: 220000, expenses: 110000, signups: 1200 },
      },
      {
        id: "afterlight-2026",
        title: "Afterlight Sessions",
        date: "11 Apr 2026",
        venue: "Kampong Gelam",
        city: "Singapore",
        format: "Commissioned work",
        poster: "/assets/originals/afterlight-sessions-2026.png",
        accent: "#ffd166",
        glow: "rgba(255,209,102,.24)",
        metrics: { revenue: 85000, expenses: 48000, signups: 420 },
      },
      {
        id: "night-bloom-2026",
        title: "Night Bloom",
        date: "24 Jan 2026",
        venue: "Gillman Barracks",
        city: "Singapore",
        format: "Co-owned format",
        poster: "/assets/originals/night-bloom-2026.png",
        accent: "#8fd4ff",
        glow: "rgba(143,212,255,.28)",
        metrics: { revenue: 110000, expenses: 62000, signups: 560 },
      },
    ],
  },
  {
    label: "2025",
    events: [
      {
        id: "hungry-ghost-2025",
        title: "Hungry Ghost Listening Room",
        date: "22 Aug 2025",
        venue: "The Projector",
        city: "Singapore",
        format: "Cultural pilot",
        poster: "/assets/originals/hungry-ghost-2025.png",
        accent: "#c77dff",
        glow: "rgba(199,125,255,.24)",
        metrics: { revenue: 42000, expenses: 38000, signups: 310 },
      },
      {
        id: "city-stereo-2025",
        title: "City in Stereo",
        date: "09 Aug 2025",
        venue: "Esplanade Annexe",
        city: "Singapore",
        format: "National Day edition",
        poster: "/assets/originals/city-in-stereo-2026.png",
        accent: "#ff7a45",
        glow: "rgba(255,122,69,.28)",
        metrics: { revenue: 195000, expenses: 98000, signups: 980 },
      },
      {
        id: "night-bloom-2025",
        title: "Night Bloom",
        date: "24 Jan 2025",
        venue: "Gillman Barracks",
        city: "Singapore",
        format: "Co-owned format",
        poster: "/assets/originals/night-bloom-2026.png",
        accent: "#8fd4ff",
        glow: "rgba(143,212,255,.28)",
        metrics: { revenue: 88000, expenses: 55000, signups: 445 },
      },
    ],
  },
  {
    label: "2024",
    events: [
      {
        id: "f1-afterdark-2024",
        title: "F1 After-dark Route",
        date: "14 Sep 2024",
        venue: "Marina Bay circuit zone",
        city: "Singapore",
        format: "Demand capture",
        poster: "/assets/originals/f1-afterdark-2024.png",
        accent: "#ff5a1f",
        glow: "rgba(255,90,31,.28)",
        metrics: { revenue: 320000, expenses: 185000, signups: 2100 },
      },
      {
        id: "monsoon-2024",
        title: "Monsoon Frequency",
        date: "06 Dec 2024",
        venue: "The Warehouse Hotel",
        city: "Singapore",
        format: "Licensed format",
        poster: "/assets/originals/monsoon-frequency-2024.png",
        accent: "#67e8f9",
        glow: "rgba(103,232,249,.22)",
        metrics: { revenue: 76000, expenses: 52000, signups: 380 },
      },
      {
        id: "afterlight-2024",
        title: "Afterlight Sessions",
        date: "11 Apr 2024",
        venue: "Kampong Gelam",
        city: "Singapore",
        format: "Commissioned work",
        poster: "/assets/originals/afterlight-sessions-2026.png",
        accent: "#ffd166",
        glow: "rgba(255,209,102,.24)",
        metrics: { revenue: 62000, expenses: 41000, signups: 290 },
      },
      {
        id: "night-bloom-preview-2024",
        title: "Night Bloom Preview",
        date: "18 Nov 2024",
        venue: "National Design Centre",
        city: "Singapore",
        format: "Preview run",
        poster: "/assets/originals/night-bloom-2026.png",
        accent: "#86efac",
        glow: "rgba(134,239,172,.22)",
        metrics: { revenue: 28000, expenses: 22000, signups: 165 },
      },
      {
        id: "midnight-assembly-2024",
        title: "Midnight Assembly",
        date: "15 Sep 2024",
        venue: "Aliwal Arts Centre",
        city: "Singapore",
        format: "Prototype run",
        poster: "/assets/originals/moonphase-assembly-2026.png",
        accent: "#f472b6",
        glow: "rgba(244,114,182,.22)",
        metrics: { revenue: 18000, expenses: 16000, signups: 95 },
      },
    ],
  },
];

export const originalsPortfolioMetrics: OriginalsPortfolioMetrics = pastOriginalRows
  .flatMap((row) => row.events)
  .reduce(
    (totals, event) => ({
      revenue: totals.revenue + event.metrics.revenue,
      expenses: totals.expenses + event.metrics.expenses,
      earnings: totals.earnings + eventEarnings(event.metrics),
      signups: totals.signups + event.metrics.signups,
      events: totals.events + 1,
    }),
    { revenue: 0, expenses: 0, earnings: 0, signups: 0, events: 0 },
  );
