import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Page to get in touch with Juan",
  keywords: ["contactPage", "juan"],
};

export default function ContactPage() {
  return (
    <div>
      <span className="text-7xl">Contact Page</span>
    </div>
  );
}
