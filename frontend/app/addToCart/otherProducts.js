"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const OtherProducts = ({ id, image, title, price, inStock }) => {
  const { addToCart } = useCart();
  const displayPrice = Number(price);
  return (
    <div className="flex flex-col items-center border rounded p-4 text-black">
      <Image
        src={image}
        alt={title}
        width={180}
        height={120}
        className="object-contain"
      />
      <p className="mt-2 font-medium text-black">{title}</p>
      <p className="text-sm text-black">₹{displayPrice.toFixed(2)}</p>
      <button
        disabled={!inStock}
        onClick={() => addToCart({ id, image, title, price })}
        className={`mt-2 px-3 py-1 rounded text-white ${
          inStock
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {inStock ? "Add" : "Out of Stock"}
      </button>
    </div>
  );
};

export default OtherProducts;
