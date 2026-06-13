"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const Cartproducts = ({ cartItems, subtotal, tax, total }) => {
  const { removeFromCart, updateQuantity } = useCart();

  if (!Array.isArray(cartItems) || cartItems.length === 0) return null;

  return (
    <div className="w-[1120px] mt-6 text-black">
      {cartItems.map((item) => {
        const priceNum = Number(
          typeof item.price === "string"
            ? item.price.replace(/[, ]/g, "")
            : item.price
        );
        const lineTotal =
          (Number.isFinite(priceNum) ? priceNum : 0) * item.quantity;
        return (
          <div key={item.id} className="flex items-center border-b py-6">
            <Image
              src={item.image}
              alt={item.title || "Product"}
              width={90}
              height={90}
              className="object-contain"
            />
            <div className="ml-4 flex-1">
              <p className="font-semibold text-black">
                {item.title || "No title"}
              </p>
              <p className="text-sm text-black">
                Price:{" "}
                {Number.isFinite(priceNum)
                  ? `₹${priceNum.toFixed(2)}`
                  : "Unavailable"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="px-2 py-1 border rounded text-black"
              >
                -
              </button>
              <span className="px-2 text-black">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 border rounded text-black"
              >
                +
              </button>
            </div>
            <p className="ml-6 w-28 text-right font-semibold text-black">
              ₹{lineTotal.toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        );
      })}

      <div className="mt-6 border-t pt-4 space-y-1 text-black">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cartproducts;
