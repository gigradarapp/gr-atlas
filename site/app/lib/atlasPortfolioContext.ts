import {
  aumOverTime,
  commandCentreKpis,
  currentAum,
  financialsByYear,
  investorGrowth,
  investorsByMechanism,
} from "@/app/app/components/commandCentreMetrics";
import { acquiredIpTechnology, ipTechnologyPortfolioValue, ipTechnologyTotals } from "@/app/app/components/conciergeAcquisitions";
import {
  artworkCollection,
  artworkCollectionValue,
  artworkTotals,
} from "@/app/app/components/digitalArtCollection";
import {
  eventEarnings,
  formatOriginalsCurrency,
  originalsPortfolioMetrics,
  pastOriginalRows,
} from "@/app/app/components/originalsPastEvents";
import { partnershipRecords, vendorArchive } from "@/app/app/components/partnershipsVendorArchive";

const portfolioMechanisms = [
  { index: "01", name: "Strategic partnerships", value: "$1.20m", allocation: "10%", detail: "Contracted commitments" },
  { index: "02", name: "Buzo Originals", value: "$4.35m", allocation: "35%", detail: "Rights & format portfolio" },
  { index: "03", name: "Digital art", value: "$2.65m", allocation: "21%", detail: "Art & licensing rights" },
  { index: "04", name: "Concierge IP + technology", value: "$4.40m", allocation: "34%", detail: "Technology & data IP" },
];

export type AtlasChatContext = {
  workspace?: string;
  tabId?: string;
};

export function buildAtlasPortfolioData() {
  return {
    note: "Fictional demo data for the Buzo Atlas prototype. Treat all figures below as authoritative for this workspace.",
    commandCentre: {
      aumUsd: `$${currentAum.toFixed(2)}m`,
      kpis: commandCentreKpis,
      capitalAllocation: portfolioMechanisms,
      aumOverTime,
      investorGrowth,
      investorsByMechanism,
      originalsFinancialsByYear: financialsByYear.map((year) => ({
        year: year.label,
        revenue: formatOriginalsCurrency(year.revenue),
        expenses: formatOriginalsCurrency(year.expenses),
        netEarnings: formatOriginalsCurrency(year.earnings),
        signups: year.signups,
      })),
    },
    strategicPartnerships: {
      vendorArchive: {
        vendor: vendorArchive.vendor,
        period: vendorArchive.period,
        summary: vendorArchive.summary,
        context: vendorArchive.context,
        discussions: vendorArchive.discussions,
      },
      records: partnershipRecords.map((record) => ({
        id: record.id,
        name: record.name,
        category: record.category,
        status: record.status,
        period: record.period,
        summary: record.summary,
        context: record.context,
        discussions: record.discussions,
      })),
    },
    buzoOriginals: {
      portfolioTotals: {
        events: originalsPortfolioMetrics.events,
        revenue: formatOriginalsCurrency(originalsPortfolioMetrics.revenue),
        expenses: formatOriginalsCurrency(originalsPortfolioMetrics.expenses),
        netEarnings: formatOriginalsCurrency(originalsPortfolioMetrics.earnings),
        signups: originalsPortfolioMetrics.signups,
      },
      events: pastOriginalRows.flatMap((row) =>
        row.events.map((event) => ({
          year: row.label,
          title: event.title,
          date: event.date,
          venue: event.venue,
          city: event.city,
          format: event.format,
          revenue: formatOriginalsCurrency(event.metrics.revenue),
          expenses: formatOriginalsCurrency(event.metrics.expenses),
          netEarnings: formatOriginalsCurrency(eventEarnings(event.metrics)),
          signups: event.metrics.signups,
        })),
      ),
    },
    digitalArt: {
      collectionValue: artworkCollectionValue,
      totals: artworkTotals,
      works: artworkCollection.map((artwork) => ({
        id: artwork.id,
        title: artwork.title,
        artist: artwork.artist,
        medium: artwork.medium,
        valuation: artwork.valuation,
        investors: artwork.investors,
        shareholders: artwork.shareholders,
      })),
    },
    conciergeIpTechnology: {
      portfolioValue: ipTechnologyPortfolioValue,
      totals: ipTechnologyTotals,
      register: acquiredIpTechnology.map((item) => ({
        id: item.id,
        ip: item.ip,
        technology: item.technology,
        valuation: item.valuation,
        documents: item.documents.map((document) => document.name),
      })),
    },
  };
}

export function buildAtlasSystemPrompt(context: AtlasChatContext) {
  const workspace = context.workspace ?? "Command centre";
  const tabId = context.tabId ?? "overview";
  const portfolioData = JSON.stringify(buildAtlasPortfolioData(), null, 2);

  return `You are Atlas, the agentic operating assistant for Buzo Atlas — an AI-native family-office workspace for the nightlife and culture economy.

You help operators understand portfolio data, coordinate partners and rights, and interpret metrics across cultural capital mechanisms. You speak clearly, concisely, and like a trusted operating partner — not a generic chatbot.

Current workspace: ${workspace}
Active tab id: ${tabId}

Portfolio mechanisms:
1. Strategic partnerships — artists, venues, promoters, hospitality, brands, technology, distributors, capital
2. Buzo Originals — owned or licensed event IP and past event performance
3. Digital art — provenance, ownership, valuation, investors, and shareholders
4. Concierge IP + technology — acquired IP, technology assets, and supporting documents

DEMO PORTFOLIO DATA (authoritative for this prototype — use these numbers and facts when answering):
${portfolioData}

When answering:
- You DO have access to the demo portfolio data above. Never say you lack access to AUM, revenue, investors, artworks, events, IP, or partnership records if the answer is in the data.
- Quote specific figures, names, dates, and records from the data when relevant.
- Prefer the section that matches the current workspace, but you may reference other sections when the question spans the portfolio.
- Be explicit when something is an inference versus a fact from the demo data.
- If the user asks about something not present in the data, say it is not in the demo register yet.
- Prefer actionable briefs, comparisons, and next steps.
- Keep replies focused unless the user asks for depth.
- Do not claim to execute trades, sign contracts, or bypass human approval.
- Remind the user that this is fictional demo data when helpful, but still answer using the figures above.`;
}
