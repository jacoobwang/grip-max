import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Car Care Tips & Guides | Grip Max",
  description:
    "Discover expert tips on steering wheel covers, car care guides, and driving accessories. Learn how to install, maintain, and style your steering wheel cover.",
};

const blogPosts = [
  {
    slug: "how-to-put-on-a-steering-wheel-cover",
    title: "How to Put on a Steering Wheel Cover",
    excerpt:
      "A complete step-by-step guide to installing your steering wheel cover perfectly. Learn the best techniques for a snug, professional fit every time.",
    date: "2026-02-05",
    readTime: "5 min read",
    category: "Installation Guide",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Grip Max <span className="text-brand-primary">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert tips, installation guides, and car care advice to help you get the most out of your driving experience.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-brand-primary font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
