"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slide from "@mui/material/Slide";

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; 

/**
 * FoodCard component with glassmorphism effects and optimized images.
 * Displays product information with hover animations and add to cart functionality.
 */
export default function FoodCard({ product, onAdd }) {
  const { handleClick, setcartItem } = useCart();
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-orange-400 text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => {
              handleClick(SlideTransition)();
              onAdd(product);
              setcartItem(product.name);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="inline-block text-xs text-orange-400 hover:text-orange-300 transition-colors"
        >
          View details →
        </Link>
      </div>
    </motion.div>
  );
}
