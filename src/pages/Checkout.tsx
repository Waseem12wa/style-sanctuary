import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function Checkout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === "shipping") {
            setStep("payment");
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setStep("success");
                toast.success("Order placed successfully!");
            }, 2000);
        }
    };

    if (step === "success") {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
                    <div className="text-center space-y-6 max-w-md">
                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h1 className="text-3xl font-bold">Thank You!</h1>
                        <p className="text-muted-foreground">Your order #12345 has been placed successfully. A confirmation email has been sent to you.</p>
                        <Button className="btn-primary w-full" onClick={() => navigate("/shop")}>
                            Continue Shopping
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>

                    {/* Steps */}
                    <div className="flex items-center gap-4 mb-8 text-sm">
                        <div className={`flex items-center gap-2 ${step === "shipping" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">1</span>
                            Shipping
                        </div>
                        <div className="h-px w-8 bg-border" />
                        <div className={`flex items-center gap-2 ${step === "payment" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">2</span>
                            Payment
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-border space-y-6">
                        {step === "shipping" ? (
                            <>
                                <h2 className="text-xl font-bold">Shipping Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" required className="bg-secondary/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" required className="bg-secondary/50" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" required className="bg-secondary/50" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" required className="bg-secondary/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">ZIP Code</Label>
                                        <Input id="zip" required className="bg-secondary/50" />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full btn-primary h-12">
                                    Continue to Payment
                                </Button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold">Payment Method</h2>
                                <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg mb-4">
                                    <p className="font-medium text-sm">Credit Card (Simulated)</p>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="card">Card Number</Label>
                                    <Input id="card" placeholder="0000 0000 0000 0000" required className="bg-secondary/50" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Expiry Details</Label>
                                        <Input id="expiry" placeholder="MM/YY" required className="bg-secondary/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvv">CVV</Label>
                                        <Input id="cvv" placeholder="123" required className="bg-secondary/50" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Button type="button" variant="outline" className="flex-1" onClick={() => setStep("shipping")}>
                                        Back
                                    </Button>
                                    <Button type="submit" className="flex-1 btn-primary h-12" disabled={loading}>
                                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Place Order"}
                                    </Button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
