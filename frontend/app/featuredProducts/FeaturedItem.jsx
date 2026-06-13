"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function FeaturedItem({ product }) {
    const { addToCart } = useCart();

    // Map product type to image
    const getProductImage = (type) => {
        switch (type) {
            case "Raceway":
                return "/Raceway_cable_tray.png";
            case "Ladder":
                return "/ladder_tray.png";
            case "Cable Tray":
            default:
                return "/gi-perforated-cable-trays.jpg";
        }
    };

    const productImage = getProductImage(product.type);

    const handleAdd = () => {
        addToCart({
            id: `featured-${product.id}`,
            title: product.title,
            price: Number(product.price),
            image: productImage,
        });
    };

    return (
        <div className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 h-full">
            <Link href={`/featuredProducts/${product.id}`} className="mb-4">
                <Image
                    src={productImage}
                    alt={product.title}
                    width={450}
                    height={300}
                    className="object-cover w-full h-64 rounded-xl hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.title}</h2>
                <p className="text-3xl font-bold mb-4 text-[#004F57]">₹{Number(product.price).toFixed(2)}</p>
                <div className="flex flex-col gap-3 mt-auto">
                    <button
                        onClick={handleAdd}
                        className="w-full px-6 py-3 rounded-lg bg-[#004F57] text-white font-semibold hover:bg-[#006570] shadow-md hover:shadow-lg transition-all"
                    >
                        Add to Cart
                    </button>
                    <Link
                        href={`/featuredProducts/${product.id}`}
                        className="w-full text-center px-6 py-3 rounded-lg border-2 border-[#004F57] text-[#004F57] font-semibold hover:bg-[#004F57] hover:text-white transition-all"
                    >
                        Customize
                    </Link>
                </div>
            </div>
        </div>
    );
}
