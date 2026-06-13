export async function getFeaturedRates(params = {}) {
  const isServer = typeof window === "undefined";
  const backendBase = process.env.BACKEND_URL || "http://localhost:4602";
  const url = new URL(
    isServer ? "/api/featured-rates" : "/api/featured-rates",
    isServer ? backendBase : window.location.origin
  );
  const { width, height, thickness } = params;
  if (width != null) url.searchParams.set("width", width);
  if (height != null) url.searchParams.set("height", height);
  if (thickness != null) url.searchParams.set("thickness", thickness);
  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to fetch featured rates (${res.status})${text ? `: ${text}` : ""}`
    );
  }
  return res.json();
}

export async function calculateTray(payload) {
  const res = await fetch(`/api/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to calculate (${res.status})${text ? `: ${text}` : ""}`
    );
  }
  return res.json();
}
