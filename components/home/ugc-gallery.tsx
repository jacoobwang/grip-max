"use client";

import { TikTokCard } from "@/components/ui/tiktok-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VIDEOS = [
    {
        id: "1",
        thumbnailUrl: "https://fastly.jsdelivr.net/gh/bucketio/img15@main/2026/01/03/1767451874930-fa90f350-24fe-418c-b355-624ec12a10e4.png",
        views: "122K",
        author: "user708131458558",
        description: "The grip on this is insane! 🚗💨 #carsoftiktok #gripmax",
        videoUrl: "https://www.tiktok.com/@user708131458558/video/7582134869812120863"
    },
    {
        id: "2",
        thumbnailUrl: "https://fastly.jsdelivr.net/gh/bucketio/img1@main/2026/01/03/1767452022911-db7db3d1-46c5-495c-8779-6bc88e046ce1.png",
        views: "856K",
        author: "user708131458xxx",
        description: "Best storage hack for your steering wheel? Maybe not, but it looks cool! 😍",
        videoUrl: "https://www.tiktok.com/@user708131458558/video/7583171424769068319"
    },
    {
        id: "3",
        thumbnailUrl: "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oMQYk2BphNLORFeehuTOeZsAgxIyseqQdA4sGc~tplv-tiktokx-origin.image?dr=9636&x-expires=1768305600&x-signature=viQ1X2pKoEfGUvfblIv/c/dCvo4=&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
        views: "880K",
        author: "pukhtana874",
        description: "Installation took literally 30 seconds. Look at that finish. 🔥",
        videoUrl: "https://www.tiktok.com/@pukhtana874/video/7581310233646091575"
    },
    {
        id: "4",
        thumbnailUrl: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/o8VD2ATAEBeAQTFApowAzdrf2q2RCdEIFIE5FO~tplv-tiktokx-origin.image?dr=9636&x-expires=1768305600&x-signature=pjUXHDhSlbNoyqqfNbbyU+FRj9M=&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
        views: "50K",
        author: "user708131458558",
        description: "You Just Installed the EASIEST Steering Wheel Cover EVER! & (White Leather Edition) 🌃",
        videoUrl: "https://www.tiktok.com/@user708131458558/video/7575822555232079135"
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
