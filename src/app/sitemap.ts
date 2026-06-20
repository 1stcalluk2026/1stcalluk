import { MetadataRoute } from 'next';

const baseUrl = 'https://www.1stcalluk.com';

const pages = [
  '/',
  '/about-us',
  '/our-immigration-services',
  '/our-immigration-team',
  '/reviews',
  '/blog',
  '/document-management',
  '/latest-news',
  '/contact',

  // Legal pages
  '/consumer-contracts-regulations-2013',
  '/disclaimer',
  '/gdpr-data-privacy-notice',
  '/cookie-policy',
  '/terms-of-website-use',

  // Blog posts (add/remove as needed)
  '/blog/judicial-review-pre-action-case-reviews-referrals',
  '/blog/graduate-visa-uk-2025-guide',
  '/blog/indefinite-leave-to-remain-ilr-2025-guide',
  '/blog/uk-visitor-visa-guide-2025',
  '/blog/uk-family-visa-routes-guide',
  '/blog/uk-skilled-worker-visa-guide',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : path.startsWith('/blog') ? 0.6 : 0.8,
  }));
}