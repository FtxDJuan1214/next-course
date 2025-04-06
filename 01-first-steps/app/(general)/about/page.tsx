import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Page generated to show general data about Juan",
  keywords: ["about", "page", "juan"],
};

export default function AboutPage() {
  return (
    <div>
      <span className="text-7xl">About Page</span>
    </div>
  );
}
