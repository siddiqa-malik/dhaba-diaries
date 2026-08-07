import Link from "next/link";
import type { Recipe } from "../_lib/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="block bg-card border border-border rounded-[10px] p-5 transition hover:bg-cardHover hover:-translate-y-0.5"
    >
      <span className="font-mono text-[11px] text-accent uppercase tracking-wide">
        {recipe.tags.join(" · ")}
      </span>
      <h3 className="font-display text-[19px] mt-2">{recipe.title}</h3>
      <p className="text-muted text-sm mt-2 leading-relaxed">{recipe.description}</p>
      <p className="font-mono text-xs text-faint mt-3.5">
        {recipe.cookTime} · {recipe.serves}
      </p>
    </Link>
  );
}