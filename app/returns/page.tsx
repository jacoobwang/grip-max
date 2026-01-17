"use client";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { motion } from "framer-motion";
import { Metadata } from "next";

// Note: Metadata export moved to a separate server component wrapper would be ideal
// For now, metadata should be added in a parent layout or server component

export default function ReturnsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-8">Returns & Exchange</h1>

                    <div className="prose prose-invert max-w-none text-gray-300 space-y-8">
                        <section className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                            <h2 className="text-2xl font-bold text-white mb-4">30-Day Satisfaction Guarantee</h2>
                            <p className="mb-4">
                                At Grip Max, we stand behind the quality of our products. If you are not completely satisfied with your purchase,
                                you may return or exchange it within <span className="text-brand-primary font-bold">30 days</span> of delivery.
                            </p>
                            <p>
                                To be eligible for a return, your item must be in the same condition that you received it, unworn or unused,
                                with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-white mb-3">How to Start a Return</h3>
                            <p className="mb-4">
                                To start a return, you can contact us at <a href="mailto:support@gripmax.com" className="text-brand-primary hover:underline">support@gripmax.com</a>.
                                Please include your order number and reason for return.
                            </p>
                            <p>
                                If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package.
                                Items sent back to us without first requesting a return will not be accepted.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-white mb-3">Damages and Issues</h3>
                            <p>
                                Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item,
                                so that we can evaluate the issue and make it right.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-white mb-3">Exchanges</h3>
                            <p>
                                The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted,
                                make a separate purchase for the new item.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-white mb-3">Refunds</h3>
                            <p>
                                We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not.
                                If approved, you’ll be automatically refunded on your original payment method within 10 business days.
                                Please remember it can take some time for your bank or credit card company to process and post the refund too.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
