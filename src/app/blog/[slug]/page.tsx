import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { immigrationClient } from "../../../../sanity/lib/sanityClient";
import { urlFor } from "../../../../sanity/lib/sanityImage";
import ArticleActions from "@/app/components/ArticleActions";
import PostFade from "./PostFade";
import Link from "next/link";
import { draftMode } from "next/headers";

export const dynamic = "force-dynamic";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  body: any;
  author?: { name?: string };
  seoTitle?: string;
  seoDescription?: string;
};

const getPostQuery = (slug: string) => `
*[_type == "blogPost" && slug.current == "${slug}"][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body,
  author->{ name },
  seoTitle,
  seoDescription
}
`;

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

// ======================
// META DATA
// ======================
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  if (!slug) {
    return { title: "Article | 1st Call UK Immigration Services" };
  }

  const post = (await immigrationClient.fetch(
    getPostQuery(slug)
  )) as BlogPost | null;

  if (!post) {
    return { title: "Article not found | 1st Call UK Immigration Services" };
  }

  const baseUrl = "https://www.1stcallukimmigration.co.uk";
  const url = `${baseUrl}/blog/${post.slug.current}`;

  const title =
    post.seoTitle || `${post.title} | 1st Call UK Immigration Services`;

  const description =
    post.seoDescription ||
    post.excerpt ||
    "Specialist guidance on UK immigration law from 1st Call UK Immigration Services.";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

// ======================
// PAGE RENDER
// ======================
export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const { isEnabled } = await draftMode();

  const post = (await immigrationClient
    .withConfig({
      useCdn: !isEnabled,
      perspective: isEnabled ? "previewDrafts" : "published",
    })
    .fetch(getPostQuery(slug))) as BlogPost | null;

  if (!post) notFound();

  return (
    <main className="bg-gray-50 py-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 mt-10">
        <p className="text-sm text-gray-600 font-medium tracking-wide mb-1">
          {formatDate(post.publishedAt)}
        </p>

        <PostFade>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d459c] leading-tight mb-6">
            {post.title}
          </h1>
        </PostFade>

        {post.author?.name && (
          <p className="text-base text-gray-600 mb-8">
            By {post.author.name}
          </p>
        )}

        <PostFade>
          {post.mainImage?.asset && (
            <div className="relative w-full mb-12 rounded-xl overflow-hidden shadow-md">
              <Image
                src={urlFor(post.mainImage.asset)
                  .width(1600)
                  .height(900)
                  .url()}
                alt={post.title}
                width={1600}
                height={900}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          )}
        </PostFade>

        <PostFade>
          <div className="prose prose-lg max-w-none prose-headings:text-[#2d459c] prose-a:text-[#2d459c]">
            <PortableText value={post.body} />
          </div>
        </PostFade>

        <PostFade>
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#2d459c] font-semibold hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </PostFade>

        <ArticleActions title={post.title} />
      </article>
    </main>
  );
}
