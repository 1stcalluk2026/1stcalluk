import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new NextResponse("Missing slug", { status: 400 });
  }

  // ✅ Enable draft mode
  (await draftMode()).enable();

  // ✅ FORCE redirect to LIVE SITE (not /api)
  return NextResponse.redirect(`/blog/${slug}`);

}
