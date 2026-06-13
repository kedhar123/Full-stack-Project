"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, image, title, price }) => {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col items-center  rounded p-1 text-black hover:shadow-lg m-3 transition-all ease-in">
      <Image
        src={image}
        alt={title}
        width={260}
        height={160}
        className="object-contain"
      />
      <p className="mt-3 font-semibold text-black">{title}</p>
      <p className="text-sm text-black">₹{Number(price).toFixed(2)}</p>
      <button
        onClick={() => addToCart({ id, image, title, price: Number(price) })}
        className="mt-3 bg-[#004F57] text-white px-4 py-2 rounded hover:bg-[#003f45]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
