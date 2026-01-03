"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";


interface TikTokCardProps {
    id: string;
    thumbnailUrl: string;
    videoUrl?: string; // Optional for now
    views: string;
    author: string;
    description: string;
}

export function TikTokCard({
    id,
    thumbnailUrl,
    views,
    author,
    description,
}: TikTokCardProps) {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <motion.div
            className="relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-900 group cursor-pointer border border-white/5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {/* Thumbnail / Video Placeholder */}
            <div className="absolute inset-0">
                <img
                    src={thumbnailUrl}
                    alt={description}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-[10px] text-black font-bold">
                        GM
                    </div>
                    <span className="text-sm font-medium drop-shadow-md">@{author}</span>
                </div>
                <p className="text-sm line-clamp-2 mb-2 text-gray-200 drop-shadow-sm">{description}</p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="none"
                        >
                            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                        </svg>
                        <span>TikTok</span>
                    </div>
                    <span>{views} views</span>
                </div>
            </div>
        </motion.div>
    );
}
