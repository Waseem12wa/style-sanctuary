import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            toast.success("Password reset link sent!");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center pt-20 pb-10 px-4">
                <div className="w-full max-w-md space-y-8 glass p-8 rounded-2xl border border-border shadow-2xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-display font-bold text-gradient">Forgot Password</h2>
                        <p className="mt-2 text-muted-foreground">Enter your email to reset your password</p>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-secondary/50 border-input focus:ring-primary"
                                />
                            </div>

                            <Button type="submit" className="w-full btn-primary" disabled={loading}>
                                {loading ? "Sending..." : "Send Reset Link"}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className="p-4 bg-green-500/10 text-green-500 rounded-lg">
                                Check your email for the reset link!
                            </div>
                            <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
                                Try another email
                            </Button>
                        </div>
                    )}

                    <div className="text-center text-sm">
                        <Link to="/login" className="text-primary font-medium hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
