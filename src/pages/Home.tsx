import { useState } from "react";
import { products, Category } from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import PromoBanner from "../components/PromoBanner";
import FeaturedRow from "../components/FeaturedRow";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const categories: (Category | "All")[] = [
    "All",
    "Whitening",
    "Electric Toothbrush",
    "Flossing",
    "Mouthwash",
    "Kids",
    "Specialty",
  ];

  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const trustSignals = [
    "Dentist-Curated",
    "Paraben-Free",
    "ADA Approved",
    "Science-Backed",
    "Top-Rated",
    "Amazon Prime Eligible"
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Announcement Bar */}
      <div className="bg-primary/20 text-primary-foreground w-full py-2 text-center text-xs font-medium tracking-wide bg-primary text-white">
        FREE SHIPPING ON PRIME ELIGIBLE ORDERS
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex-1 flex gap-8 items-center text-sm font-medium tracking-wide">
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToProducts(); }} className="hover:text-primary transition-colors">SHOP ALL</a>
            <a href="#about" className="hover:text-primary transition-colors hidden md:block">OUR STORY</a>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="font-serif font-semibold text-3xl tracking-tight text-foreground">
              BrightSmile
            </span>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={scrollToProducts}
              className="text-xs font-bold tracking-widest uppercase bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[85vh]">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-6">
              Curated by Professionals
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground leading-[1.1] mb-6">
              The oral care products<br />your dentist actually uses.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed font-light">
              Skip the overwhelming drugstore aisles. We've hand-selected the most effective, science-backed dental products for your healthiest smile.
            </p>
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-sm"
            >
              Explore the Collection
            </button>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[50vh] md:min-h-full bg-muted">
          <img 
            src={`${import.meta.env.BASE_URL}hero-lifestyle.png`} 
            alt="Smiling woman" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-primary text-white py-4 overflow-hidden flex whitespace-nowrap border-y border-primary/10">
        <div className="animate-marquee flex gap-12 items-center min-w-full">
          {[...trustSignals, ...trustSignals, ...trustSignals, ...trustSignals].map((signal, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium tracking-widest uppercase">{signal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <PromoBanner />

      {/* Featured Row: Trust Badges + Featured Products */}
      <FeaturedRow />

      {/* Products Section */}
      <section id="products" className="py-24 px-6 max-w-[1400px] mx-auto scroll-mt-20">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="font-serif text-4xl font-medium text-foreground mb-10 text-center">Curated Collection</h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground border border-border hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key={product.id}
                  className="group flex flex-col"
                >
                  <div className="aspect-[4/5] bg-white rounded-2xl mb-6 flex items-center justify-center p-8 relative overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow text-center items-center">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3">
                      {product.category}
                    </span>
                    
                    <h3 className="font-serif text-xl text-foreground leading-snug mb-3 max-w-[280px]">
                      {product.name}
                    </h3>
                    
                    <span className="font-medium text-foreground mb-6">{product.price}</span>
                    
                    <div className="mt-auto">
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors w-full sm:w-auto"
                      >
                        Shop on Amazon
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-32 text-center">
            <p className="text-muted-foreground text-lg font-light">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="bg-background py-32 border-t border-border/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-medium text-foreground mb-8">Why Trust Our Picks?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
            As dental professionals, we're constantly asked "What toothbrush should I buy?" or "Does this whitening kit actually work?". BrightSmile Picks was created to answer those questions. We sift through the noise, verify the claims, and only recommend products we use ourselves and suggest to our own patients.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/60 py-16 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8">
            <span className="font-serif text-3xl text-background">
              BrightSmile
            </span>
          </div>
          <p className="max-w-2xl leading-relaxed font-light mb-12">
            As an Amazon Associate, BrightSmile Picks earns from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. The information provided on this site is for educational purposes only and does not substitute for professional medical advice. Consult a medical professional or healthcare provider if you are seeking medical advice, diagnoses, or treatment.
          </p>
          <p className="font-light tracking-wide text-xs">
            &copy; {new Date().getFullYear()} BrightSmile Picks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
