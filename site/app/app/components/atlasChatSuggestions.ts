type TabId = "overview" | "partnerships" | "originals" | "art" | "technology";

export type AtlasSectionSuggestions = {
  label: string;
  welcome: string;
  prompts: string[];
};

const sectionSuggestions: Record<TabId, AtlasSectionSuggestions> = {
  overview: {
    label: "Command centre",
    welcome:
      "I'm Atlas. Ask about AUM, investor growth, revenue, expenses, signups, or how capital is allocated across the portfolio.",
    prompts: [
      "Summarize our AUM trend over the last few quarters.",
      "How are total investors split across the four mechanisms?",
      "What's our portfolio revenue, expenses, and net earnings?",
      "Which mechanism deserves more capital right now?",
    ],
  },
  partnerships: {
    label: "Strategic partnerships",
    welcome:
      "I'm Atlas. Ask about vendor context, archived discussions, rights boundaries, or what needs follow-up in this partnership workspace.",
    prompts: [
      "Summarize the previous vendor engagement.",
      "What content rights and feed boundaries were discussed?",
      "Which partnership threads are paused or need follow-up?",
      "Where does Atlas fit in the partnerships workflow?",
    ],
  },
  originals: {
    label: "Buzo Originals",
    welcome:
      "I'm Atlas. Ask about past events, revenue, expenses, signups, or how formats like Moonphase Assembly and City in Stereo are performing.",
    prompts: [
      "Which event had the highest net earnings?",
      "Compare 2026 signups with 2025 and 2024.",
      "Break down revenue and expenses by year.",
      "How is Moonphase Assembly tracking for 2026?",
    ],
  },
  art: {
    label: "Digital art",
    welcome:
      "I'm Atlas. Ask about artworks in the register, collection valuation, investors, shareholders, or how individual works compare.",
    prompts: [
      "What's the total valuation of our art collection?",
      "Which artwork is worth the most?",
      "How many investors and shareholders do we have?",
      "Which works have the strongest investor backing?",
    ],
  },
  technology: {
    label: "Concierge IP + technology",
    welcome:
      "I'm Atlas. Ask about acquired IP, underlying technology, portfolio valuation, or which supporting documents to review.",
    prompts: [
      "What's the total value of our IP register?",
      "Which IP assets are most valuable?",
      "Explain the technology behind Intent Graph Agent.",
      "Which acquisition documents should I review first?",
    ],
  },
};

function normalizeTabId(tabId: string): TabId {
  if (tabId in sectionSuggestions) {
    return tabId as TabId;
  }
  return "overview";
}

export function getSectionSuggestions(tabId: string): AtlasSectionSuggestions {
  return sectionSuggestions[normalizeTabId(tabId)];
}

export function getSuggestedPrompts(tabId: string) {
  return getSectionSuggestions(tabId).prompts;
}

export function getWelcomeContent(tabId: string, workspace: string) {
  const section = getSectionSuggestions(tabId);
  return `${section.welcome} You're in ${workspace}.`;
}
