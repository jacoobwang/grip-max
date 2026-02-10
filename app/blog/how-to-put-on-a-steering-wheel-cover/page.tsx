import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ShareSection } from "@/components/blog/share-section";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getArticleSchema } from "@/lib/seo-utils";

export const metadata: Metadata = {
  title: "How to Put on a Steering Wheel Cover | Grip Max",
  description:
    "Learn how to install a steering wheel cover with our step-by-step guide. Get a perfect, snug fit every time with these professional tips and techniques.",
  keywords: [
    "steering wheel cover installation",
    "how to install steering wheel cover",
    "steering wheel cover guide",
    "car accessories installation",
  ],
  openGraph: {
    type: "article",
    publishedTime: "2026-02-05T00:00:00Z",
  },
};

export default function BlogPostPage() {
  const articleSchema = getArticleSchema({
    title: "How to Put on a Steering Wheel Cover",
    description:
      "Learn how to install a steering wheel cover with our step-by-step guide. Get a perfect, snug fit every time with these professional tips and techniques.",
    url: "https://www.gripmax.cc/blog/how-to-put-on-a-steering-wheel-cover",
    image: "/logo.png",
    datePublished: "2026-02-05T00:00:00Z",
    dateModified: "2026-02-05T00:00:00Z",
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <article className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm font-medium rounded-full">
                Installation Guide
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How to Put on a Steering Wheel Cover
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>February 5, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-xl text-gray-300 mb-8">
              Installing a steering wheel cover might seem simple, but doing it correctly ensures a 
              tight, secure fit that won&apos;t slip or bunch up while driving. Follow this comprehensive 
              guide for professional results.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Why a Proper Installation Matters</h2>
            <p className="text-gray-300 mb-6">
              A well-installed steering wheel cover does more than just look good—it improves your 
              grip, protects your hands from extreme temperatures, and prevents wear on your 
              steering wheel. A loose cover can be dangerous, affecting your control and 
              potentially slipping during critical moments.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What You&apos;ll Need</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Your Grip Max steering wheel cover</li>
              <li>A clean microfiber cloth</li>
              <li>Rubbing alcohol or steering wheel cleaner (optional)</li>
              <li>Hair dryer or heat gun (optional, for tighter covers)</li>
              <li>Patience and a few minutes of your time</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Step-by-Step Installation</h2>

            {/* TikTok Video Embed */}
            <div className="my-8 rounded-xl overflow-hidden border border-white/10">
              <div className="relative aspect-[9/16] max-h-[600px] mx-auto">
                <iframe
                  src="https://www.tiktok.com/player/v1/7582134869812120863?music_info=1&description=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="TikTok installation video by @user708131458558"
                ></iframe>
              </div>
              <p className="text-center text-sm text-gray-400 mt-3 mb-4">
                Watch this quick demo from our community on TikTok
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 1: Prepare Your Steering Wheel</h3>
            <p className="text-gray-300 mb-6">
              Start with a clean steering wheel. Use a microfiber cloth with rubbing alcohol or 
              steering wheel cleaner to remove any dirt, oils, or residue. This ensures maximum 
              adhesion and prevents the cover from slipping. Let the wheel dry completely before 
              proceeding.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 2: Position the Cover</h3>
            <p className="text-gray-300 mb-6">
              Identify the top of your steering wheel cover—it usually has a slightly different 
              shape or marking. Align this with the top center of your steering wheel. Most 
              covers have a thicker section at the bottom that corresponds to the wheel&apos;s 
              natural grip areas.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 3: Start from the Top</h3>
            <p className="text-gray-300 mb-6">
              Begin stretching the cover over the top of the steering wheel. This is the narrowest 
              part and easiest to get started. Work the cover down equally on both sides, pulling 
              gently but firmly. Don&apos;t force it—if it&apos;s too tight, warm the cover with a hair dryer 
              on low heat for 30 seconds to make the material more pliable.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 4: Work Your Way Down</h3>
            <p className="text-gray-300 mb-6">
              Continue stretching the cover down toward the bottom of the wheel. Use both hands 
              and work in small sections, alternating sides to maintain even tension. For Grip Max 
              covers with ergonomic grips, make sure these align with where your hands naturally rest 
              (typically at 10 and 2 o&apos;clock positions).
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 5: Secure the Bottom</h3>
            <p className="text-gray-300 mb-6">
              The bottom section is usually the tightest fit. If you&apos;re struggling, try warming 
              the cover slightly with a hair dryer. This expands the material temporarily, making 
              it easier to stretch over the wheel. Once in place, the cover will contract as it 
              cools, creating a snug fit.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 6: Adjust and Smooth</h3>
            <p className="text-gray-300 mb-6">
              Once the cover is fully installed, take a moment to smooth out any wrinkles or bunches. 
              Rotate the cover slightly if needed to ensure symmetrical placement. The cover should 
              feel tight with no loose areas or gaps.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Pro Tips for Best Results</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>
                <strong>Warm it up:</strong> Cold covers are harder to install. If it&apos;s winter, 
                warm the cover indoors before installation.
              </li>
              <li>
                <strong>Take breaks:</strong> If your hands get tired, take a short break. Forcing 
                it can damage the cover.
              </li>
              <li>
                <strong>Check fitment:</strong> Ensure you have the right size cover for your 
                steering wheel diameter (usually 14.5-15.5 inches for standard wheels).
              </li>
              <li>
                <strong>Clean regularly:</strong> Remove and clean your cover monthly to maintain 
                grip and appearance.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Troubleshooting Common Issues</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Cover keeps slipping</h3>
            <p className="text-gray-300 mb-6">
              If your cover slides around, it may be too large or the wheel wasn&apos;t clean enough. 
              Try removing it, cleaning the wheel thoroughly, and reinstalling. You can also use 
              double-sided tape at the 12, 6, and 9 o&apos;clock positions for extra security.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Can&apos;t get it over the wheel</h3>
            <p className="text-gray-300 mb-6">
              This usually means the cover is too small or needs warming. Try heating it with a 
              hair dryer for 60 seconds, then quickly install while it&apos;s warm and flexible. 
              Grip Max covers are designed to fit standard steering wheels—check your wheel 
              measurements if you continue to have issues.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Wrinkles or bunching</h3>
            <p className="text-gray-300 mb-6">
              Small wrinkles often work themselves out over time as the cover stretches naturally. 
              For immediate smoothing, try rotating the cover slightly or using a hair dryer on 
              low heat while smoothing with your hands.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Maintaining Your Steering Wheel Cover</h2>
            <p className="text-gray-300 mb-6">
              To keep your Grip Max cover looking and feeling great:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Wipe down weekly with a damp cloth</li>
              <li>Deep clean monthly with mild soap and water</li>
              <li>Avoid harsh chemicals that can degrade the material</li>
              <li>Inspect regularly for wear and replace when needed</li>
              <li>Remove during extreme heat to prevent material breakdown</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
            <p className="text-gray-300 mb-6">
              Installing a steering wheel cover takes just a few minutes but provides months of 
              improved comfort and style. With Grip Max premium covers, you&apos;re investing in 
              quality materials that look great and feel even better. Follow these steps, and 
              you&apos;ll enjoy a perfect fit that enhances every drive.
            </p>
            <p className="text-gray-300 mb-8">
              Have questions about installation or choosing the right cover? Reach out to our 
              team—we&apos;re here to help you get the perfect driving experience.
            </p>
          </div>

          <ShareSection />
        </div>
      </article>

      <Footer />
    </main>
  );
}
