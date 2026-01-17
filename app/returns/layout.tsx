import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Returns & Exchange Policy - 30-Day Guarantee",
    description:
        "Grip Max offers a 30-day satisfaction guarantee. Easy returns and exchanges on all steering wheel covers. Free return shipping. Read our complete return policy.",
    keywords: [
        "grip max returns",
        "return policy",
        "exchange policy",
        "30-day guarantee",
        "customer service",
    ],
    openGraph: {
        title: "Grip Max Returns & Exchange Policy",
        description:
            "30-day satisfaction guarantee with easy returns and exchanges. Free return shipping on all orders.",
        type: "website",
    },
};

export default function ReturnsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
