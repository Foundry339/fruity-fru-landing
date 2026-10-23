// Everything editable on the site lives in this file: business info, the Square
// payment link, nav, packages, add-ons and copy lists.

// TODO: Replace with the real Square payment link. Every "Book a Party" /
// "Book This Package" button reads this constant — do not hard-code it elsewhere.
export const SQUARE_PAYMENT_URL = "https://square.link/u/REPLACE-ME";

export const siteConfig = {
  name: "Fruity-Fru",
  tagline: "Make It Yours. Make It Fruity-Fru.",
  shortDescription:
    "Stylish, mobile DIY accessory parties delivered to you in Connecticut and the Tri-State Area.",
  serviceArea: "Connecticut + the Tri-State Area",
  url: "https://www.fruityfru.com",
  // TODO: Placeholders — replace with real business info when available.
  email: "hello@fruityfru.com",
  phone: "(203) 555-0199",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  isContactPlaceholder: true,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export const minimumPartySize = 8;

export interface PartyPackage {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  baseGuestCount: number;
  additionalGuestPrice: number;
  highlight?: boolean;
  accentColor: "pink" | "berry" | "yellow";
  includes: string[];
}

const sharedIncludes = [
  "All tables, tablecloths, and patch displays",
  "Heat presses + professional heat pressing",
  "Full setup and cleanup",
  "Travel included",
];

export const partyPackages: PartyPackage[] = [
  {
    id: "basic",
    name: "Basic Package",
    tagline: "The essentials for a fun, easy party.",
    basePrice: 275,
    baseGuestCount: 8,
    additionalGuestPrice: 25,
    accentColor: "pink",
    includes: [
      "1 accessory per guest (hat, belt bag, or makeup pouch)",
      "3 patches per item",
      ...sharedIncludes,
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Package",
    tagline: "Our most popular pick — more patches, more fun.",
    basePrice: 350,
    baseGuestCount: 8,
    additionalGuestPrice: 30,
    highlight: true,
    accentColor: "berry",
    includes: [
      "1 accessory per guest (hat, belt bag, or makeup pouch)",
      "4 patches per item",
      ...sharedIncludes,
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate Package",
    tagline: "Go all out with the maximum patch selection.",
    basePrice: 420,
    baseGuestCount: 8,
    additionalGuestPrice: 35,
    accentColor: "yellow",
    includes: [
      "1 accessory per guest (hat, belt bag, or makeup pouch)",
      "5 patches per item",
      ...sharedIncludes,
    ],
  },
];

export const partyAddOns = [
  {
    id: "friendship-bracelets",
    name: "Friendship Bracelet Making",
    description: "A bracelet-making station so guests can stack up on beaded friendship bracelets.",
    priceLabel: "$10 per person",
  },
  {
    id: "hat-bag-chains",
    name: "Custom Hat & Bag Chains with Charms",
    description: "Guests build their own charm chain to clip onto their new hat or bag.",
    priceLabel: "$5–$10 per person",
  },
  {
    id: "additional-patches",
    name: "Additional Patches",
    description: "Want more patches per item than your package includes? Just ask.",
    priceLabel: "Pricing by request",
  },
];

export const aboutPoints = [
  {
    icon: "truck",
    title: "We come to you",
    description:
      "Tables, tablecloths, displays, heat presses, and materials — we bring the entire setup to your location.",
  },
  {
    icon: "users",
    title: "Guests create together",
    description:
      "Everyone picks an accessory and patches, then designs and presses their own piece side-by-side.",
  },
  {
    icon: "sparkles",
    title: "You walk away with it",
    description:
      "Professional on-site heat pressing means guests leave with a finished, wearable creation.",
  },
] as const;

export const howItWorksSteps = [
  { step: 1, title: "Pick Your Party", description: "Choose a package and book your date." },
  { step: 2, title: "Choose Your Accessory", description: "Trucker hat, belt bag, or makeup pouch." },
  { step: 3, title: "Pick Your Patches", description: "Choose the designs that match your vibe." },
  { step: 4, title: "Get Creative", description: "Lay out your design with your crew." },
  { step: 5, title: "Rock Your Creation", description: "We heat press it on the spot." },
];

export const perfectForItems = [
  { id: "birthday", label: "Birthdays", icon: "sparkle" },
  { id: "bachelorette", label: "Bachelorettes", icon: "heart" },
  { id: "bridal-shower", label: "Bridal Showers", icon: "bow" },
  { id: "kids-teens", label: "Kids & Teens", icon: "star" },
  { id: "girls-night", label: "Girls' Nights", icon: "cherry" },
  { id: "team-events", label: "Team Events", icon: "flower" },
] as const;
