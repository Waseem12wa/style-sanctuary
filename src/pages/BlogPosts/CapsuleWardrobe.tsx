import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Link from "@/components/NavLink";

export default function CapsuleWardrobe() {
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
                        10 Essential Items for a Minimalist Capsule Wardrobe
                    </h1>
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80"
                        alt="Capsule Wardrobe Essentials"
                        className="w-full h-[400px] object-cover rounded-xl mb-8"
                    />
                </div>

                <article className="prose prose-invert max-w-none space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                        Do you ever stand in front of a closet full of clothes and feel like you have nothing to wear? You are not alone. 
                        This is the paradox of choice, and the solution might just be a capsule wardrobe. A capsule wardrobe is a curated 
                        collection of versatile pieces that can be mixed and matched to create a wide variety of outfits. It is the ultimate 
                        hack for minimalist style, saving you time, money, and stress.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Philosophy of the Capsule</h2>
                        <p>
                            The concept, popularized in the 1970s, focuses on quality and versatility. A well-built capsule wardrobe ensures 
                            that every item you own fits you perfectly and makes you feel confident. It eliminates the "clutter" of trendy, 
                            one-time-wear items and focuses on wardrobe essentials that stand the test of time.
                        </p>
                        <p className="mt-4">
                            Here are the 10 essential items every Style Sanctuary reader needs to build the perfect foundation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Top 10 Essentials</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2">1. The Classic White Tee</h3>
                                <p>
                                    A high-quality white t-shirt is the workhorse of any closet. It can be dressed up with a blazer or 
                                    dressed down with jeans. Look for organic cotton for breathability and longevity.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">2. A Tailored Blazer</h3>
                                <p>
                                    Nothing says "put together" like a sharp blazer. Whether you are heading to a meeting or a brunch date, 
                                    a blazer adds instant structure to your look. Opt for neutral colors like black, navy, or beige to 
                                    maximize mix and match outfits.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">3. The Perfect Pair of Jeans</h3>
                                <p>
                                    Denim trends come and go (skinny, wide-leg, mom jeans), but a classic straight-leg cut in a medium wash 
                                    is timeless. Invest in denim that has a little stretch for comfort but holds its shape.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">4. A Little Black Dress (LBD)</h3>
                                <p>
                                    The LBD is legendary for a reason. It is the ultimate emergency outfit. Choose a simple silhouette that 
                                    can transition from day to night with just a change of accessories.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">5. White Sneakers</h3>
                                <p>
                                    Gone are the days when sneakers were just for the gym. A clean pair of white leather or canvas sneakers 
                                    pairs perfectly with dresses, suits, and jeans, embodying the effortless minimalist style.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">6. A Crisp Button-Down Shirt</h3>
                                <p>
                                    Borrowing from menswear, an oversized button-down is incredibly chic. Tuck it in for a professional look 
                                    or wear it open over a tank top for a breezy summer vibe.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">7. Black Trousers</h3>
                                <p>
                                    A pair of well-fitting black trousers is a non-negotiable wardrobe essential. They are the foundation of 
                                    workwear but can look edgy with a graphic tee and leather jacket.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">8. A Trench Coat</h3>
                                <p>
                                    For outerwear, the trench coat is king. It is lightweight enough for spring and fall and provides a 
                                    sophisticated layer against the elements.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">9. Ankle Boots</h3>
                                <p>
                                    Ankle boots are versatile enough to be worn year-round. A black or brown leather pair will ground your 
                                    floral dresses and complement your denim.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">10. A Tote Bag</h3>
                                <p>
                                    You need a bag that can carry your life—laptop, makeup, water bottle. A structured leather tote in a 
                                    neutral shade ties your entire capsule wardrobe together.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Building Your Sanctuary</h2>
                        <p>
                            Creating a capsule wardrobe is about reclaiming your personal style from the chaos of trends. Start by 
                            decluttering what you don't wear and slowly investing in these 10 wardrobe essentials. At Style Sanctuary, we 
                            believe that true style is about simplicity and confidence. With these pieces, you will always have something 
                            amazing to wear.
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
