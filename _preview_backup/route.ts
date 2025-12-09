import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new NextResponse("Missing slug", { status: 400 });
  }

  // ✅ Enable draft mode (correct usage)
  const draft = await draftMode();
  draft.enable();

  // ✅ Correct redirect syntax for NextResponse
  return NextResponse.redirect(
    new URL(`http://localhost:3000/blog/${slug}`)
  );
}
