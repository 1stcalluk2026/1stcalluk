import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new NextResponse("Missing slug", { status: 400 });
  }

  (await draftMode()).enable();

  return NextResponse.redirect(
    `https://1stcalluk-96op.vercel.app/1stcalluk-group/blog/${slug}`,
    307
  );
}
