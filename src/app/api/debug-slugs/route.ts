import { immigrationClient } from "../../../../sanity/lib/sanityClient";

export async function GET() {
  const slugs = await immigrationClient.fetch(
    `*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return Response.json(slugs);
}
