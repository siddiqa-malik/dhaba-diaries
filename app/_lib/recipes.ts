// app/_lib/recipes.ts
// "_lib" prefix se ye folder route nahi banta — sirf data/helpers rakhne ke liye.

export interface Recipe {
  slug: string;
  title: string;
  tags: string[];       // e.g. ["drinks", "chai"] — collections routing isi se filter karegi
  description: string;
  cookTime: string;
  serves: string;
  ingredients: { name: string; qty: string }[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    slug: "karak-chai",
    title: "Karak Chai",
    tags: ["drinks", "chai"],
    description: "Strong, spiced milk tea with dark leaves — perfect for the morning.",
    cookTime: "10 min",
    serves: "2 cups",
    ingredients: [
      { qty: "1.5 cups", name: "Milk" },
      { qty: "0.5 cup", name: "Water" },
      { qty: "2 tbsp", name: "Black tea leaves" },
      { qty: "2", name: "Cardamom (crushed)" },
      { qty: "2 tbsp", name: "Sugar (or to taste)" },
    ],
    steps: [
      "Bring water and cardamom to a boil.",
      "Add tea leaves and cook on high heat for 2 minutes.",
      "Add milk and bring to a boil again, then lower the heat.",
      "Simmer on low heat for 5 minutes until the color turns deep.",
      "Add sugar, strain, and serve piping hot.",
    ],
  },
  {
    slug: "doodh-patti",
    title: "Doodh Patti",
    tags: ["drinks", "chai"],
    description: "Creamy milk-only tea, made without any water.",
    cookTime: "8 min",
    serves: "2 cups",
    ingredients: [
      { qty: "2 cups", name: "Milk" },
      { qty: "1.5 tbsp", name: "Black tea leaves" },
      { qty: "2 tbsp", name: "Sugar" },
    ],
    steps: [
      "Heat milk on low heat.",
      "Add tea leaves and cook on low heat for 5-6 minutes.",
      "Add sugar, strain, and serve.",
    ],
  },
  {
    slug: "chicken-karahi",
    title: "Chicken Karahi",
    tags: ["mains", "karahi"],
    description: "Classic karahi with tomatoes and ginger-garlic, made dhaba style.",
    cookTime: "40 min",
    serves: "4 people",
    ingredients: [
      { qty: "1 kg", name: "Chicken" },
      { qty: "0.5 cup", name: "Cooking oil" },
      { qty: "4-5", name: "Tomatoes (chopped)" },
      { qty: "1 tbsp", name: "Ginger-garlic paste" },
      { qty: "4-5", name: "Green chilies" },
      { qty: "1 tsp", name: "Red chili powder" },
      { qty: "1 tsp", name: "Salt" },
      { qty: "0.5 tsp", name: "Garam masala" },
    ],
    steps: [
      "Heat oil and fry the chicken on high heat until it turns white.",
      "Add ginger-garlic paste and fry for 2 minutes.",
      "Add tomatoes, cover, and let them soften (10-12 minutes).",
      "Add salt and red chili powder, then fry until the oil separates.",
      "Add green chilies and garam masala, then simmer for 5 minutes.",
    ],
  },
  {
    slug: "seekh-kebab",
    title: "Seekh Kebab",
    tags: ["mains", "bbq"],
    description: "Spiced minced meat kebabs, skewered and grilled with a smoky charcoal aroma.",
    cookTime: "35 min",
    serves: "4 people",
    ingredients: [
      { qty: "500 g", name: "Minced meat (beef/mutton)" },
      { qty: "1", name: "Onion (finely chopped)" },
      { qty: "1 tbsp", name: "Ginger-garlic paste" },
      { qty: "2", name: "Green chilies (chopped)" },
      { qty: "1 tsp", name: "Red chili powder" },
      { qty: "1 tsp", name: "Garam masala" },
      { qty: "2 tbsp", name: "Fresh coriander (chopped)" },
    ],
    steps: [
      "Mix all the ingredients thoroughly into the minced meat.",
      "Refrigerate the mixture for 30 minutes so it binds well.",
      "Shape it thickly onto skewers.",
      "Cook on charcoal or a griddle, turning until golden brown.",
    ],
  },
  {
    slug: "samosa",
    title: "Aloo Samosa",
    tags: ["snacks"],
    description: "Crispy fried samosas with a spiced potato filling.",
    cookTime: "45 min",
    serves: "10 samosas",
    ingredients: [
      { qty: "10", name: "Samosa wrappers" },
      { qty: "3", name: "Potatoes (boiled, mashed)" },
      { qty: "0.5 cup", name: "Green peas" },
      { qty: "1 tsp", name: "Cumin seeds" },
      { qty: "1 tsp", name: "Red chili powder" },
      { qty: "0.5 tsp", name: "Chaat masala" },
      { qty: "as needed", name: "Oil (for frying)" },
    ],
    steps: [
      "Temper cumin seeds in oil, then add peas and cook.",
      "Add potatoes and all the spices, mix well, and let it cool.",
      "Fill the wrappers with the filling and fold into cone shapes.",
      "Deep fry in hot oil until golden brown.",
    ],
  },
  {
    slug: "lassi",
    title: "Meethi Lassi",
    tags: ["drinks", "lassi"],
    description: "Cold, creamy yogurt lassi — the best thing for hot weather.",
    cookTime: "5 min",
    serves: "2 glasses",
    ingredients: [
      { qty: "1.5 cups", name: "Yogurt" },
      { qty: "0.5 cup", name: "Cold water" },
      { qty: "2 tbsp", name: "Sugar" },
      { qty: "a pinch", name: "Cardamom powder" },
    ],
    steps: [
      "Blend all the ingredients until smooth.",
      "Serve in a glass over ice.",
    ],
  },
];

// Dynamic route [slug] isi function ko use karega
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

// Catch-all route [...path] isi function ko use karega
export function getRecipesByTags(tags: string[]): Recipe[] {
  return recipes.filter((r) => tags.every((tag) => r.tags.includes(tag)));
}

// Saare unique tags — collections empty-state mein suggestion ke liye
export function getAllTags(): string[] {
  const set = new Set<string>();
  recipes.forEach((r) => r.tags.forEach((t) => set.add(t)));
  return Array.from(set);
}
