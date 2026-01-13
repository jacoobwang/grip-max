"use client";

import Link from "next/link";

import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
    link: string;
}

export function ProductCard({
    id,
    name,
    price,
    originalPrice,
    rating,
    reviews,
    image,
    badge,
    link,
}: ProductCardProps) {
    return (
        <div className="group relative bg-[#1A1A1A] rounded-lg overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-colors">
            {/* Badge */}
            {badge && (
                <div className="absolute top-2 left-2 z-10 bg-brand-primary text-black text-xs font-bold px-2 py-1 rounded">
                    {badge}
                </div>
            )}

            {/* Image Area */}
            <Link href={link} target="_blank" className="block relative aspect-square bg-[#111]">
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 to-transparent flex justify-center">
                    <Button size="sm" className="w-full font-bold">
                        Add to Cart
                    </Button>
                </div>
            </Link>

            {/* Content */}
            <div className="p-4">
                <Link href={link} target="_blank">
                    <h3 className="text-white font-medium mb-1 truncate hover:text-brand-primary transition-colors">{name}</h3>
                </Link>

                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-brand-primary">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? "fill-current" : "text-gray-600 fill-none"}`} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">({reviews})</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-white font-bold">${price.toFixed(2)}</span>
                    {originalPrice && (
                        <span className="text-gray-500 text-sm line-through">${originalPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
