import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-8">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-secondary/10 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                        <Button asChild>
                            <Link to="/shop">Continue Shopping</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 glass rounded-xl border border-border">
                                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold">{item.name}</h3>
                                                <p className="text-sm text-muted-foreground">{item.size} / Color</p>
                                            </div>
                                            <p className="font-bold">${item.price}</p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-1">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary"><Minus className="w-4 h-4" /></button>
                                                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary"><Plus className="w-4 h-4" /></button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-destructive hover:text-destructive/80 p-2">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="space-y-6">
                            <div className="glass p-6 rounded-xl border border-border sticky top-24">
                                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="font-medium">${subtotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span className="font-medium">${shipping}</span>
                                    </div>
                                    <div className="h-px bg-border my-4" />
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span>${total}</span>
                                    </div>
                                </div>

                                <Button asChild className="w-full btn-primary h-12 text-lg">
                                    <Link to="/checkout">Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>

                                <div className="mt-6">
                                    <p className="text-xs text-muted-foreground text-center mb-2">Have a promo code?</p>
                                    <div className="flex gap-2">
                                        <Input placeholder="Enter code" className="bg-secondary/50" />
                                        <Button variant="outline">Apply</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
