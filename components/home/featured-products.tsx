"use client";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
    {
        id: "carbon-fiber-red",
        name: "Leather 5D Universal Steering Wheel Cover with Centering Mark Quick Install Non Slip Breathable Ultra Thin Fit for All Seasons Automotive Accessory White Premium Quality Wheel Cover for GMC and Chevy Anti-Slip Wheel Cover non-slip protector breathable ult",
        price: 17.88,
        originalPrice: 49.99,
        rating: 4.8,
        reviews: 1298,
        image: "https://fastly.jsdelivr.net/gh/bucketio/img3@main/2026/01/03/1767448236424-42cef92c-82bb-4302-a40d-5feb20ef6f05.jpeg",
        badge: "Best Seller",
        link: "https://www.tiktok.com/shop/pdp/leather-5d-universal-steering-wheel-cover-quick-install/1732063144486080617?source=ecommerce_store&enter_method=feed_list_store_list_product&first_entrance=unknown&first_entrance_tt_scene=third_party",
    },
    {
        id: "alcantara-black",
        name: "Land Diamond Bling Car Steering Wheel Cover with Crystal Rhinestones 3PCS Segmented Protector Universal Fit for 99% Cars Women's Christmas Gift land diamond bling car accessories girls Leather quick turn",
        price: 13.98,
        originalPrice: 39.99,
        rating: 5,
        reviews: 1040,
        image: "https://fastly.jsdelivr.net/gh/bucketio/img6@main/2026/01/07/1767799393321-ed7b11a6-8993-4018-a382-0f8ed33a39d6.png",
        badge: "Hot Sale",
        link: "https://www.tiktok.com/shop/pdp/diamond-bling-car-steering-wheel-cover-3pcs-universal-fit/1732152036195209321?source=ecommerce_store&enter_method=feed_list_store_list_product&first_entrance=unknown&first_entrance_tt_scene=third_party",
    },
    {
        id: "leather-classic",
        name: "Diamond Bling Car Steering Wheel Cover with Crystal Rhinestones 3PCS Segmented Protector Universal Fit for 99% Cars Women's Christmas Gift Elegant Car Accessories Leather quick turn",
        price: 21.95,
        rating: 4.7,
        reviews: 632,
        image: "https://fastly.jsdelivr.net/gh/bucketio/img12@main/2026/01/03/1767448808485-6ad5bf52-0e8d-4c5f-8e08-4b901bd0fe1d.jpg",
        badge: "Hot Sale",
        link: "https://www.tiktok.com/shop/pdp/diamond-bling-car-steering-wheel-cover-3pcs-universal-fit/1732152036195209321?source=ecommerce_store&enter_method=feed_list_store_list_product&first_entrance=unknown&first_entrance_tt_scene=third_party",
    },
    {
        id: "cyber-punk",
        name: "Men's 5D Laser Carbon Fiber Steering Wheel Cover 15\" Universal Fit Quick Turn Non-Slip Grip Ultra-Thin Breathable Anti-Slip Leather for All-Season Use quick turn",
        price: 21.99,
        rating: 5.0,
        reviews: 215,
        image: "https://fastly.jsdelivr.net/gh/bucketio/img16@main/2026/01/03/1767448986509-3cc89f4e-5c0f-4a1c-a1c6-98c3823f4059.png",
        badge: "Hot Sale",
        link: "https://www.tiktok.com/shop/pdp/mens-5d-laser-carbon-fiber-steering-wheel-cover-15-universal-fit/1732176377774772329?source=ecommerce_store&enter_method=feed_list_store_list_product&first_entrance=unknown&first_entrance_tt_scene=third_party",
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic">
                            TikTok <span className="text-brand-primary">Favorites</span>
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            The steering wheel covers everyone is talking about. Upgrade your interior instantly.
                        </p>
                    </div>
                    <Button variant="link" className="text-white hover:text-brand-primary">
                        View All Collection <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
