"use client";

import { useState, useEffect, useMemo } from "react";

/**
 * Custom hook to fetch and memoize restaurant data from local JSON file.
 * Ensures high performance with zero flickering by caching data.
 * @returns {Object} { products, categories, loading, error }
 */
export function useRestaurantData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from local JSON file
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call, but for local JSON:
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoize categories to prevent unnecessary re-renders
  const categories = useMemo(() => {
    if (!data) return [];
    return [...new Set(data.map((product) => product.category))];
  }, [data]);

  return {
    products: data || [],
    categories,
    loading,
    error,
  };
}
