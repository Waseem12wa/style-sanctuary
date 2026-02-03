import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Shop: ["Men", "Women", "Kids", "Sale", "New Arrivals"],
  Help: ["FAQs", "Shipping", "Returns", "Size Guide", "Track Order"],
  Company: ["About Us", "Careers", "Press", "Sustainability", "Stores"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#"
              className="font-display text-2xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-gradient">FLUX</span>
            </motion.a>
            <p className="text-muted-foreground mt-4 text-sm max-w-xs">
              Premium athletic wear for those who push boundaries. 
              Performance engineered, style perfected.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 FLUX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/flags/4x3/us.svg"
              alt="US"
              className="w-6 h-4 rounded opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
            />
            <span className="text-sm text-muted-foreground">USD $</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
