import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

    useEffect(() => {
        if (!token) {
            setStatus("error");
            return;
        }

        fetch("/api/auth/verify-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        })
            .then(async (res) => {
                if (res.ok) setStatus("success");
                else setStatus("error");
            })
            .catch(() => setStatus("error"));
    }, [token]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center pt-20 pb-10 px-4">
                <div className="w-full max-w-md space-y-8 glass p-8 rounded-2xl border border-border shadow-2xl text-center">
                    {status === "loading" && (
                        <div className="flex flex-col items-center gap-4">
                            <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            <h2 className="text-2xl font-bold">Verifying your email...</h2>
                        </div>
                    )}

                    {status === "success" && (
                        <div className="flex flex-col items-center gap-4">
                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                            <h2 className="text-2xl font-bold">Email Verified!</h2>
                            <p className="text-muted-foreground">Your account has been successfully verified.</p>
                            <Button asChild className="w-full btn-primary mt-4">
                                <Link to="/login">Continue to Login</Link>
                            </Button>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="flex flex-col items-center gap-4">
                            <XCircle className="w-12 h-12 text-destructive" />
                            <h2 className="text-2xl font-bold">Verification Failed</h2>
                            <p className="text-muted-foreground">Invalid or expired token.</p>
                            <Button asChild variant="outline" className="w-full mt-4">
                                <Link to="/signup">Try Again</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
