import { useState } from "react";
import { useRTShip } from "../../Hooks/useRTShip";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useRTShip(page); // Fetch paginated data

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading products</p>;

  const products = data?.results || []; // Ensure products exist
  const { next, previous } = data || {};

  const handleNextPage = () => {
    if (next) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (previous) {
      setPage((prev) => prev - 1);
    }
  };

  const mostSoldProducts = products.filter((item) => item.MostSold === true);
  const newArrivals = products.filter((item) => item.NewArrival === true);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-2xl font-serif font-bold mb-6">
        Ready to Ship
      </h2>

      {/* Most Sold Products Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Most Sold Products</h3>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {mostSoldProducts.map((item) => (
            <ProductCard
              key={item.id}
              image={item.product?.image || item.image} // Fallback if no nested product field
              title={item.product?.name || item.name}
              price={item.product?.price || item.price}
              soldOut={item.MostSold}
            />
          ))}
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">New Arrival</h3>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((item) => (
            <ProductCard
              key={item.id}
              image={item.product?.image || item.image}
              title={item.product?.name || item.name}
              price={item.product?.price || item.price}
              soldOut={!item.product?.in_stock}
            />
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 text-center">
        <button
          className={`px-3 py-1 mx-1 border rounded ${
            !previous ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPage}
          disabled={!previous}
        >
          ← Prev
        </button>
        <span className="px-3 py-1 mx-1 border rounded bg-gray-300">
          {page}
        </span>
        <button
          className={`px-3 py-1 mx-1 border rounded ${
            !next ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPage}
          disabled={!next}
        >
          Next →
        </button>
        <p className="mt-4 text-center">
          Total Products: {data?.count || 0}
        </p>
      </div>
    </div>
  );
};

export default ProductGrid;
