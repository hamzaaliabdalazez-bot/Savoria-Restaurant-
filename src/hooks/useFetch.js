"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let canceled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        if (!canceled) {
          setData(response.data);
        }
      } catch (err) {
        if (!canceled) {
          setError(err.message || "Network error");
        }
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      canceled = true;
    };
  }, [url]);

  return { data, loading, error };
}
