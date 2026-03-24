import { motion } from "framer-motion";

/**
 * SkeletonLoader component for loading states.
 * Displays animated placeholder cards while data is loading.
 */
export default function SkeletonLoader({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
        >
          <div className="h-48 bg-gray-700 animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-6 bg-gray-700 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded animate-pulse" />
              <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-6 w-16 bg-gray-700 rounded animate-pulse" />
              <div className="h-10 w-24 bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </motion.div> 
      ))}
    </div>
  );
}
              
           
  
    
  
 