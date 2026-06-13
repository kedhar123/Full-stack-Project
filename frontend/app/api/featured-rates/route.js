import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const backendBase = process.env.BACKEND_URL || "http://localhost:4602";

  try {
    const incomingUrl = new URL(request.url);
    const backendUrl = new URL("/api/featured-rates", backendBase);

    incomingUrl.searchParams.forEach((value, key) => {
      backendUrl.searchParams.set(key, value);
    });

    const res = await fetch(backendUrl.toString(), { cache: "no-store" });
    const contentType = res.headers.get("content-type") || "";

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        {
          error: "Backend request failed",
          status: res.status,
          details: text || undefined,
        },
        { status: 502 }
      );
    }

    if (contentType.includes("application/json")) {
      const data = await res.json();
      return NextResponse.json(data, { status: 200 });
    }

    const text = await res.text();
    return new NextResponse(text, {
      status: 200,
      headers: { "content-type": contentType || "text/plain" },
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Failed to reach backend",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 502 }
    );
  }
}
