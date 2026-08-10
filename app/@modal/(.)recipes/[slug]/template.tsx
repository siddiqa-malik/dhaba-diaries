import type { ReactNode } from "react";

export default function RecipeModalTemplate({ children }: { children: ReactNode }) {
  return <div className="animate-stamp-in">{children}</div>;
}
