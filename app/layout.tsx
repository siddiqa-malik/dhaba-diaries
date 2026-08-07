import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600"] });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Dhaba Diaries — Desi Recipes",
  description: "Real recipes, dhaba style.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} ${mono.variable}`}>
        <Navbar />
        <div className="max-w-[880px] mx-auto px-6 pb-20">{children}</div>
      </body>
    </html>
  );
}