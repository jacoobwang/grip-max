import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Born on TikTok",
    description:
        "The Grip Max story: From a viral TikTok video to 10,000+ customers worldwide. Learn how we built the premium steering wheel cover that revolutionized car accessories.",
    keywords: [
        "about grip max",
        "steering wheel cover story",
        "tiktok viral product",
        "car accessory brand",
        "community driven brand",
    ],
    openGraph: {
        title: "About Grip Max - Born on TikTok",
        description:
            "We didn't start in a boardroom. We started with a viral video and a community of car enthusiasts who demanded better.",
        type: "website",
    },
};
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
                    alt="Sports car driving at night with dashboard lights illuminated"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10 text-center max-w-3xl px-4">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter">
                        Born on <span className="text-brand-primary">TikTok</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        We didn't start in a boardroom. We started with a viral video, a few prototypes, and a community of car enthusiasts who demanded better.
                    </p>
                </div>
            </section>

            {/* Story Sections */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-1 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-brand-primary">The Problem</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Most steering wheel covers are bulky, ugly, and slip around. We saw thousands of comments on social media complaining about the same thing. Why wasn't there a cover that actually looked like it belonged in a modern car?
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            So we went to work. We tested hundreds of materials, from carbon fiber to Italian Alcantara, focusing on one thing: <strong className="text-white">The Grip.</strong>
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden order-2 md:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
                            alt="Community of car enthusiasts celebrating together"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <p className="font-bold text-2xl">10,000+ Customers</p>
                            <p className="text-brand-primary">Worldwide</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-brand-primary">Community Driven</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Every feature you see on Grip Max comes from user feedback. The slim profile? You asked for it. The sweat-wicking lining? That was a suggestion from a comment with 5,000 likes.
                        </p>
                        <Link href="https://vt.tiktok.com/ZTheu1sdy/" target="_blank">
                            <Button size="lg" className="rounded-full cursor-pointer">Join the Movement</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
