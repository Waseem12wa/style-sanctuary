import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Link from "@/components/NavLink";

export default function FashionTrends2026() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4 max-w-3xl">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Badge>Trends</Badge>
                        <span className="text-sm text-muted-foreground">February 12, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Spring/Summer 2026: Top Fashion Trends You Need to Know
                    </h1>
                    <img
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
                        alt="Fashion Trends 2026"
                        className="w-full h-[400px] object-cover rounded-xl mb-8"
                    />
                </div>

                <article className="prose prose-invert max-w-none space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                        As the seasons change, so do the silhouettes, colors, and moods of the fashion world. Fashion trends in 2026 are 
                        shaping up to be a fascinating mix of nostalgic revivals and futuristic innovations. At Style Sanctuary, we scour 
                        the runways, so you don't have to, translating high fashion into wearable spring summer fashion for your daily life.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">1. Digital Lavender and Soft Pastels</h2>
                        <p>
                            This season, dopamine dressing takes a softer turn. While neon had its moment, 2026 is all about "Digital Lavender", 
                            a hue that evokes calmness and serenity. Expect to see this color on everything from slip dresses to oversized suits. 
                            Pairing these soft pastels with neutrals is a key color trend this year.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">2. Sheer Layering</h2>
                        <p>
                            Transparency is huge this season. We aren't talking about baring it all, but rather the art of layering sheer 
                            fabrics like tulle and organza over solid pieces. It adds dimension and a touch of romance to any outfit.
                        </p>
                        <p className="mt-4 bg-accent/10 border border-accent/20 rounded p-4">
                            <strong>Style Tip:</strong> Wear a sheer blouse over a camisole, or a sheer skirt over fitted shorts for a 
                            daring yet sophisticated look.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">3. Utility Pockets and Cargo</h2>
                        <p>
                            The "Gorpcore" and Y2K aesthetic continues to evolve. Practicality is chic, with cargo pants, utility jackets, 
                            and skirts featuring functional pockets. This trend merges runway to real life seamlessly, offering convenience 
                            without sacrificing style. Look for satin or silk cargo pants to elevate the look from hiking trail to cocktail hour.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">4. Sustainable Tech Fabrics</h2>
                        <p>
                            As discussed in our previous posts, sustainability is a lifestyle. This season, we see a rise in bio-engineered 
                            fabrics. Mushroom leather and recycled ocean plastics are taking center stage. Wearing these items isn't just a 
                            style statement; it's a political one.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">5. Maxi Skirts and Dresses</h2>
                        <p>
                            Hemlines have dropped to the floor. The maxi silhouette is back, offering a long, lean line that is universally 
                            flattering. Whether it's a bohemian floral print or a sleek denim column skirt, the maxi is a must-have for 
                            spring summer fashion.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">How to Adapt These Trends</h2>
                        <p>
                            Adopting fashion trends 2026 doesn't mean replacing your entire wardrobe.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li>
                                <strong>Accessories First:</strong> If you aren't sure about a trend, try it in an accessory first. 
                                A lavender bag or sheer scarf can update your look instantly.
                            </li>
                            <li>
                                <strong>Mix High and Low:</strong> Pair a trendy cargo skirt with your classic white tee from your 
                                capsule wardrobe.
                            </li>
                            <li>
                                <strong>Stay True to You:</strong> Only adopt trends that make you feel good.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                        <p className="text-lg">
                            Fashion is a playground. This season, Style Sanctuary invites you to experiment with these trends and find 
                            what resonates with your personal narrative.
                        </p>
                    </div>
                </article>

                <div className="mt-12 pt-8 border-t border-border">
                    <Link href="/blog">
                        <span className="text-accent hover:text-primary transition-colors">← Back to Blog</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
