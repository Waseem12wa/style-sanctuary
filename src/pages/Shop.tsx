import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState([0, 300]);

    const categories = ["Running", "Lifestyle", "Training", "Basketball"];

    useEffect(() => {
        fetch("/api/products")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => {
                // Map backend ID (number) to frontend ID (string) if needed
                const mappedData = data.map((p: any) => ({ ...p, id: p.id.toString() }));
                setProducts(mappedData);
                setFilteredProducts(mappedData);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading products", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = products;

        if (selectedCategories.length > 0) {
            result = result.filter((p) => selectedCategories.includes(p.category));
        }

        result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

        setFilteredProducts(result);
    }, [products, selectedCategories, priceRange]);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-8 text-center md:text-left">
                    Shop <span className="text-gradient">Collection</span>
                </h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 space-y-8 glass p-6 rounded-xl h-fit sticky top-24">
                        <div>
                            <h3 className="font-bold mb-4">Categories</h3>
                            <div className="space-y-3">
                                {categories.map((category) => (
                                    <div key={category} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={category}
                                            checked={selectedCategories.includes(category)}
                                            onCheckedChange={() => toggleCategory(category)}
                                        />
                                        <Label htmlFor={category} className="cursor-pointer">{category}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Price Range</h3>
                            <Slider
                                defaultValue={[0, 300]}
                                max={300}
                                step={10}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                className="mb-2"
                            />
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                                setSelectedCategories([]);
                                setPriceRange([0, 300]);
                            }}
                        >
                            Reset Filters
                        </Button>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product, index) => (
                                    <ProductCard key={product.id} product={product} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                <p>No products found with these filters.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
