export const SITE_URL = "https://www.1stcalluk.com";

export const SITE_SEARCH_PAGES = [
  {
    title: "Home",
    href: "/",
    description: "Expert UK immigration services in Nottingham.",
    keywords: ["immigration", "nottingham", "visa", "home"],
  },
  {
    title: "About Us",
    href: "/about-us",
    description: "Specialist immigration law firm regulated by the IAA.",
    keywords: ["about", "firm", "nottingham", "iaa"],
  },
  {
    title: "Our Immigration Services",
    href: "/our-immigration-services",
    description: "Visas, appeals, ILR, citizenship, and sponsor licences.",
    keywords: ["services", "visa", "appeal", "ilr", "citizenship", "sponsor"],
  },
  {
    title: "Our Immigration Team",
    href: "/our-immigration-team",
    description: "Meet the advisers at 1st Call UK Immigration Services.",
    keywords: ["team", "advisers", "lawyers"],
  },
  {
    title: "Reviews",
    href: "/reviews",
    description: "Client reviews and testimonials.",
    keywords: ["reviews", "testimonials", "ratings"],
  },
  {
    title: "Blog",
    href: "/blog",
    description: "UK immigration news, guides, and commentary.",
    keywords: ["blog", "news", "guides", "immigration law"],
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Book a consultation or get in touch with our Nottingham office.",
    keywords: ["contact", "consultation", "appointment", "phone", "email"],
  },
  {
    title: "Document Management",
    href: "/document-management",
    description: "Secure client document upload and case management.",
    keywords: ["documents", "dms", "upload", "portal"],
  },
  {
    title: "Latest News",
    href: "/latest-news",
    description: "Media coverage and firm updates.",
    keywords: ["news", "media", "press"],
  },
] as const;

export function searchSitePages(query: string) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  return SITE_SEARCH_PAGES.filter((page) => {
    const haystack = [
      page.title,
      page.description,
      page.href,
      ...page.keywords,
    ]
      .join(" ")
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}
