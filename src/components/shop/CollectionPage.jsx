import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../RTShip/ProductCard"; // Ensure path is correct
import { API_URL } from "../../api";

const CollectionPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // This gets 'collection1', 'collection2', etc. from the URL
  const collectionId = queryParams.get("collection");

  const [collectionInfo, setCollectionInfo] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      if (!collectionId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // 1. Fetch Collection Metadata (Title, Subtitle, etc.)
        const infoReq = axios.get(`${API_URL}/api/shop-collections/${collectionId}/`);
        
        // 2. Fetch Products for this collection
        const prodReq = axios.get(`${API_URL}/api/products/?collection=${collectionId}`);

        // Run both requests in parallel
        const [infoRes, prodRes] = await Promise.all([infoReq, prodReq]);

        setCollectionInfo(infoRes.data);
        setProducts(prodRes.data);
      } catch (err) {
        console.error("Error fetching collection data:", err);
        setError("Could not load collection details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl text-gray-500 font-infant">Loading Collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh] gap-4">
        <p className="text-xl text-red-500">{error}</p>
        <Link to="/" className="text-blue-600 underline">Go Home</Link>
      </div>
    );
  }

  // Fallback if no collection ID provided in URL
  if (!collectionId) {
    return <div className="text-center py-10">No collection selected.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-6">
      {/* Dynamic Header Section */}
      {collectionInfo && (
        <div className="mb-4 ml-5 text-start">
          <h2 className="text-3xl md:text-5xl font-bold font-infant text-[#3b493f] mb-3">
            {collectionInfo.title}
          </h2>
          {collectionInfo.subtitle && (
            <p className="text-lg md:text-xl text-gray-600 font-serif">
              {collectionInfo.subtitle}
            </p>
          )}
          {/* Optional: Show collection image banner if you want */}
          {/* 
          <div className="w-full h-64 mt-6 overflow-hidden rounded-lg">
             <img src={collectionInfo.image} className="w-full h-full object-cover" />
          </div> 
          */}
        </div>
      )}

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product?.images?.[0]?.image}
              title={product.name}
              price={product.price}
              slug={product.slug}
              soldOut={!product.in_stock}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-xl text-gray-500">
            No products found in this collection yet.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-4 px-6 py-2 bg-[#9C0300] text-white rounded-full hover:bg-red-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;