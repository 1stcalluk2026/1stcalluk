import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.1stcalluk.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}