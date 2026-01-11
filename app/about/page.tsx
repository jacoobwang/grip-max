import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
                    alt="Driving at night"
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
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-brand-primary">The Problem</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Most steering wheel covers are bulky, ugly, and slip around. We saw thousands of comments on social media complaining about the same thing. Why wasn't there a cover that actually looked like it belonged in a modern car?
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            So we went to work. We tested hundreds of materials, from carbon fiber to Italian Alcantara, focusing on one thing: <strong className="text-white">The Grip.</strong>
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 text-gray-400 bg-zinc-900 flex items-center justify-center">
                        {/* Placeholder for factory/design video */}
                        <span className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            Watch our design process
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden order-2 md:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
                            alt="Community"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <p className="font-bold text-2xl">100,000+ Customers</p>
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
