import type { Metadata } from "next";

export const dynamic = "force-dynamic"; // ✅ REQUIRED FOR PREVIEW ROUTES

export const metadata: Metadata = {
  title: "UK Immigration News & Insights | 1st Call UK",
  description:
    "Expert articles on UK immigration law, visas, appeals, sponsorship and Home Office updates written by experienced immigration advisers.",

  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/blog",
  },

  openGraph: {
    title: "UK Immigration News & Insights | 1st Call UK",
    description:
      "Expert articles on UK immigration law, visas, appeals, sponsorship and Home Office updates written by experienced immigration advisers.",
    url: "https://www.1stcallukimmigration.co.uk/blog",
    type: "article",
    siteName: "1st Call UK Immigration Services",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "1st Call UK Immigration Blog",
            url: "https://www.1stcallukimmigration.co.uk/blog",
            description:
              "Latest UK immigration news, legal updates, visa guidance and appeal strategies.",
            publisher: {
              "@type": "Organization",
              name: "1st Call UK Immigration Services",
              logo:
                "https://www.1stcallukimmigration.co.uk/1st-calluk-logo02.jpg",
            },
          }),
        }}
      />
    </>
  );
}
