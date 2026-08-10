import type { ReactNode } from "react";

export default function RecipesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs text-chili uppercase tracking-wide mb-4">
        Recipes Section
      </p>
      {children}
    </div>
  );
}
