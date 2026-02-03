import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-8 text-center">About <span className="text-gradient">Style Sanctuary</span></h1>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Style Sanctuary was founded with a simple mission: to empower individuals to express their unique identity through fashion.
                        We believe that style is not just about what you wear, but how you feel when you wear it.
                    </p>
                    <p>
                        Born in the digital age, we combine cutting-edge design with sustainable practices.
                        Our collections are curated for the modern mover—those who demand functionality without compromising on aesthetics.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-center py-8">
                        <div className="p-6 glass rounded-xl">
                            <h3 className="text-xl font-bold text-foreground mb-2">Quality</h3>
                            <p className="text-sm">Premium materials that last longer.</p>
                        </div>
                        <div className="p-6 glass rounded-xl">
                            <h3 className="text-xl font-bold text-foreground mb-2">Sustainable</h3>
                            <p className="text-sm">Eco-friendly production methods.</p>
                        </div>
                        <div className="p-6 glass rounded-xl">
                            <h3 className="text-xl font-bold text-foreground mb-2">Inclusive</h3>
                            <p className="text-sm">Fashion for every body type.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
