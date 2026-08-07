import { getRecipesByTags, getAllTags } from "../../_lib/recipes";
import RecipeCard from "../../components/RecipeCard";
import Link from "next/link";

interface Props {
  params: Promise<{ path: string[] }>;
}

export default async function CollectionPage({ params }: Props) {
  const { path } = await params;
  const matches = getRecipesByTags(path);
  const allTags = getAllTags();

  return (
    <>
      <div className="pt-14 pb-6">
        <p className="font-mono text-xs uppercase tracking-wide text-chili">Collection</p>
        <h1 className="font-display text-4xl mt-2.5">{path.join(" / ")}</h1>
      </div>

      <div className="mb-6">
        {allTags.map((tag) => {
          const isActive = path.includes(tag);
          return (
            <Link
              key={tag}
              href={`/collections/${tag}`}
              className={`inline-block font-mono text-xs border px-2.5 py-1 rounded-full mr-2 mb-2 ${
                isActive ? "border-accent text-accent" : "border-border text-muted"
              }`}
            >
              {tag}
            </Link>
          );
        })}
      </div>

      {matches.length === 0 ? (
        <div className="border border-dashed border-border rounded-[10px] p-10 text-center text-muted">
          No recipe exists for this combination yet — try one of the tags above.
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {matches.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      )}
    </>
  );
}