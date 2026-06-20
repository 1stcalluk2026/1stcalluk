import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Fetch your dynamic data here (e.g., from an API or Database)
  // const products = await fetch('https://api.example.com/products').then((res) => res.json());

  // 2. Define your static routes
  const routes = [
    {
      url: 'https://www.1stcalluk.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  // 3. Map dynamic routes if you have them
  // const productRoutes = products.map((product) => ({
  //   url: `https://www.1stcalluk.com/product/${product.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }));

  // return [...routes, ...productRoutes];
  return routes;
}