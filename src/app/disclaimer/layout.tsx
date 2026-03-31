import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | 1st Call UK Immigration Services",
  description:
    "Read the legal disclaimer for 1st Call UK Immigration Services. Important information about our website content, professional guidance and regulatory compliance.",

  // Canonical URL
  alternates: {
    canonical:
      "https://www.1stcallukimmigration.co.uk/legal/disclaimer",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Legal Disclaimer | 1st Call UK Immigration Services",
    description:
      "Important legal information about the use of our website, professional guidance and regulatory compliance at 1st Call UK Immigration Services.",
    url: "https://www.1stcallukimmigration.co.uk/legal/disclaimer",
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
