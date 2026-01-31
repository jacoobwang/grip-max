import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ProductGallery } from "@/components/product-detail/product-gallery";
import { ProductInfo } from "@/components/product-detail/product-info";
import { UGCGallery } from "@/components/home/ugc-gallery"; // Reusing UGC gallery
import { Metadata } from "next";

// Mock images
const PRODUCT_IMAGES = [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600706432502-78a0aa87bbed?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000",
];

const PRODUCT_IDS = [
    "carbon-fiber-red",
    "alcantara-black",
    "leather-classic",
    "cyber-punk",
];

export const dynamicParams = false;

export function generateStaticParams() {
    return PRODUCT_IDS.map((id) => ({ id }));
}

// Generate dynamic metadata for product pages
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    // In a real app, you would fetch product data here
    const productId = params.id;

    return {
        title: `Premium Steering Wheel Cover - Model ${productId}`,
        description: `Shop the Grip Max Premium Steering Wheel Cover Model ${productId}. Alcantara finish, perfect fit, 4.8-star rating. Free shipping on orders over $50.`,
        keywords: [
            `steering wheel cover model ${productId}`,
            "premium steering wheel",
            "alcantara steering wheel cover",
            "luxury car accessories",
        ],
        openGraph: {
            title: `Grip Max Premium Steering Wheel Cover - Model ${productId}`,
            description: "Premium Alcantara steering wheel cover with perfect fit and 4.8-star rating.",
            type: "article", // Using 'article' as 'product' is not supported in Next.js OpenGraph
            images: [
                {
                    url: PRODUCT_IMAGES[0],
                    width: 1200,
                    height: 630,
                    alt: `Grip Max Steering Wheel Cover Model ${productId}`,
                },
            ],
        },
    };
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const productId = params.id;

    // Product JSON-LD Schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `https://gripmax.cc/products/${productId}`,
        name: `Grip Max Premium Steering Wheel Cover - Model ${productId}`,
        description: "Premium Alcantara steering wheel cover with perfect fit and superior grip.",
        image: PRODUCT_IMAGES[0],
        brand: {
            "@type": "Brand",
            name: "Grip Max",
        },
        offers: {
            "@type": "Offer",
            url: `https://gripmax.cc/products/${productId}`,
            priceCurrency: "USD",
            price: 49.99,
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Grip Max",
            },
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.8,
            reviewCount: 350,
            bestRating: 5,
            worstRating: 1,
        },
    };

    // Breadcrumb JSON-LD Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://gripmax.cc",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://gripmax.cc/products",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: `Model ${productId}`,
                item: `https://gripmax.cc/products/${productId}`,
            },
        ],
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Navbar />

            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
                    <ProductGallery images={PRODUCT_IMAGES} />
                    <ProductInfo />
                </div>
            </div>

            <div className="border-t border-white/10">
                <UGCGallery />
            </div>

            <Footer />
        </main>
    );
}
