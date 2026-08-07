import { recipes } from "../_lib/recipes";
import RecipeCard from "../components/RecipeCard";

export default function RecipesPage() {
  return (
    <>
      <div className="pt-14 pb-6">
        <p className="font-mono text-xs uppercase tracking-wide text-chili">Menu</p>
        <h1 className="font-display text-4xl mt-2.5">All Recipes</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {recipes.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </>
  );
}