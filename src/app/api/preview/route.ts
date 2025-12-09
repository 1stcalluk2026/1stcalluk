import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Missing slug", { status: 400 });
  }

  // ✅ Next.js 15+ compatible draft mode enable
  const draft = await draftMode();
  draft.enable();

  // ✅ Redirect to the blog post in preview mode
redirect(`/1stcalluk-group/blog/${slug}`);
}
