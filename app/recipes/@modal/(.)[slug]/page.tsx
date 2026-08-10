import type { Metadata } from "next";
import { getRecipeBySlug } from "../../../_lib/recipes";
import { notFound } from "next/navigation";
import RecipeOverlay from "../../../components/RecipeOverlay";
import RecipeDetailContent from "../../../components/RecipeDetailContent";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe Nahi Mili — Dhaba Diaries" };
  }

  return {
    title: `${recipe.title} — Dhaba Diaries`,
    description: recipe.description,
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <RecipeOverlay>
      <RecipeDetailContent recipe={recipe} />
    </RecipeOverlay>
  );
}

