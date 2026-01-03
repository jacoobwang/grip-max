"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0 opacity-60">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
                {/* In production, this would be a real <video> tag */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center animate-slow-zoom" />
            </div>

            <div className="container relative z-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Trending on TikTok</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 mix-blend-overlay">
                        GRIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">EVOLVED</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Transform your driving experience with the steering wheel cover that took the internet by storm. Premium feel, infinite style.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto font-bold shadow-[0_0_20px_rgba(243,156,18,0.3)] hover:shadow-[0_0_30px_rgba(243,156,18,0.5)] transition-all">
                            Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-black/40 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white">
                            <Play className="mr-2 w-5 h-5 fill-white" /> Watch Video
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
