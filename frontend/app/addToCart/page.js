"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Cartproducts from "./cartproducts";
import OtherProducts from "./otherProducts";
import Product from "../featuredProducts/page";

const recommendations = [
  {
    id: 101,
    image: "/cableTray.png",
    title: "Aluminum Tray",
    price: 799,
    inStock: true,
  },
  {
    id: 102,
    image: "/cableTray.png",
    title: "PVC Tray",
    price: 599,
    inStock: true,
  },
  {
    id: 103,
    image: "/cableTray.png",
    title: "Heavy Duty",
    price: 1499,
    inStock: false,
  },
];

export default function CartPage() {
  const { cart, getCartTotal, getCartItemsCount } = useCart();

  // Coerce to number & guard
  const rawSubtotal = Number(getCartTotal()) || 0;
  const subtotal = rawSubtotal;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-white items-center justify-center text-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Your cart is empty
          </h2>
          <Link href="/featuredProducts">
            <button className="bg-[#004F57] text-white px-6 py-2 rounded hover:bg-[#003f45]">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white p-2 items-center text-black">
      {/* Top summary bar */}
      <div className="flex flex-row justify-between items-center bg-white h-[110px] w-[1120px] border-2 rounded-2xl px-6 text-black">
        <div className="flex-1 flex justify-start items-center">
          <Link href="/products">
            <button className="cursor-pointer flex items-center text-sm font-medium text-black hover:underline">
              <Image
                src="/svg.png"
                alt="Back arrow"
                width={18}
                height={18}
                className="object-contain"
              />
              <span className="pl-2 text-black">Continue Shopping</span>
            </button>
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h1 className="italic text-3xl font-semibold text-black">
            Shopping Cart
          </h1>
          <span className="text-xs text-black tracking-wide">
            {getCartItemsCount()} items
          </span>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <span className="font-bold text-xl text-black">
            ₹{total.toFixed(2)}
          </span>
          <span className="text-xs text-black uppercase tracking-wide">
            Total (Incl. Tax)
          </span>
        </div>
      </div>

      {/* Cart products */}
      <div className="w-[1120px] text-black">
        <Cartproducts
          cartItems={cart}
          subtotal={subtotal}
          tax={tax}
          total={total}
        />
      </div>

      {/* Other products */}
      <div className="w-[1120px] mt-10 text-black">
        <p className="text-4xl mb-6 text-black">Other Products</p>
        <div className="flex flex-row space-x-7">
          {recommendations.map((p) => (
            <OtherProducts key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
