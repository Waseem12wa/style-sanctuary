import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-12 text-center">Contact <span className="text-gradient">Us</span></h1>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">Get in Touch</h2>
                        <p className="text-muted-foreground">
                            Have questions about your order or need style advice? We're here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Visit Us</h3>
                                    <p className="text-muted-foreground">123 Fashion Ave, New York, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Call Us</h3>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Email Us</h3>
                                    <p className="text-muted-foreground">hello@stylesanctuary.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-secondary/30 rounded-xl relative overflow-hidden flex items-center justify-center">
                            <span className="text-muted-foreground">Map Integration Placeholder</span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass p-8 rounded-2xl border border-border">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>First Name</Label>
                                    <Input placeholder="John" className="bg-secondary/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Last Name</Label>
                                    <Input placeholder="Doe" className="bg-secondary/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input placeholder="john@example.com" type="email" className="bg-secondary/50" />
                            </div>
                            <div className="space-y-2">
                                <Label>Message</Label>
                                <Textarea placeholder="How can we help?" className="bg-secondary/50 min-h-[150px]" />
                            </div>
                            <Button className="w-full btn-primary h-12">Send Message</Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
