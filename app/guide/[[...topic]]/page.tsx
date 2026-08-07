import { getGuideEntry, guideEntries } from "../../_lib/guide";
import Link from "next/link";

interface Props {
  params: Promise<{ topic?: string[] }>;
}

export default async function GuidePage({ params }: Props) {
  const { topic } = await params;
  const entry = getGuideEntry(topic);

  if (!entry) {
    return (
      <>
        <div className="pt-14 pb-6">
          <p className="font-mono text-xs uppercase tracking-wide text-chili">Guide</p>
          <h1 className="font-display text-4xl mt-2.5">Kitchen Basics</h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {guideEntries.map((g) => (
            <Link
              key={g.path.join("/")}
              href={`/guide/${g.path.join("/")}`}
              className="block bg-card border border-border rounded-[10px] p-5 transition hover:bg-cardHover hover:-translate-y-0.5"
            >
              <span className="font-mono text-[11px] text-accent uppercase tracking-wide">
                {g.path.join(" / ")}
              </span>
              <h3 className="font-display text-[19px] mt-2">{g.title}</h3>
            </Link>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="bg-card border border-border rounded p-8">
      <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3.5">
        {entry.path.join(" / ")}
      </p>
      <h1 className="font-display text-3xl">{entry.title}</h1>
      <p className="text-muted mt-2.5 leading-relaxed">{entry.content}</p>
    </div>
  );
}