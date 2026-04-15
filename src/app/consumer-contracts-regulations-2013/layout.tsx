import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Contracts Regulations 2013 | Your Rights Explained",
  description:
    "Clear guidance on your rights under the Consumer Contracts Regulations 2013, including cancellations, refunds and protections for online and distance sales.",
  alternates: {
    canonical:
      "https://www.1stcallukimmigration.co.uk/legal/consumer-contracts-regulations-2013",
  },
  openGraph: {
    title: "Consumer Contracts Regulations 2013 | Your Rights Explained",
    description:
      "Understand your rights under the Consumer Contracts Regulations 2013, including rules for cancellations, refunds and protections for online and distance purchases.",
    url: "https://www.1stcallukimmigration.co.uk/legal/consumer-contracts-regulations-2013",
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
