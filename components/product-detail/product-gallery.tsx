"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = React.useState(0);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                    >
                        <img
                            src={images[selectedImage]}
                            alt="Product Image"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* TikTok Style Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="w-3 h-3"
                    >
                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                    </svg>
                    As seen on TikTok
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={cn(
                            "relative aspect-square rounded-lg overflow-hidden border transition-all",
                            selectedImage === index
                                ? "border-brand-primary ring-2 ring-brand-primary/50"
                                : "border-white/10 hover:border-white/30"
                        )}
                        onClick={() => setSelectedImage(index)}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
