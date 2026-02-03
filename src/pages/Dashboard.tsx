import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Package, LogOut } from "lucide-react";

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (!token || !storedUser) {
            navigate("/login");
            return;
        }

        setUser(JSON.parse(storedUser));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-10 container mx-auto px-4">
                <h1 className="text-3xl font-display font-bold mb-8">My Account</h1>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="md:col-span-1 space-y-2">
                        <Button variant="ghost" className="w-full justify-start gap-2 bg-secondary/50">
                            <User className="w-4 h-4" /> Profile
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Package className="w-4 h-4" /> Orders
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={handleLogout}
                        >
                            <LogOut className="w-4 h-4" /> Logout
                        </Button>
                    </aside>

                    {/* Content */}
                    <div className="md:col-span-3 glass p-6 rounded-xl border border-border">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="p-4 bg-secondary/30 rounded-lg">
                                    <p className="text-sm text-muted-foreground">Full Name</p>
                                    <p className="font-medium">{user.name}</p>
                                </div>
                                <div className="p-4 bg-secondary/30 rounded-lg">
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">{user.email}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
                            <div className="text-center py-10 text-muted-foreground bg-secondary/10 rounded-lg border border-dashed border-border">
                                <Package className="w-10 h-10 mx-auto mb-2 opacity-50" />
                                <p>No orders yet</p>
                                <Button asChild variant="link" className="mt-2 text-accent">
                                    <Link to="/shop">Start Shopping</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
