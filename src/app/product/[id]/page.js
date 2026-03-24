"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRestaurantData } from "../../../hooks/useRestaurantData";
import { useCart } from "../../../context/CartContext";

/**
 * Product details page with accordion nutrition info and add to cart functionality.
 * Uses local data fetching for optimal performance.
 */
export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { products, loading, error } = useRestaurantData();

  const product = products.find((p) => p.id === id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            <p className="text-gray-400 mt-4">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-400">
            <p className="text-xl mb-2">Failed to load product</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p className="text-xl mb-2">Product not found</p>
            <button
              onClick={() => router.back()}
              className="text-orange-400 hover:text-orange-300"
            >
              ← Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <p className="container mx-auto px-4 py-8">Product not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="mb-8 text-sm text-orange-400 hover:text-orange-300"
        >
          ← Back to Menu
        </button>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {product.name}
              </h1>
              <p className="text-sm uppercase tracking-wide text-orange-400">
                {product.category}
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <div className="text-3xl font-bold text-orange-400">
              ${product.price.toFixed(2)}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product, 1)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToCart(product, 2)}
                className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Add 2
              </button>
            </div>

            {/* Nutritional Info Accordion */}
            <details className="group">
              <summary className="cursor-pointer text-lg font-semibold text-white mb-4 group-open:mb-2">
                Nutritional Information
              </summary>
              <div className="text-gray-400 space-y-2 pl-4 border-l-2 border-orange-500">
                <p>Calories: ~450-650 kcal</p>
                <p>Protein: 25-35g</p>
                <p>Carbs: 40-60g</p>
                <p>Fat: 20-30g</p>
                <p className="text-sm mt-4">
                  *Values may vary based on preparation and portion size
                </p>
              </div>
            </details>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
