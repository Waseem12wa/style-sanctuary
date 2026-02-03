import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products: Product[] = [
  {
    id: "1",
    name: "Air Velocity Pro",
    category: "Running",
    price: 189,
    originalPrice: 229,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    colors: ["#1a1a1a", "#3b82f6", "#ef4444"],
    isNew: true,
    isSale: true,
    stock: 3,
  },
  {
    id: "2",
    name: "Urban Flex Jogger",
    category: "Lifestyle",
    price: 95,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80",
    colors: ["#374151", "#1f2937", "#059669"],
    isNew: true,
  },
  {
    id: "3",
    name: "Performance Hoodie",
    category: "Training",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    colors: ["#1f2937", "#3b82f6", "#f97316"],
    isSale: true,
  },
  {
    id: "4",
    name: "Stealth Runner X",
    category: "Running",
    price: 220,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    colors: ["#0a0a0a", "#dc2626", "#fbbf24"],
    isNew: true,
  },
  {
    id: "5",
    name: "Elite Training Shorts",
    category: "Training",
    price: 65,
    originalPrice: 85,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
    colors: ["#1a1a1a", "#1e40af", "#059669"],
    isSale: true,
  },
  {
    id: "6",
    name: "Cloud Walker",
    category: "Lifestyle",
    price: 175,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    colors: ["#fafafa", "#e5e5e5", "#fcd34d"],
    isNew: true,
  },
  {
    id: "7",
    name: "Tech Fleece Pants",
    category: "Lifestyle",
    price: 110,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    colors: ["#374151", "#1f2937", "#7c3aed"],
  },
  {
    id: "8",
    name: "Apex Court",
    category: "Basketball",
    price: 195,
    originalPrice: 240,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    colors: ["#ef4444", "#1a1a1a", "#3b82f6"],
    isSale: true,
    stock: 5,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Featured Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Trending <span className="text-gradient">Now</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              Discover our most popular styles loved by athletes and style enthusiasts worldwide.
            </p>
          </div>
          <Button variant="outline" className="rounded-full group w-fit" asChild>
            <Link to="/shop">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
