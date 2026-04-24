import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPortal } from "react-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", submenu: ["Men", "Women", "Kids", "New Arrivals"] },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [showStyleOffer, setShowStyleOffer] = useState(false);
  const [offerEmail, setOfferEmail] = useState("");
  const [offerSubmitted, setOfferSubmitted] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const shouldShowOffer = localStorage.getItem("showStyleOffer") === "1";
    const savedEmail = localStorage.getItem("styleOfferEmail") || "";
    const alreadyClaimed = localStorage.getItem("style360Claimed") === "1";

    setOfferEmail(savedEmail);
    setShowStyleOffer(shouldShowOffer && !alreadyClaimed);
  }, []);

  const handleOfferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerEmail.trim()) return;

    localStorage.setItem("styleOfferEmail", offerEmail.trim());
    localStorage.setItem("style360Claimed", "1");
    localStorage.removeItem("showStyleOffer");
    setOfferSubmitted(true);
  };

  const closeOffer = () => {
    localStorage.removeItem("showStyleOffer");
    setShowStyleOffer(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="font-display text-2xl md:text-3xl font-bold tracking-tight cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-gradient">Style Sanctuary</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link to={link.href}>
                  <motion.span
                    className="font-medium text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>

                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4"
                      >
                        <div className="glass rounded-lg border border-border p-4 min-w-[200px]">
                          {link.submenu.map((item) => (
                            <Link
                              key={item}
                              to={`/shop?category=${encodeURIComponent(item)}`}
                              className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
              <Link to="/dashboard">
                <User className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <div className="relative mt-1 md:mt-2 h-9 md:h-10 border-t border-border/50 flex items-center justify-center overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative flex items-center gap-3 md:gap-6 text-[11px] md:text-xs font-semibold uppercase tracking-wide text-primary-foreground px-2 text-center">
            <span>Free Delivery</span>
            <span className="text-primary-foreground/70">|</span>
            <span>10% Off First Order</span>
            <span className="hidden md:inline text-primary-foreground/70">|</span>
            <span className="hidden md:inline">Limited Time Offers</span>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block font-medium text-lg text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showStyleOffer && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-2xl rounded-2xl border border-sky-300/35 bg-gradient-to-br from-blue-500/35 via-indigo-500/30 to-orange-400/35 p-5 md:p-7 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-2xl bg-card/70" />
                  <button
                    onClick={closeOffer}
                    className="absolute right-3 top-3 text-slate-300 hover:text-white z-10"
                    aria-label="Close offer popup"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="relative z-10">
                    {!offerSubmitted ? (
                      <>
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-2">
                          Exclusive Welcome Offer
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                          Get 10% Off Your First Order
                        </h3>
                        <p className="text-sm md:text-base text-slate-200 mb-5">
                          Enter your email and use code <span className="text-sky-300 font-bold">STYLE_360</span> at checkout.
                        </p>

                        <form onSubmit={handleOfferSubmit} className="flex flex-col sm:flex-row gap-3">
                          <Input
                            type="email"
                            value={offerEmail}
                            onChange={(e) => setOfferEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="h-11 bg-slate-950/80 border-sky-400/45 text-white placeholder:text-slate-400"
                            required
                          />
                          <Button type="submit" className="h-11 px-5 btn-primary whitespace-nowrap">
                            Claim 10% Off
                          </Button>
                        </form>
                      </>
                    ) : (
                      <div>
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-sky-300 mb-2">
                          Offer Activated
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                          Your Promo Code Is Ready
                        </h3>
                        <p className="text-sm md:text-base text-slate-200 mb-4">
                          Use this code at checkout to get your 10% discount.
                        </p>
                        <div className="inline-flex items-center rounded-lg border border-sky-300/40 bg-sky-500/20 px-4 py-2">
                          <span className="text-lg font-bold tracking-widest text-sky-200">STYLE_360</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
