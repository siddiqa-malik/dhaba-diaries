"use client";
// ↑ ye line ZAROORI hai — kyunke andar useState (browser ka hook) use ho raha hai

import { useState } from "react";

export default function SaveButton() {
  // useState sirf Client Component mein chal sakta hai
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => setSaved(!saved)}
      className={`font-mono text-xs px-3 py-1.5 rounded-full border transition ${
        saved
          ? "border-accent text-accent bg-accent/10"
          : "border-border text-muted"
      }`}
    >
      {saved ? "✓ Saved" : "+ Save Recipe"}
    </button>
  );
}