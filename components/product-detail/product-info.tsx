"use client";

import * as React from "react";
import { Star, Check, AlertCircle, ShoppingCart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProductVariant {
    id: string;
    name: string;
    color: string;
    image: string;
}

const VARIANTS: ProductVariant[] = [
    { id: "black", name: "Midnight Black", color: "#18181b", image: "" },
    { id: "red", name: "Racing Red", color: "#ef4444", image: "" },
    { id: "blue", name: "Pacific Blue", color: "#3b82f6", image: "" },
    { id: "carbon", name: "Carbon Fiber", color: "#404040", image: "" },
];

export function ProductInfo() {
    const [selectedVariant, setSelectedVariant] = React.useState(VARIANTS[0]);
    const [carModel, setCarModel] = React.useState("");
    const [isMatched, setIsMatched] = React.useState<boolean | null>(null);

    const checkFit = () => {
        if (carModel.length > 3) {
            setIsMatched(true);
        } else {
            setIsMatched(false);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase italic">
                    Alcantara <span className="text-brand-primary">Series-X</span>
                </h1>
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex text-brand-primary">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                    <span className="text-gray-400 font-medium">1,240 REVIEWS</span>
                </div>
                <p className="text-2xl font-bold text-white">$49.99</p>
            </div>

            {/* Model Matcher */}
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
                <h3 className="text-sm font-bold text-white mb-2 uppercase">Check Vehicle Fit</h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter your car model (e.g. BMW 3 Series)"
                        className="flex-1 bg-black border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-primary"
                        value={carModel}
                        onChange={(e) => {
                            setCarModel(e.target.value);
                            setIsMatched(null);
                        }}
                    />
                    <Button onClick={checkFit} variant="secondary">Check</Button>
                </div>
                {isMatched === true && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="flex items-center gap-2 mt-2 text-green-500 text-sm font-medium"
                    >
                        <Check className="w-4 h-4" /> Fits your {carModel} perfectly!
                    </motion.div>
                )}
            </div>

            {/* Color Selection */}
            <div>
                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Select Color: <span className="text-white">{selectedVariant.name}</span></h3>
                <div className="flex flex-wrap gap-3">
                    {VARIANTS.map((variant) => (
                        <button
                            key={variant.id}
                            onClick={() => setSelectedVariant(variant)}
                            className={cn(
                                "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                                selectedVariant.id === variant.id ? "border-brand-primary scale-110" : "border-transparent hover:scale-105"
                            )}
                            style={{ backgroundColor: variant.color }}
                        >
                            {selectedVariant.id === variant.id && <Check className="w-6 h-6 text-white drop-shadow-md" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full text-lg font-bold h-14 rounded-full shadow-[0_0_20px_rgba(243,156,18,0.2)] hover:shadow-[0_0_30px_rgba(243,156,18,0.4)]">
                    <ShoppingCart className="mr-2 w-5 h-5" /> Add to Cart - $49.99
                </Button>
                <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                    <Truck className="w-3 h-3" /> Free Express Shipping on orders over $50
                </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-4 border-t border-white/10">
                {[
                    "Premium Italian Alcantara Suede",
                    "Anti-slip Inner Rubber Ring",
                    "Universal Fit 14.5-15 inches",
                    "Sweat-absorbing & Breathable"
                ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}
