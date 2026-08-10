import type { Recipe } from "../_lib/recipes";
import SaveButton from "./SaveButton";

export default function RecipeDetailContent({ recipe }: { recipe: Recipe }) {
  return (
    <>
      <div className="absolute top-6 right-7 border border-chili text-chili font-mono text-[11px] uppercase px-2.5 py-1.5 rounded rotate-6">
        {recipe.cookTime}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl max-w-[420px]">{recipe.title}</h1>
        <SaveButton />
      </div>
      <p className="text-muted mt-2.5 leading-relaxed">{recipe.description}</p>

      <hr className="border-t border-dashed border-border my-6" />

      <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3.5">Ingredients</p>
      {recipe.ingredients.map((ing, i) => (
        <div
          key={i}
          className="flex justify-between py-1.5 border-b border-dotted border-border text-sm"
        >
          <span>{ing.name}</span>
          <span className="font-mono text-faint">{ing.qty}</span>
        </div>
      ))}

      <hr className="border-t border-dashed border-border my-6" />

      <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3.5">Method</p>
      {recipe.steps.map((step, i) => (
        <div key={i} className="flex gap-3.5 mb-4 leading-relaxed">
          <span className="font-mono text-accent shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span>{step}</span>
        </div>
      ))}
    </>
  );
}
