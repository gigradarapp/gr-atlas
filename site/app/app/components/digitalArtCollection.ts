export type ArtworkRecord = {
  id: string;
  title: string;
  artist: string;
  medium: string;
  image: string;
  valuation: string;
  investors: number;
  shareholders: number;
};

export const artworkCollection: ArtworkRecord[] = [
  {
    id: "BA-024",
    title: "Monsoon Memory No. 3",
    artist: "Aisha Rahman",
    medium: "Mixed media / archival pigment",
    image: "/assets/art/ba-024-monsoon-memory-no-3.png",
    valuation: "S$42,000",
    investors: 4,
    shareholders: 6,
  },
  {
    id: "BA-019",
    title: "Orchid Protocol",
    artist: "Lim Wei",
    medium: "Generative sculpture study",
    image: "/assets/art/ba-019-orchid-protocol.png",
    valuation: "S$31,000",
    investors: 3,
    shareholders: 5,
  },
  {
    id: "BA-017",
    title: "Heat / Concrete",
    artist: "Nadia Yusuf",
    medium: "Light, concrete, photographic print",
    image: "/assets/art/ba-017-heat-concrete.png",
    valuation: "S$18,000",
    investors: 2,
    shareholders: 3,
  },
  {
    id: "BA-011",
    title: "Afterhours Index",
    artist: "Studio Kaki",
    medium: "Digital collage / archival print",
    image: "/assets/art/ba-011-afterhours-index.png",
    valuation: "S$27,000",
    investors: 5,
    shareholders: 8,
  },
  {
    id: "BA-008",
    title: "Neon Monsoon Study",
    artist: "Rafi Tan",
    medium: "Light painting / analogue print",
    image: "/assets/art/ba-008-neon-monsoon-study.png",
    valuation: "S$14,500",
    investors: 2,
    shareholders: 2,
  },
  {
    id: "BA-006",
    title: "Signal Garden",
    artist: "Hana Idris",
    medium: "Interactive sculpture documentation",
    image: "/assets/art/ba-006-signal-garden.png",
    valuation: "S$36,000",
    investors: 6,
    shareholders: 9,
  },
  {
    id: "BA-003",
    title: "Port Light Archive",
    artist: "Collective Minds",
    medium: "Photographic collage / edition",
    image: "/assets/art/ba-003-port-light-archive.png",
    valuation: "S$22,000",
    investors: 3,
    shareholders: 4,
  },
  {
    id: "BA-001",
    title: "Rain Circuit I",
    artist: "Syndicate SG",
    medium: "Audiovisual still / archival print",
    image: "/assets/art/ba-001-rain-circuit-i.png",
    valuation: "S$19,500",
    investors: 2,
    shareholders: 3,
  },
];

export const artworkTotals = artworkCollection.reduce(
  (totals, artwork) => ({
    works: totals.works + 1,
    investors: totals.investors + artwork.investors,
    shareholders: totals.shareholders + artwork.shareholders,
  }),
  { works: 0, investors: 0, shareholders: 0 },
);

export const artworkCollectionValue = "S$210,000";
