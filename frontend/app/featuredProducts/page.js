import { getFeaturedRates } from "../lib/api";
import FeaturedItem from "./FeaturedItem";

export default async function Product() {
  const { items } = await getFeaturedRates();

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="flex items-center justify-center pt-12 pb-8 text-5xl font-bold text-gray-800">
        FEATURED CABLE TRAYS
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((product) => (
            <FeaturedItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
