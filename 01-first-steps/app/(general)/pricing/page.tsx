import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Page generated to show different pricing options",
  keywords: ["pricing", "pricing options"],
};

export default function PricingPage() {
  return (
    <div>
      <span className="text-7xl">Pricing Page</span>
    </div>
  );
}
