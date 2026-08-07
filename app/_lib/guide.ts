// app/_lib/guide.ts

export interface GuideEntry {
  path: string[];      // [] = root /guide, ["spices"] = /guide/spices
  title: string;
  content: string;
}

export const guideEntries: GuideEntry[] = [
  {
    path: ["spices"],
    title: "Spices 101",
    content: "Spices are the soul of every desi dish. Cumin, coriander, turmeric, and red chili — these four are the base of 80% of recipes.",
  },
  {
    path: ["spices", "garam-masala"],
    title: "What Is Garam Masala?",
    content: "Garam masala is a mix of cardamom, cinnamon, cloves, and black pepper — it is always added at the end of cooking so the aroma stays intact.",
  },
  {
    path: ["technique", "tadka"],
    title: "How to Make Tadka (Tempering)",
    content: "Sizzle cumin seeds or mustard seeds in hot oil, then immediately pour it over the curry or dal — the aroma opens up instantly.",
  },
  {
    path: ["technique", "marinating"],
    title: "How to Marinate Meat",
    content: "Marinate for at least 30 minutes, or overnight in yogurt and spices for best results — this makes the meat tender and flavorful.",
  },
];

// Optional catch-all route isi function se match karega
export function getGuideEntry(path: string[] | undefined): GuideEntry | undefined {
  if (!path || path.length === 0) return undefined; // root /guide ke liye
  const joined = path.join("/");
  return guideEntries.find((g) => g.path.join("/") === joined);
}
