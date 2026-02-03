import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Truck, Clock, Percent } from "lucide-react";

const promos = [
  { icon: Truck, text: "Free shipping on orders over $100" },
  { icon: Clock, text: "Flash Sale: 30% off all sneakers – ends in 2h 45m" },
  { icon: Percent, text: "New members get 15% off first order" },
];

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPromo}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm font-medium"
          >
            {(() => {
              const Icon = promos[currentPromo].icon;
              return <Icon className="w-4 h-4" />;
            })()}
            {promos[currentPromo].text}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
