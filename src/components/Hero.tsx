import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";

const images = [
  { src: image1, alt: "Combo Deals", description: "Ultimate Bundle Offers" },
  { src: image2, alt: "Custom Tees", description: "Customize Your Style" },
  { src: image3, alt: "Neon Vibes", description: "Urban Streetwear" },
  { src: image4, alt: "Premium Range", description: "Elevate Your Wardrobe" },
  { src: image5, alt: "Packaging", description: "Choose Your Energy" },
  { src: image6, alt: "Coming Soon", description: "Premium Collection" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoplay(false);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Main Carousel */}
      <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden bg-black py-8 md:py-12">
        <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center bg-gray-900 rounded-lg px-4 md:px-8">
          {/* Image Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-6"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 relative z-20 w-full">
        {/* Image Counter and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm mb-2">
            {currentIndex + 1} / {images.length}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {images[currentIndex].description}
          </h2>
        </motion.div>

        {/* Dot Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="btn-primary h-14 px-8 text-base font-semibold rounded-full group" asChild>
            <a href="#categories">
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
