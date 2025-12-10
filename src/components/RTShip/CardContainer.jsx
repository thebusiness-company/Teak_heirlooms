import { useState } from "react";
import { useRTShip } from "../../Hooks/useRTShip";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useRTShip(page); // Fetch paginated data

    if (isLoading) {
      return (
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-center text-3xl lg:text-5xl lg:mt-4 font-infant font-bold mb-6 text-[#3B493F]">
            Ready to Ship
          </h2>

          {/* Most Sold Skeleton */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#3B493F] font-infant">
              Most Sold Products
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`h-52 bg-gray-300 rounded shadow
                ${index === 3 ? "block md:hidden lg:block" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* New Arrival Skeleton */}
          <div className="mt-10">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#3B493F] font-infant">
              New Arrivals
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`h-52 bg-gray-300 rounded shadow
                ${index === 3 ? "block md:hidden lg:block" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
    
  if (error) return <p className="text-center text-red-500">Error loading products</p>;

  const products = data?.results || []; // Ensure products exist
  const { next, previous } = data || {};

  console.log(products, "Fetched Products");

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

  // ✅ Corrected filtering logic with proper field names
  const mostSoldProducts = products.filter((item) => item?.MostSold === true);
  const newArrivals = products.filter((item) => item?.NewArrival === true);

  console.log("Most Sold:", mostSoldProducts);
  console.log("New Arrivals:", newArrivals);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:mt-4 font-infant font-bold mb-6 text-[#3B493F]">
        Ready to Ship
      </h2>

      {/* Most Sold Products Section */}
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#3B493F] font-infant">
          Most Sold Products
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {mostSoldProducts.length > 0 ? (
            mostSoldProducts.map((item) => (
              <ProductCard
                key={item.product?.slug}
                image={
                  item.product?.images?.[0]?.image || "/fallback-image.jpg"
                }
                title={item.product?.name || "No Title"}
                price={item.product?.price || "N/A"}
                slug={item.product?.slug}
                soldOut={!item.product?.in_stock}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No Most Sold Products Found
            </p>
          )}
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="mt-10">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#3B493F] font-infant">
          New Arrivals
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {newArrivals.length > 0 ? (
            newArrivals.map((item) => (
              <ProductCard
                key={item.product?.slug}
                image={
                  item.product?.images?.[0]?.image || "/fallback-image.jpg"
                }
                title={item.product?.name || "No Title"}
                price={item.product?.price || "N/A"}
                slug={item.product?.slug}
                soldOut={!item.product?.in_stock}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No New Arrivals Found
            </p>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 text-center">
        <button
          className={`px-3 py-1 mx-1 rounded ${
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
          className={`px-3 py-1 mx-1 rounded ${
            !next ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPage}
          disabled={!next}
        >
          Next →
        </button>
        <p className="mt-4 text-center">Total Products: {data?.count || 0}</p>
      </div>
    </div>
  );
};

export default ProductGrid;
