import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Missing slug", { status: 400 });
  }

  // ✅ Enable draft mode
  const draft = await draftMode();
  draft.enable();

  // ✅ Correct live blog redirect
  redirect(`https://1stcalluk-96op.vercel.app/blog/${slug}`);
}
