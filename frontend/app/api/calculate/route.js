import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const backendBase = process.env.BACKEND_URL || "http://localhost:4602";

  try {
    const payload = await request.json();
    const backendUrl = new URL("/api/calculate", backendBase);

    const res = await fetch(backendUrl.toString(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

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
