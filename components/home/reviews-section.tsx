"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Mock Data
const REVIEWS = [
    {
        id: 1,
        author: "Alex M.",
        rating: 5,
        text: "The Alcantara feel is absolutely premium. Completely changed the driving experience of my Model 3.",
        date: "2 days ago",
        verified: true,
    },
    {
        id: 2,
        author: "Sarah J.",
        rating: 5,
        text: "Was skeptical about the installation, but it was surprisingly easy. The fit is perfect, no slipping at all.",
        date: "1 week ago",
        verified: true,
    },
    {
        id: 3,
        author: "David K.",
        rating: 4,
        text: "Great quality material. Shipping took a bit longer than expected, but worth the wait.",
        date: "2 weeks ago",
        verified: true,
    },
    {
        id: 4,
        author: "Jessica R.",
        rating: 5,
        text: "Love the carbon fiber look! Matches my interior trim perfectly. Highly recommend.",
        date: "3 weeks ago",
        verified: true,
    },
    {
        id: 5,
        author: "Michael T.",
        rating: 5,
        text: "Provides excellent grip and keeps my hands warm in the winter. A must-have accessory.",
        date: "1 month ago",
        verified: true,
    },
    {
        id: 6,
        author: "Emily W.",
        rating: 5,
        text: "Buying another one for my husband's car. The quality consistency is outstanding.",
        date: "1 month ago",
        verified: true,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
        },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        } as const,
    },
};

export function ReviewsSection() {
    const titleText = "A trusted choice, backed by customer testimonials.";
    const titleWords = titleText.split(" ");

    return (
        <section id="reviews" className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-20 text-center max-w-4xl mx-auto relative">
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {titleWords.map((word, i) => (
                            <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* Halo Scan / Fading Underline Animation */}
                    <div className="w-full max-w-md mx-auto h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary to-transparent w-1/2"
                            animate={{
                                x: ["-100%", "200%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 0.5,
                            }}
                        />
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REVIEWS.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-brand-primary/30 transition-colors group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? "fill-brand-primary text-brand-primary" : "fill-zinc-700 text-zinc-700"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-zinc-500">{review.date}</span>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400 group-hover:bg-brand-primary group-hover:text-black transition-colors">
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{review.author}</p>
                                    {review.verified && (
                                        <p className="text-[10px] text-brand-primary uppercase tracking-wider font-bold">
                                            Verified Buyer
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
