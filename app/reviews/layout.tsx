import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Reviews - 4.9 Stars",
    description:
        "Read authentic customer reviews of Grip Max steering wheel covers. See why over 1,250 customers rate us 4.9 out of 5 stars. Real testimonials from verified buyers.",
    keywords: [
        "grip max reviews",
        "steering wheel cover reviews",
        "customer testimonials",
        "verified buyers",
        "product ratings",
    ],
    openGraph: {
        title: "Grip Max Customer Reviews - 4.9 Stars",
        description:
            "See why over 1,250 customers rate Grip Max 4.9 out of 5 stars. Authentic reviews from verified buyers.",
        type: "website",
    },
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
