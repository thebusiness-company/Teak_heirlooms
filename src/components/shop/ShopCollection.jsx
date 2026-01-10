import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed
import { API_URL } from '../../api';

const ShopCollection = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        // Replace with your actual API URL
        const response = await axios.get(`${API_URL}/api/shop-collections/`);
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      <div className="w-full lg:max-w-[90%] mx-auto px-4 xl:px-8 py-8">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold font-infant text-[#3b493f] mb-6">
          Shop by Collection
        </h2>

        {collections.map((collection, index) => (
          <div key={collection.id} className="px-4 py-8 2xl:py-12">
            <div
              className={`border-14 border-[#EDEAE5] rounded-md flex flex-col md:flex-row items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[55%]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  loading='lazy'
                  decoding='async'
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="w-full md:w-[45%] flex flex-col justify-center items-center md:px-10 bg-white">
                {collection.trending && (
                  <p className="text-[#9C0300] text-xl md:text-2xl xl:text-3xl font-medium text-center mt-2 md:mt-4 mb-5">
                    Now Trending
                  </p>
                )}
                <h3 className="text-3xl lg:text-4xl 2xl:text-6xl font-serif font-bold text-[#000000] text-center mb-5 font-infant">
                  {collection.title}
                </h3>
                <h5 className="text-xl lg:text-2xl 2xl:text-4xl font-serif font-bold text-[#000000] text-center mb-5 font-infant">
                  {collection.subtitle}
                </h5>
                <p className="text-[#9C0300] font-medium mt-2 text-xl md:text-2xl 2xl:text-3xl text-center mb-5">
                  Starts at ₹ {collection.price}.
                </p>
                <div className="flex justify-center items-center md:justify-start">
                  <Link
                    to={`/collect?collection=${collection.id}`}
                    className="text-lg lg:text-xl 2xl:text-2xl mt-2 mb-4 px-4 py-0 md:px-6 md:py-2 2xl:px-8 bg-[#9C0300] text-white rounded-full hover:bg-red-700 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopCollection;