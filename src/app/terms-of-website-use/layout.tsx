import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Website Use | 1st Call UK Immigration Services",
  description:
    "Read the Terms of Website Use for 1st Call UK Immigration Services, outlining the rules, obligations and legal conditions for accessing and using our website.",

  // Canonical URL
  alternates: {
    canonical:
      "https://www.1stcallukimmigration.co.uk/legal/terms-of-website-use",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Terms of Website Use | 1st Call UK Immigration Services",
    description:
      "Review the Terms of Website Use for 1st Call UK Immigration Services, including important rules, obligations and legal conditions for website access.",
    url: "https://www.1stcallukimmigration.co.uk/legal/terms-of-website-use",
    type: "article",
    siteName: "1st Call UK Immigration Services",
  },
};
// ✅ REQUIRED NEXT.JS LAYOUT WRAPPER
export default function LegalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
