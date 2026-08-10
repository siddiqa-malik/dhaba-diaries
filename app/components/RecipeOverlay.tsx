"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RecipeOverlay({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const close = () => {
    if (pathname.startsWith("/recipes/")) {
      router.push("/recipes");
      return;
    }

    router.back();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 pt-16 sm:p-8 sm:pt-20"
      onClick={close}
    >
      <div
        className="relative w-full max-w-[880px] bg-card border border-border rounded p-8 pb-14"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #18130F 25%, transparent 25%), linear-gradient(-45deg, #18130F 25%, transparent 25%)",
          backgroundSize: "14px 14px",
          backgroundPosition: "0 100%",
          backgroundRepeat: "repeat-x",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close recipe"
          className="absolute top-4 right-4 border border-border text-muted hover:text-accent hover:border-accent font-mono text-sm w-8 h-8 rounded-full flex items-center justify-center transition"
        >
          x
        </button>

        {children}
      </div>
    </div>
  );
}
