"use client";

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategorySelect,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategorySelect("All")}
        className={`px-4 py-2 font-medium transition-colors ${
          activeCategory === "All"
            ? "bg-orange-500 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-4 py-2 font-medium transition-colors ${
            activeCategory === category
              ? "bg-orange-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
