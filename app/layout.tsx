import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Grip Max | Premium Steering Wheel Covers - TikTok's Shop",
    template: "%s | Grip Max",
  },
  description:
    "Transform your drive with Grip Max - the premium steering wheel cover that went viral on TikTok. Alcantara, carbon fiber, and premium materials. Perfect fit, infinite style.",
  keywords: [
    "steering wheel cover",
    "premium steering wheel cover",
    "alcantara steering wheel",
    "carbon fiber steering wheel",
    "car accessories",
    "TikTok car accessories",
    "grip max",
    "steering wheel grip",
    "luxury car accessories",
  ],
  authors: [{ name: "Grip Max" }],
  creator: "Grip Max",
  publisher: "Grip Max",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.gripmax.cc"), // Update with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grip Max | Premium Steering Wheel Covers - TikTok's Favorite",
    description:
      "Transform your drive with Grip Max - the premium steering wheel cover that went viral on TikTok. Alcantara, carbon fiber, and premium materials.",
    url: "https://www.gripmax.cc",
    siteName: "Grip Max Steering Wheel Cover",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Grip Max - Premium Steering Wheel Covers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grip Max | Premium Steering Wheel Covers",
    description:
      "Transform your drive with TikTok's favorite steering wheel cover. Premium materials, perfect fit.",
    images: ["/logo.png"],
    creator: "@gripmax", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grip Max",
    description:
      "Premium steering wheel covers - TikTok's favorite car accessory brand",
    url: "https://www.gripmax.cc",
    logo: "https://www.gripmax.cc/logo.png",
    sameAs: [
      "https://www.tiktok.com/@gripmax",
      "https://www.instagram.com/gripmax",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@gripmax.cc",
    },
  };

  // WebSite JSON-LD Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grip Max",
    url: "https://www.gripmax.cc",
    description:
      "Premium steering wheel covers - TikTok's favorite car accessory brand",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.gripmax.cc/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
