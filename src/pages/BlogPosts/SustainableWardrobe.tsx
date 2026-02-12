import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Link from "@/components/NavLink";

export default function SustainableWardrobe() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4 max-w-3xl">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Badge>Sustainability</Badge>
                        <span className="text-sm text-muted-foreground">February 12, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        The Ultimate Guide to Building a Sustainable Wardrobe
                    </h1>
                    <img
                        src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=1200&q=80"
                        alt="Sustainable Fashion"
                        className="w-full h-[400px] object-cover rounded-xl mb-8"
                    />
                </div>

                <article className="prose prose-invert max-w-none space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                        In an era where fast fashion dominates the high street, a quiet revolution is taking place in our closets. 
                        Sustainable fashion is no longer just a buzzword; it is a necessary shift in how we view, buy, and wear our clothes. 
                        At Style Sanctuary, we believe that looking good shouldn't cost the Earth. But how do you transition from a trend-driven 
                        shopper to a conscious consumer without losing your sense of style? This guide will walk you through the essentials of 
                        eco-friendly clothing and how to make better choices.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">What is Sustainable Fashion?</h2>
                        <p>
                            Before diving into the "how-to," it's crucial to understand the "what." Sustainable fashion refers to clothing 
                            that is designed, manufactured, distributed, and used in ways that are environmentally friendly. This stands in 
                            stark contrast to "fast fashion" the rapid production of cheap clothing to meet the latest trends, often at the 
                            cost of fair labor practices and environmental health.
                        </p>
                        <p className="mt-4">
                            The movement toward ethical fashion encompasses several key pillars:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li><strong>Ethical Production:</strong> Ensuring fair wages and safe working conditions for garment workers.</li>
                            <li><strong>Eco-Friendly Materials:</strong> Using organic cotton, linen, hemp, or recycled fabrics that require fewer chemicals and water.</li>
                            <li><strong>Longevity:</strong> Creating high-quality garments meant to last for years, not weeks.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Why Make the Switch?</h2>
                        <p>
                            You might wonder if your individual choices matter. The answer is a resounding yes. The fashion industry is 
                            responsible for a significant portion of global carbon emissions and wastewater. By choosing slow fashion 
                            benefits, you are directly reducing your carbon footprint.
                        </p>
                        <ul className="list-decimal list-inside space-y-3 mt-4">
                            <li>
                                <strong>Quality Over Quantity:</strong> Sustainable pieces are often better made. Stitching is stronger, 
                                fabrics are more durable, and the fit is often superior.
                            </li>
                            <li>
                                <strong>Unique Style:</strong> Fast fashion tends to homogenize style. Vintage and sustainable brands 
                                offer unique pieces that help you stand out.
                            </li>
                            <li>
                                <strong>Cost-Effectiveness:</strong> While the upfront cost of ethical fashion can be higher, the cost 
                                per-wear is often lower because the items last longer.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">How to Start Your Sustainable Journey</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2">1. Shop Your Own Closet</h3>
                                <p>
                                    The most sustainable garment is the one you already own. Before buying new eco-friendly clothing, 
                                    organize your current wardrobe. Rediscover old favorites and repair items that have minor damage.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">2. Choose Natural and Recycled Fabrics</h3>
                                <p>
                                    When you do need to buy, check the label. Synthetic fibers like polyester are essentially plastic and 
                                    shed microplastics into our oceans. Opt for organic cotton, Tencel, or recycled wool. These materials 
                                    are biodegradable and have a lower environmental impact.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">3. Support Transparent Brands</h3>
                                <p>
                                    Look for brands that are transparent about their supply chain. At Style Sanctuary, we curate collections 
                                    from designers who prioritize the planet.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">4. Embrace Second-Hand and Vintage</h3>
                                <p>
                                    Thrifting is a cornerstone of sustainable fashion. It extends the life of garments that already exist, 
                                    preventing them from ending up in landfills. Plus, the thrill of finding a vintage designer piece for a 
                                    fraction of the price is unmatched.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">The Future of Fashion is Slow</h2>
                        <p>
                            Transitioning to a sustainable wardrobe doesn't happen overnight. It is a journey of small, conscious steps. 
                            By prioritizing slow fashion benefits and investing in eco-friendly clothing, you are voting for a better 
                            world with your wallet.
                        </p>
                        <p className="mt-4">
                            Remember, sustainable fashion isn't about perfection; it's about making better choices when you can. Visit 
                            Style Sanctuary's latest collection to see how we are blending ethics with aesthetics.
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
