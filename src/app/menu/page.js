"use client";

import { motion } from "framer-motion";
import { useRestaurantData } from "../../hooks/useRestaurantData";
import { useAppContext } from "../../context/AppContext";
import { useCart } from "../../context/CartContext";
import FoodCard from "../../components/FoodCard";
import CategoryTabs from "../../components/CategoryTabs";
import SkeletonLoader from "../../components/SkeletonLoader";

/**
 * Menu page with Bento grid layout, category filtering, and skeleton loading.
 * Features responsive design with staggered animations and smooth transitions.
 */
export default function MenuPage() {
  const { products, categories, loading, error } = useRestaurantData();
  const { addToCart } = useCart();
  const { activeCategory, setActiveCategory } = useAppContext();

  const visibleProducts = products.filter((product) => {
    if (activeCategory === "All") return true;
    return product.category === activeCategory;
  });

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-400">
            <p className="text-xl mb-4">Failed to load menu</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest
            ingredients and presented with culinary artistry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
          />
        </motion.div>

        {loading ? (
          <SkeletonLoader count={9} />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  layout: { duration: 0.3 },
                }}
              >
                <FoodCard product={product} onAdd={(p) => addToCart(p, 1)} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && visibleProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-8 max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.98-5.5-2.5"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">
                No items found
              </h3>
              <p className="text-gray-400">
                No items available in this category right now. Try selecting a
                different category.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
