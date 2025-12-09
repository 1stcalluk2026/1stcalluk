import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new NextResponse("Missing slug", { status: 400 });
  }

  (await draftMode()).enable();

  // ✅ RELATIVE redirect — works on both localhost AND Vercel
  return NextResponse.redirect(
    new URL(`/blog/${slug}`, request.url)
  );
}
