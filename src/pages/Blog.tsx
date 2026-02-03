import Link from "@/components/NavLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const posts = [
    {
        id: 1,
        title: "Summer Essentials 2024",
        excerpt: "Discover the must-have pieces for your summer wardrobe, from lightweight linens to bold prints.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
        date: "May 15, 2024",
        category: "Trends",
    },
    {
        id: 2,
        title: "The Art of Layering",
        excerpt: "Master the transitional seasons with our expert guide to layering textures and colors.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
        date: "April 22, 2024",
        category: "Style Guide",
    },
    {
        id: 3,
        title: "Sustainable Fashion Future",
        excerpt: "How we are reducing our footprint and what you can do to build a more eco-conscious closet.",
        image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&q=80",
        date: "March 10, 2024",
        category: "Sustainability",
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
                        <article key={post.id} className="group cursor-pointer">
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
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
