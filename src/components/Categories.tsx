import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Sneakers",
    description: "Performance meets style",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
    count: "120+ styles",
  },
  {
    name: "Joggers",
    description: "Ultimate comfort",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
    count: "85+ styles",
  },
  {
    name: "Hoodies",
    description: "Street-ready warmth",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    count: "60+ styles",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Shop by Category
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Find Your <span className="text-gradient">Perfect Fit</span>
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {category.count}
                    </span>
                    <h3 className="font-display text-3xl font-bold text-foreground mt-1">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
