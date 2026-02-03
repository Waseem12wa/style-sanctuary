import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "New Arrivals",
    href: "#",
    submenu: ["Latest Drops", "Trending Now", "Bestsellers"],
  },
  {
    label: "Men",
    href: "#",
    submenu: ["Sneakers", "Joggers", "Hoodies", "T-Shirts", "Accessories"],
  },
  {
    label: "Women",
    href: "#",
    submenu: ["Sneakers", "Leggings", "Sports Bras", "Jackets", "Accessories"],
  },
  {
    label: "Kids",
    href: "#",
    submenu: ["Sneakers", "Activewear", "Accessories"],
  },
  {
    label: "Sale",
    href: "#",
    submenu: ["Up to 50% Off", "Clearance", "Bundle Deals"],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [cartCount] = useState(3);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-2xl md:text-3xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">FLUX</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <motion.a
                  href={link.href}
                  className={`font-medium text-sm uppercase tracking-wider transition-colors ${
                    link.label === "Sale"
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>

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
                          <a
                            key={item}
                            href="#"
                            className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block font-medium text-lg ${
                    link.label === "Sale" ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border">
                <Button variant="ghost" size="icon">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
