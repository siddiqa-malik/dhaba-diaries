import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipeDetailContent from "../../../components/RecipeDetailContent";
import RecipeOverlay from "../../../components/RecipeOverlay";
import { getRecipeBySlug } from "../../../_lib/recipes";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe Nahi Mili - Dhaba Diaries" };
  }

  return {
    title: `${recipe.title} - Dhaba Diaries`,
    description: recipe.description,
  };
}

export default async function RecipeModalPage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <RecipeOverlay>
      <RecipeDetailContent recipe={recipe} />
    </RecipeOverlay>
  );
}
