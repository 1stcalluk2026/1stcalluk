import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Immigration Advisers | Nottingham | 1st Call UK",
  description:
    "Meet our experienced immigration advisers in Nottingham. Over 15 years of experience supporting clients with visas, appeals and complex immigration issues.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/our-immigration-team",
  },

  // OpenGraph metadata for social and Google previews
  openGraph: {
    title: "Our Immigration Advisers | Nottingham | 1st Call UK",
    description:
      "Meet our experienced immigration advisers in Nottingham. Over 15 years of experience supporting clients with visas, appeals and complex immigration issues.",
    url: "https://www.1stcallukimmigration.co.uk/our-immigration-team",
    type: "article",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
