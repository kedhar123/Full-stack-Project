"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { calculateTray } from "../../lib/api";
import { useCart } from "../../context/CartContext";

function normalizeDecimal(val) {
    let s = String(val ?? "");
    s = s.replace(/[^0-9.]/g, "");
    const firstDot = s.indexOf(".");
    if (firstDot !== -1) {
        s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, "");
    }
    s = s.replace(/^0+(?=\d)/, "");
    return s;
}

export default function ClientProductDetail({ serverProduct }) {
    const { addToCart } = useCart();
    const [type] = useState(serverProduct.type);
    const [width, setWidth] = useState("150");
    const [height, setHeight] = useState("50");
    const [thickness, setThickness] = useState("1.2");
    const [price, setPrice] = useState(Number(serverProduct.price));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const widthNum = parseFloat(width);
    const heightNum = parseFloat(height);
    const thicknessNum = parseFloat(thickness);
    const canCalc = useMemo(
        () => width !== "" && height !== "" && thickness !== "" && widthNum > 0 && heightNum > 0 && thicknessNum > 0,
        [width, height, thickness, widthNum, heightNum, thicknessNum]
    );

    const onCalculate = async () => {
        if (!canCalc) return;
        try {
            setLoading(true);
            setError("");
            const result = await calculateTray({ width: widthNum, height: heightNum, thickness: thicknessNum, type });
            setPrice(Number(result.finalRate));
        } catch (e) {
            setError("Failed to calculate. Check inputs.");
        } finally {
            setLoading(false);
        }
    };

    const onAddToCart = () => {
        addToCart({
            id: `featured-${serverProduct.id}-${widthNum}-${heightNum}-${thicknessNum}`,
            title: `${serverProduct.title} (${widthNum}x${heightNum}x${thicknessNum})`,
            price: Number(price),
            image: "/download.png",
        });
    };

    return (
        <div className="grid grid-cols-1 bg-white min-h-screen">
            <div className="flex items-start justify-center w-full max-w-4xl mx-auto p-4 gap-10">
                <Image
                    src={'/download.png'}
                    alt={serverProduct.title}
                    width={448}
                    height={448}
                    className="object-contain rounded-lg "
                />
                <div className="ml-8 flex flex-col space-y-4 w-full max-w-md">
                    <p className="text-black font-bold text-5xl">{serverProduct.title}</p>
                    <div className="grid grid-cols-3 gap-3">
                        <label className="flex flex-col text-black text-sm">
                            Width (mm)
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={width}
                                onChange={(e) => setWidth(normalizeDecimal(e.target.value).replace(/\..*/, ""))}
                                placeholder="e.g. 150"
                                className="border rounded p-2"
                            />
                        </label>
                        <label className="flex flex-col text-black text-sm">
                            Height (mm)
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={height}
                                onChange={(e) => setHeight(normalizeDecimal(e.target.value).replace(/\..*/, ""))}
                                placeholder="e.g. 50"
                                className="border rounded p-2"
                            />
                        </label>
                        <label className="flex flex-col text-black text-sm">
                            Thickness (mm)
                            <input
                                type="text"
                                inputMode="decimal"
                                value={thickness}
                                onChange={(e) => setThickness(normalizeDecimal(e.target.value))}
                                placeholder="e.g. 1.2"
                                className="border rounded p-2"
                            />
                        </label>
                    </div>

                    <button
                        onClick={onCalculate}
                        disabled={!canCalc || loading}
                        className="px-6 py-3 rounded-lg bg-[#004F57] text-white font-medium hover:bg-[#006570] transition-colors disabled:opacity-50"
                    >
                        {loading ? "Calculating..." : "Calculate"}
                    </button>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <p className="text-black font-bold text-2xl">₹{Number(price).toFixed(2)}</p>

                    <button
                        onClick={onAddToCart}
                        className="bg-[#004F57] text-white py-2 px-4 mt-2 rounded cursor-pointer"
                    >
                        Add to cart
                    </button>
                    <Link className="text-sm text-[#004F57] underline" href="/addToCart">
                        Go to cart
                    </Link>
                </div>
            </div>
        </div>
    );
}
