import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-4">
                            GRIP<span className="text-brand-primary">MAX</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevate your driving experience with premium, TikTok-approved steering wheel covers. Designed for style, comfort, and control.
                        </p>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="https://vt.tiktok.com/ZTheu1sdy/" className="hover:text-brand-primary transition-colors">All Products</Link></li>
                            <li><Link href="https://vt.tiktok.com/ZTheu1sdy/" className="hover:text-brand-primary transition-colors">Alcantara Series</Link></li>
                            <li><Link href="https://vt.tiktok.com/ZTheu1sdy/" className="hover:text-brand-primary transition-colors">Premium Leather</Link></li>
                            <li><Link href="https://vt.tiktok.com/ZTheu1sdy/" className="hover:text-brand-primary transition-colors">Carbon Fiber</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {/* <li><Link href="/track-order" className="hover:text-brand-primary transition-colors">Track Order</Link></li> */}
                            {/* <li><Link href="/shipping" className="hover:text-brand-primary transition-colors">Contact US</Link></li> */}
                            <li><Link href="/returns" className="hover:text-brand-primary transition-colors">Returns & Exchange</Link></li>
                            {/* <li><Link href="/faq" className="hover:text-brand-primary transition-colors">FAQs</Link></li> */}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
                        <p className="text-gray-400 text-sm mb-4">Join our community for exclusive drops and TikTok trends.</p>
                        <div className="flex gap-4">
                            {/* <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link> */}
                            <Link href="https://vt.tiktok.com/ZTheu1sdy/" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="none"
                                    className="w-5 h-5"
                                >
                                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                                </svg>
                            </Link>
                            {/* <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                                <Youtube className="w-5 h-5" />
                            </Link> */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Grip Max. All rights reserved.</p>
                    {/* <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
