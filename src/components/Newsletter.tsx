import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8"
          >
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Get 15% off your first order
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Join the <span className="text-gradient">Movement</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-4 text-lg"
          >
            Subscribe to get exclusive access to new drops, limited editions, 
            and member-only deals. No spam, just style.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="mt-8"
          >
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 px-6 rounded-full bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button
                  type="submit"
                  className="btn-accent h-14 px-8 rounded-full font-semibold whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-primary"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-medium">
                  Welcome to the club! Check your inbox for your discount code.
                </span>
              </motion.div>
            )}
          </motion.form>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Free Shipping Over $100
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Secure Checkout
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
