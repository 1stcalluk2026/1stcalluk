import Link from "next/link";
import { HOME_FAQS } from "@/lib/home-faqs";
import { searchSitePages } from "@/lib/site-search";

export const metadata = {
  title: "Search",
  description: "Search 1st Call UK Immigration Services for visas, appeals, and advice.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

function searchFaqs(query: string) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  return HOME_FAQS.filter(({ question, answer }) => {
    const haystack = `${question} ${answer}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const pageResults = searchSitePages(query);
  const faqResults = searchFaqs(query);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-[#2d459c]">Search</h1>
          <p className="text-gray-700">
            Find immigration services, advice, and answers across our website.
          </p>
        </div>

        <form action="/search" method="get" className="flex gap-3">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search visas, appeals, ILR, contact..."
            className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-[#2d459c] focus:outline-none focus:ring-2 focus:ring-[#2d459c]/20"
            aria-label="Search the website"
          />
          <button
            type="submit"
            className="rounded-md bg-[#2d459c] px-5 py-3 font-semibold text-white hover:bg-[#22347a] transition"
          >
            Search
          </button>
        </form>

        {query ? (
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#2d459c]">Pages</h2>
              {pageResults.length > 0 ? (
                <ul className="space-y-3">
                  {pageResults.map((page) => (
                    <li key={page.href} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                      <Link href={page.href} className="font-semibold text-[#2d459c] hover:underline">
                        {page.title}
                      </Link>
                      <p className="mt-1 text-sm text-gray-600">{page.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No matching pages found.</p>
              )}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#2d459c]">FAQs</h2>
              {faqResults.length > 0 ? (
                <ul className="space-y-3">
                  {faqResults.map((faq) => (
                    <li key={faq.question} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                      <p className="font-semibold text-[#2d459c]">{faq.question}</p>
                      <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No matching FAQs found.</p>
              )}
            </section>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Enter a keyword to search our immigration services and FAQs.
          </p>
        )}
      </div>
    </main>
  );
}
