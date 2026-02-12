import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function PersonalStyle() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4 max-w-3xl">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Badge>Personal Style</Badge>
                        <span className="text-sm text-muted-foreground">February 12, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Finding Your Personal Style: A Journey to Confidence
                    </h1>
                    <img
                        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80"
                        alt="Finding Your Personal Style"
                        className="w-full h-[400px] object-cover rounded-xl mb-8"
                    />
                </div>

                <article className="prose prose-invert max-w-none space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                        Fashion is not just about fabric; it is about feeling. It is a language we speak to the world before we even open 
                        our mouths. But in a world saturated with influences and fleeting trends, finding your aesthetic can feel overwhelming. 
                        Developing a personal style is a journey of self-discovery, and at Style Sanctuary, we want to help you navigate it.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Why Personal Style Matters</h2>
                        <p>
                            Your style is your visual signature. When you dress in a way that aligns with your personality, you unlock a 
                            new level of fashion confidence. This is often called "enclothed cognition"—the psychological phenomenon where 
                            the clothes we wear influence how we think and behave. When you dress for success, you feel more successful.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Steps to Define Your Aesthetic</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2">1. Seek Inspiration, Not Imitation</h3>
                                <p>
                                    Create a mood board (Pinterest is great for this). Pin outfits that you are drawn to. After a while, 
                                    look for patterns. Do you pin mostly monochromatic looks? Bohemian prints? Edgy streetwear? These 
                                    patterns are the clues to your personal style.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">2. Analyze Your Lifestyle</h3>
                                <p>
                                    Your wardrobe must support your reality. If you are a gym teacher, a closet full of stilettos won't 
                                    serve you. Be realistic about what you spend 80% of your time doing and build your style around that 
                                    functionality.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-2">3. Identify Your "Uniform"</h3>
                                <p>
                                    Most style icons have a uniform. Steve Jobs had the turtleneck; Anna Wintour has the printed dress. 
                                    What is the outfit combo that makes you feel invincible? Maybe it's jeans and a blazer, or a midi skirt 
                                    and sneakers. Meaningful repetition creates a signature look.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Overcoming Style Imposter Syndrome</h2>
                        <p>
                            Many of us are afraid to try new things because we think "I can't pull that off." Here is the secret: You can 
                            pull off anything if you wear it with confidence.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li>
                                <strong>Start Small:</strong> If you want to try a bold color, start with a scarf or a shoe.
                            </li>
                            <li>
                                <strong>Comfort is Key:</strong> You will never look stylish if you are physically uncomfortable. If the 
                                shoes pinch or the dress rides up, it's not for you.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Your Style, Your Sanctuary</h2>
                        <p>
                            Your personal style will evolve as you grow, and that is a beautiful thing. It is not about following rules; 
                            it is about breaking them in a way that suits you. Whether you love sustainable fashion or are building a 
                            capsule wardrobe, the most important accessory you can wear is confidence.
                        </p>
                        <p className="mt-4 text-lg italic">
                            Welcome to Style Sanctuary, where you are free to be you.
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
