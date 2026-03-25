"use client";
// import HeroBgImage from "./assets/eiliv-aceron-uBigm8w_MpA-unsplash.jpg";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRestaurantData } from "../hooks/useRestaurantData";
import { useCart } from "../context/CartContext";
import FoodCard from "../components/FoodCard";

/**
 * Home page with cinematic hero section featuring staggered text animation
 * and optimized featured dishes grid with local data integration.
 */
export default function HomePage() {
  const { products, loading, error } = useRestaurantData();
  // console.log(products);
  
  const { addToCart } = useCart();

  const featured = products.slice(0, 6);

  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/eiliv-aceron-uBigm8w_MpA-unsplash.webp"
            alt="Savoria Hero Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white z-10"
          >
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-orange-400 text-lg font-medium tracking-wider uppercase">
                Welcome to
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Experience <span className="text-orange-400">Art</span> on a Plate
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              Discover culinary masterpieces crafted with passion and served
              with elegance at Savoria. Where every dish tells a story.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/menu"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Order Now
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Foods */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Dishes
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Indulge in our chef&apos;s carefully curated selection of
              signature dishes, each crafted with premium ingredients
            </p>
          </motion.div>

          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
              <p className="text-gray-400 mt-4">Loading featured items...</p>
            </div>
          )}

          {error && (
            <div className="text-center text-red-400">
              <p className="text-xl mb-2">Failed to load featured dishes</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {featured.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FoodCard product={product} onAdd={(p) => addToCart(p, 1)} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
