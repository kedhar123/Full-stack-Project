"use client";
import React, { useState } from "react";
import Image from "next/image";

const CartPhotos = () => {
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemove = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const buttonStyle =
    "px-3 py-1 border bg-white text-black rounded-md hover:shadow-lg transition-shadow duration-300 border-none";

  return (
    <div className="flex flex-row items-center justify-between w-full max-w-2xl border rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center">
        <Image
          src={"/cableTray.png"}
          alt="cable tray"
          width={80}
          height={80}
          className="object-contain border border-gray-200 rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-black">Cable Tray</h3>
          <p className="text-sm text-black">Each ₹899.00</p>
          <p className="text-sm text-green-600 flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            In Stock
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button onClick={handleDecrement} className={buttonStyle}>
            -
          </button>
          <span className="text-lg text-black">{quantity}</span>
          <button onClick={handleIncrement} className={buttonStyle}>
            +
          </button>
        </div>
        <p className="text-lg font-semibold text-black">
          ₹ {(899 * quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="text-black hover:text-red-500 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartPhotos;
