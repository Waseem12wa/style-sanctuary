import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Accessorizing() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4 max-w-3xl">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Badge>Style Guide</Badge>
                        <span className="text-sm text-muted-foreground">February 12, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        The Art of Accessorizing: Elevating Your Look on a Budget
                    </h1>
                    <img
                        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80"
                        alt="Accessorizing Tips"
                        className="w-full h-[400px] object-cover rounded-xl mb-8"
                    />
                </div>

                <article className="prose prose-invert max-w-none space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                        You've got the outfit, but something is missing. It looks... fine, but it doesn't look finished. The secret 
                        ingredient? Accessories. Accessorizing is the difference between wearing clothes and styling an outfit. It is 
                        the most powerful tool in your arsenal for budget fashion, allowing you to transform a single outfit in multiple 
                        ways. Here are our top accessorizing tips to take your look to the next level.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Power of the Third Piece</h2>
                        <p>
                            Stylists often use the "Third Piece Rule." Your top is the first piece; your bottom is the second. The third 
                            piece—a scarf, a belt, a hat, or a piece of statement jewelry—is what pulls the look together. It adds 
                            complexity and intention to your ensemble.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Jewelry: Minimalist vs. Statement</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Layering Necklaces: The "Neck Mess" Trend</h3>
                                <p>
                                    The "neck mess" trend, artfully layering gold chains of different lengths and textures, is here to 
                                    stay. Start with a choker, add a pendant, and finish with a longer chain. This works beautifully 
                                    over plain t-shirts or deep V-necks.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">Statement Earrings</h3>
                                <p>
                                    If you want to draw attention to your face, statement jewelry is key. Oversized hoops or architectural 
                                    gold earrings can make a simple bun and jeans look runway ready.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Belts: The Silhouette Shaper</h2>
                        <p>
                            Never underestimate a good belt. Cinching an oversized blazer or a flowy dress at the waist instantly changes 
                            the silhouette, making it more flattering. A classic leather belt with a gold buckle is a must-have, but 
                            don't be afraid to try chain belts for a retro vibe.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Bags and Shoes</h2>
                        <p>
                            Your accessories extend beyond jewelry.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li>
                                <strong>Pop of Color:</strong> If you wear a lot of neutrals, use your bag or shoes to inject color. 
                                Red heels or an emerald green bag can be the focal point of your outfit.
                            </li>
                            <li>
                                <strong>Texture:</strong> Mixing textures adds richness. Pair a leather bag with a wool coat, or suede 
                                boots with denim.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">How to Style Accessories Without Overdoing It</h2>
                        <p>
                            Coco Chanel famously said, "Before you leave the house, look in the mirror and take one thing off." While 
                            we love maximalism, balance is key.
                        </p>
                        <ul className="list-decimal list-inside space-y-3 mt-4">
                            <li>
                                <strong>Choose a Focal Point:</strong> If you are wearing huge earrings, skip the necklace. If you are 
                                stacking bracelets, keep the rings simple.
                            </li>
                            <li>
                                <strong>Consider the Neckline:</strong> Crew necks look great with statement necklaces, while boat necks 
                                suit long pendants.
                            </li>
                            <li>
                                <strong>Match Metals (Or Don't):</strong> While mixing metals is trendy, sticking to all gold or all 
                                silver creates a cohesive, expensive look, which is a great hack for budget fashion.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                        <p className="text-lg">
                            At Style Sanctuary, we believe accessories are the exclamation point of a woman's outfit. They allow you 
                            to express your personality without saying a word.
                        </p>
                    </div>
                </article>

                <div className="mt-12 pt-8 border-t border-border">
                    <Link to="/blog" className="text-accent hover:text-primary transition-colors">
                        ← Back to Blog
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
