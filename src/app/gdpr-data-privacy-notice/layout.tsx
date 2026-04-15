import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & Data Privacy Notice | 1st Call UK",
  description:
    "Read our GDPR and Data Privacy Notice explaining how 1st Call UK collects, stores and protects your personal information in line with UK data protection law.",

  // Canonical URL
  alternates: {
    canonical:
      "https://www.1stcallukimmigration.co.uk/legal/gdpr-data-privacy-notice",
  },

  // OpenGraph metadata
  openGraph: {
    title: "GDPR & Data Privacy Notice | 1st Call UK",
    description:
      "Learn how 1st Call UK collects, manages and protects your personal data under UK GDPR and data protection law.",
    url: "https://www.1stcallukimmigration.co.uk/legal/gdpr-data-privacy-notice",
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
