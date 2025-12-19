import Link from "next/link";
import Image from "next/image";
import { immigrationClient } from "../../../sanity/lib/sanityClient";
import { urlFor } from "../../../sanity/lib/sanityImage";
import BlogFade from "./BlogFade";

type BlogPostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: { _ref: string; _type: string } };
  publishedAt: string;
};

const BLOG_QUERY = `
*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt
}
`;

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function BlogPage() {
  const posts = await immigrationClient.fetch(BLOG_QUERY);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <BlogFade>
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-extrabold text-center text-[#2d459c] mb-4">
            Immigration News & Insights
          </h1>

          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Practical articles and commentary on UK immigration law
            from the team at 1st Call UK Immigration Services.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: BlogPostCard) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {post.mainImage?.asset && (
                  <div className="relative w-full aspect-[16/9] mb-4 rounded-xl overflow-hidden shadow">
                    <Image
                      src={urlFor(post.mainImage.asset)
                        .width(800)
                        .height(450)
                        .url()}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-600 font-medium tracking-wide mb-1">
                    {formatDate(post.publishedAt)}
                  </p>

                  <h2 className="text-xl font-semibold text-[#2d459c] mb-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-block mt-2 text-[#2d459c] font-semibold hover:underline"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </BlogFade>
    </main>
  );
}
