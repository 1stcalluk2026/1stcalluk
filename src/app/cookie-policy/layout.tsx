import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | 1st Call UK Immigration Services",
  description:
    "Read the Cookie Policy for 1st Call UK Immigration Services. Learn how cookies are used on our website and how we handle data to improve your browsing experience.",

  // Canonical URL
  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/legal/cookie-policy",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Cookie Policy | 1st Call UK Immigration Services",
    description:
      "Read the Cookie Policy for 1st Call UK Immigration Services and learn how we use cookies and manage website data to improve your browsing experience.",
    url: "https://www.1stcallukimmigration.co.uk/legal/cookie-policy",
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
