import ClientProductDetail from "./ClientProductDetail";
import { getFeaturedRates } from "../../lib/api";

export const dynamic = "force-dynamic";

export default async function ProductSepPage({ params }) {
  const { id } = params;
  const { items } = await getFeaturedRates();
  const numericId = Number(id);
  const product = items.find((i) => i.id === numericId);
  if (!product) {
    return <p className="text-center text-2xl mt-10">Product not found!</p>;
  }
  return <ClientProductDetail serverProduct={product} />;
}
