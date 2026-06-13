import React from "react";
import ProductCard from "../components/productCard";
import Link from "next/link";

const products = [
  {
    id: 0,
    image: "/download.png",
    title: "Cable Tray A",
    price: 1500,
  },
  {
    id: 1,
    image: "/download.png",
    title: "Cable Tray B",
    price: 2000,
  },
  {
    id: 2,
    image: "/download.png",
    title: "Cable Tray C",
    price: 2500,
  },
  {
    id: 3,
    image: "/download.png",
    title: "Cable Tray D",
    price: 3000,
  },
  {
    id: 4,
    image: "/download.png",
    title: "Cable Tray E",
    price: 3500,
  },
  {
    id: 5,
    image: "/download.png",
    title: "Cable Tray F",
    price: 4000,
  },
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="flex font-bold text-5xl justify-center text-black pt-5">
        Product Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-8 p-3 cursor-pointe hover:shadow-lg m-3 rounded-lg transition-all ease-in">
        {products.map((product, index) => (
          <Link key={index} href={`/products/${product.id}`}>
            <div className="text-center">
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
