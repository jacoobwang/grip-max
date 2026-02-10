import { Metadata } from 'next';

export const BASE_URL = 'https://www.gripmax.cc'; // Update with your actual domain

// Organization JSON-LD Schema
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Grip Max',
        description: 'Premium steering wheel covers - TikTok\'s favorite car accessory brand',
        url: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
        sameAs: [
            'https://www.tiktok.com/@gripmax', // Update with actual TikTok handle
            'https://www.instagram.com/gripmax', // Update with actual Instagram handle
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-XXX-XXX-XXXX', // Update with actual phone number
            contactType: 'Customer Service',
            email: 'support@gripmax.cc',
        },
    };
}

// Product JSON-LD Schema
export function getProductSchema({
    id,
    name,
    description,
    image,
    price,
    currency = 'USD',
    availability = 'InStock',
    ratingValue = 4.8,
    reviewCount = 1250,
}: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    currency?: string;
    availability?: string;
    ratingValue?: number;
    reviewCount?: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': `${BASE_URL}/products/${id}`,
        name,
        description,
        image,
        brand: {
            '@type': 'Brand',
            name: 'Grip Max',
        },
        offers: {
            '@type': 'Offer',
            url: `${BASE_URL}/products/${id}`,
            priceCurrency: currency,
            price,
            availability: `https://schema.org/${availability}`,
            seller: {
                '@type': 'Organization',
                name: 'Grip Max',
            },
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue,
            reviewCount,
            bestRating: 5,
            worstRating: 1,
        },
    };
}

// Aggregate Rating JSON-LD Schema
export function getAggregateRatingSchema({
    ratingValue = 4.9,
    reviewCount = 1250,
    bestRating = 5,
    worstRating = 1,
}: {
    ratingValue?: number;
    reviewCount?: number;
    bestRating?: number;
    worstRating?: number;
} = {}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        itemReviewed: {
            '@type': 'Product',
            name: 'Grip Max Steering Wheel Covers',
            brand: {
                '@type': 'Brand',
                name: 'Grip Max',
            },
        },
        ratingValue,
        reviewCount,
        bestRating,
        worstRating,
    };
}

// BreadcrumbList JSON-LD Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.url}`,
        })),
    };
}

// WebSite JSON-LD Schema
export function getWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Grip Max',
        url: BASE_URL,
        description: 'Premium steering wheel covers - TikTok\'s favorite car accessory brand',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

// Article JSON-LD Schema for blog posts
export function getArticleSchema({
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    authorName = 'Grip Max',
}: {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Grip Max',
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };
}

// FAQ JSON-LD Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// Helper to generate consistent metadata
export function generateMetadata({
    title,
    description,
    path = '',
    image = '/logo.png',
    keywords = [],
    type = 'website',
}: {
    title: string;
    description: string;
    path?: string;
    image?: string;
    keywords?: string[];
    type?: 'website' | 'article';
}): Metadata {
    const url = `${BASE_URL}${path}`;
    const fullTitle = path ? `${title} | Grip Max` : title;

    return {
        title: fullTitle,
        description,
        keywords: [
            'steering wheel cover',
            'car accessories',
            'premium steering wheel',
            'alcantara steering wheel',
            'carbon fiber steering wheel',
            'TikTok car accessories',
            ...keywords,
        ],
        authors: [{ name: 'Grip Max' }],
        creator: 'Grip Max',
        publisher: 'Grip Max',
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: 'Grip Max',
            images: [
                {
                    url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type,
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
            creator: '@gripmax', // Update with actual Twitter handle
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            // Add verification codes when available
            // google: 'your-google-verification-code',
            // yandex: 'your-yandex-verification-code',
            // bing: 'your-bing-verification-code',
        },
    };
}
