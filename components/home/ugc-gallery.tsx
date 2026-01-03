"use client";

import { TikTokCard } from "@/components/ui/tiktok-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VIDEOS = [
    {
        id: "1",
        thumbnailUrl: "https://fastly.jsdelivr.net/gh/bucketio/img15@main/2026/01/03/1767451874930-fa90f350-24fe-418c-b355-624ec12a10e4.png",
        views: "1.2M",
        author: "driftking_99",
        description: "The grip on this is insane! 🚗💨 #carsoftiktok #gripmax",
        videoUrl: "https://www.tiktok.com/@user708131458558/video/7582134869812120863?is_from_webapp=1&sender_device=pc&web_id=7591125322473604663"
    },
    {
        id: "2",
        thumbnailUrl: "https://fastly.jsdelivr.net/gh/bucketio/img1@main/2026/01/03/1767452022911-db7db3d1-46c5-495c-8779-6bc88e046ce1.png",
        views: "856K",
        author: "sarah_drives",
        description: "Best storage hack for your steering wheel? Maybe not, but it looks cool! 😍",
        videoUrl: "https://www.tiktok.com/@user708131458558/video/7583171424769068319"
    },
    {
        id: "3",
        thumbnailUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600&h=1066",
        views: "2.5M",
        author: "carbon_mike",
        description: "Installation took literally 30 seconds. Look at that finish. 🔥"
    },
    {
        id: "4",
        thumbnailUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600&h=1066",
        views: "500K",
        author: "night_rider",
        description: "Night drive vibes with the Alcantara cover. 🌃"
    },
];

export function UGCGallery() {
    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold mb-4 uppercase tracking-widest">
                        Community
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">#GripMax</span> Squad
                    </h2>
                    <Link href="https://www.tiktok.com/@user708131458558" target="_blank">
                        <Button variant="tiktok" size="lg" className="rounded-full cursor-pointer">
                            Follow us on TikTok
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {VIDEOS.map((video) => (
                        <TikTokCard key={video.id} {...video} />
                    ))}
                </div>
            </div>
        </section>
    );
}
