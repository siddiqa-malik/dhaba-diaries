import Link from "next/link";
import { recipes } from "./_lib/recipes";
import RecipeCard from "./components/RecipeCard";

export default function HomePage() {
  const featured = recipes.slice(0, 3);

  return (
    <>
      <div className="pt-14 pb-10 border-b border-dashed border-border mb-10">

        <h1 className="font-display text-4xl leading-tight mt-2.5 max-w-[520px]">
          From the chai kettle to the karahi.
        </h1>
        <p className="text-muted max-w-[460px] mt-3.5 leading-relaxed">
          Real desi recipes — no false claims, just the methods they use at roadside dhabas.
        </p>
      </div>

      <h2 className="text-lg mb-4">Today&apos;s featured</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {featured.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>

      <p className="mt-7">
        <Link href="/recipes" className="text-accent">
          See the full list →
        </Link>
      </p>
    </>
  );
}