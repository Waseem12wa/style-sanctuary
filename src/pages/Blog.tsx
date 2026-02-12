import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const posts = [
    {
        id: 1,
        title: "The Ultimate Guide to Building a Sustainable Wardrobe",
        excerpt: "In an era where fast fashion dominates, learn how to transition to a conscious consumer without losing your sense of style.",
        image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&q=80",
        date: "February 12, 2026",
        category: "Sustainability",
        slug: "sustainable-wardrobe-guide",
    },
    {
        id: 2,
        title: "10 Essential Items for a Minimalist Capsule Wardrobe",
        excerpt: "Explore the philosophy of the capsule wardrobe and discover the 10 essential pieces every minimalist style enthusiast needs.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
        date: "February 12, 2026",
        category: "Style Guide",
        slug: "capsule-wardrobe-essentials",
    },
    {
        id: 3,
        title: "Spring/Summer 2026: Top Fashion Trends You Need to Know",
        excerpt: "From digital lavender to sheer layering, discover the must-have fashion trends for spring and summer 2026.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
        date: "February 12, 2026",
        category: "Trends",
        slug: "fashion-trends-2026",
    },
    {
        id: 4,
        title: "The Art of Accessorizing: Elevating Your Look on a Budget",
        excerpt: "Learn how accessories are the difference between wearing clothes and styling an outfit, on any budget.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        date: "February 12, 2026",
        category: "Style Guide",
        slug: "art-of-accessorizing",
    },
    {
        id: 5,
        title: "Finding Your Personal Style: A Journey to Confidence",
        excerpt: "Discover how to define your aesthetic and unlock a new level of fashion confidence through your unique visual signature.",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
        date: "February 12, 2026",
        category: "Personal Style",
        slug: "personal-style-journey",
    },
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">The <span className="text-gradient">Journal</span></h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Style tips, industry news, and behind-the-scenes stories from the world of fashion.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="no-underline">
                            <article className="group cursor-pointer">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground hover:bg-background">
                                        {post.category}
                                    </Badge>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">{post.date}</p>
                                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-sm font-medium text-accent inline-block mt-2">Read More →</span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
