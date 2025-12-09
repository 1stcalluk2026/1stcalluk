import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    // ✅ Correct for your environment (fixes TS + runtime)
    const draft = await draftMode();
    draft.enable();

    return NextResponse.redirect(
      `https://1stcalluk-96op.vercel.app/blog/${slug}`,
      307
    );
  } catch (err) {
    return NextResponse.json({ error: "Preview failed" }, { status: 500 });
  }
}
