import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft, Star, ShoppingBag, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { Product } from "@/components/ProductCard";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState<string>("");

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Product not found");
                return res.json();
            })
            .then((data) => {
                const item = { ...data, id: data.id.toString() };
                setProduct(item);
                if (item.colors && item.colors.length > 0) {
                    setSelectedColor(item.colors[0]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </main>
                <Footer />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold">Product Not Found</h1>
                    <Button asChild>
                        <Link to="/shop">Back to Shop</Link>
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <Button asChild variant="ghost" className="mb-8">
                    <Link to="/shop" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4" /> Back to Shop
                    </Link>
                </Button>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery Simulation */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/20 card-product relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {product.isNew && (
                                <Badge className="absolute top-4 left-4">New Arrival</Badge>
                            )}
                        </div>
                        {/* Thumbnails (Static for demo) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 ring-2 ring-transparent hover:ring-primary transition-all">
                                    <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-accent font-medium mb-2">{product.category}</p>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex text-yellow-500">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current opacity-50" />
                                </div>
                                <span className="text-muted-foreground text-sm">(128 reviews)</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="text-3xl font-bold">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                {/* Fallback description if not present */}
                                {(product as any).description || "Experience premium quality and style with this essential piece. Designed for modern living, it combines comfort with durability."}
                            </p>
                        </div>

                        {/* Colors */}
                        <div className="space-y-3">
                            <span className="font-medium">Selected Color</span>
                            <div className="flex gap-3">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? "border-primary scale-110" : "border-transparent"
                                            }`}
                                        style={{ backgroundColor: color }}
                                        aria-label="Select color"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 pt-6 border-t border-border">
                            <Button className="flex-1 h-14 text-lg btn-primary">
                                <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="flex flex-col items-center text-center gap-2 p-4 bg-secondary/20 rounded-lg">
                                <Truck className="w-6 h-6 text-primary" />
                                <span className="text-xs font-medium">Free Shipping</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 p-4 bg-secondary/20 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                <span className="text-xs font-medium">Secure Checkout</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 p-4 bg-secondary/20 rounded-lg">
                                <RefreshCw className="w-6 h-6 text-primary" />
                                <span className="text-xs font-medium">Free Returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
