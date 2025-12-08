import Parser from "rss-parser";
import Image from "next/image";
import PostFade from "./PostFade"; // ✅ Correct relative path

const mediaImages = [
  {
    src: "/news-africa-v3.webp",
    alt: "Zimbabwean woman faces deportation - African news coverage",
  },
  {
    src: "/news-evening-post-v3.webp",
    alt: "Protests grow in deportation row - Nottingham Evening Post",
  },
  {
    src: "/news-nottingham-post-v3.webp",
    alt: "Women living the nightmare of deportation - Nottingham Post",
  },
  {
    src: "/news-uk-v3.webp",
    alt: "Chinese battle 'a matter of life or death' - UK legal news",
  },
];

const parser = new Parser({
  customFields: {
    item: ["media:content", "enclosure"],
  },
});

export default async function LatestNewsPage() {
  const feed = await parser.parseURL("https://freemovement.org.uk/feed/");
  const posts = feed.items.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <PostFade>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-[#2d459c] text-center mb-4">
            Free Movement News Feed
          </h1>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Latest immigration law and policy updates automatically sourced from Free Movement.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {posts.map((post, i) => {
              const imageUrl =
                post.enclosure?.url ||
                post["media:content"]?.url ||
                "/news-placeholder.jpg";

              return (
                <div
                  key={i}
                  className="bg-[#f9f9fb] rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
                >
                  {/* Featured Image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={imageUrl}
                      alt={post.title || "Free Movement Article"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-sm text-gray-500 mb-1">
                    {post.creator || "Free Movement"}
                  </span>

                  <span className="text-xs text-gray-400 mb-2">
                    {new Date(post.pubDate || "").toDateString()}
                  </span>

                  <h2 className="text-xl font-semibold text-[#2d459c] mb-3">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-6 flex-grow">
                    {post.contentSnippet?.slice(0, 140)}...
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-[#2d459c] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#22347a] text-center transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            Content sourced automatically from{" "}
            <a
              href="https://freemovement.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2d459c]"
            >
              Free Movement
            </a>
            .
          </p>

          {/* MEDIA COVERAGE SECTION */}
    <div className="mt-20 bg-[#f6f8fc] border border-[#d9e0f2] rounded-3xl shadow-md px-6 md:px-12 py-14">
  <a href="#news-gallery">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#2d459c] text-center mb-2 hover:underline cursor-pointer">
      We’re on the News
    </h2>
  </a>

  <p className="text-sm md:text-base text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-10">
    Over the years, our immigration work has been featured across leading
    newspapers and media outlets. These stories highlight our commitment to
    defending vulnerable clients, challenging unlawful removal decisions,
    and shaping immigration law through landmark cases.
  </p>


            {/* NEWS GALLERY */}
            <section id="news-gallery">
  <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2">
    {mediaImages.map((img, i) => (
      <a
        key={img.src}
        href={img.src}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
<div className="relative w-full h-72 md:h-80 rounded-2xl 
  bg-white/40 backdrop-blur-md 
  border border-white/30
  shadow-lg shadow-black/10
  group-hover:shadow-xl group-hover:shadow-black/20
  transition-all duration-300
  flex items-center justify-center p-[10px]">

  <div className="relative w-full h-full rounded-xl overflow-hidden">
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={i < 1}
      placeholder="empty"
      className="object-cover object-center group-hover:scale-105 transition duration-500"
    />
  </div>

</div>


          <p className="text-center font-bold text-[#2d459c] mt-2 text-xs md:text-sm leading-snug">
          {img.alt}
        </p>
      </a>
    ))}
  </div>
</section>

          </div>

        </div>
      </PostFade>
    </main>
  );
}
