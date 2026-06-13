"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 0,
    image: "/download.png",
    price: "50",
    title: "Cable tray",
  },
  {
    id: 1,
    image: "/download.png",
    price: "50 rs",
    title: "Cable tray",
  },
  {
    id: 2,
    image: "/download.png",
    price: "50 rs",
    title: "Cable tray",
  },
  {
    id: 3,
    image: "/download.png",
    price: "50 rs",
    title: "Cable tray",
  },
  {
    id: 4,
    image: "/download.png",
    price: "50 rs",
    title: "Cable tray",
  },
  {
    id: 5,
    image: "/download.png",
    price: "50 rs",
    title: "Cable tray",
  },
];

const ProductSepPage = () => {
  const { id } = useParams(); // get the dynamic id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-2xl mt-10">Product not found!</p>;
  }

  return (
    <div className="grid grid-cols-1 bg-white min-h-screen">
      <div className="flex items-start justify-center w-full max-w-4xl mx-auto p-4 gap-10 ">
        <Image
          src={product.image}
          alt={product.title}
          width={448}
          height={448}
          className="object-contain rounded-lg "
        />
        <div className="ml-8 flex flex-col space-y-6">
          <p className="text-black font-bold text-5xl">{product.title}</p>
          <p className="text-black font-bold text-2xl">{product.price}</p>
          <Link
            className="bg-[#004F57] text-white py-2 px-4 mt-2 rounded cursor-pointer"
            href="/addToCart"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSepPage;
