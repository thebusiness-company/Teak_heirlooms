import { Link } from 'react-router-dom';
import Img from "../../assets/images/shop/image.jpg";
import c1 from "../../assets/images/shop/shopcol-1.png";
import c2 from "../../assets/images/shop/shopcol-2.png";
import c3 from "../../assets/images/shop/shopcol-3.png";
import c4 from "../../assets/images/shop/shopcol-4.png";

const collections = [
  {
    id: "collection1",
    title: "Significant Essence",
    subtitle: "Wall Mirrors",
    price: "3899.00",
    trending: true,
    image: c1,
  },
  {
    id: "collection2",
    title: "Elegant Reflections",
    subtitle: "Table Accents",
    price: "4599.00",
    trending: true,
    image: c2,
  },
  {
    id: "collection3",
    title: "Modern Minimalist",
    subtitle: "topic ",
    price: "3299.00",
    trending: true,
    image: c3,
  },
  {
    id: "collection4",
    title: "Vintage Charm",
    subtitle: "topic",
    price: "4999.00",
    trending: true,
    image: c4,
  },
];

const ShopCollection = () => {
  return (
    <>
      <div className="w-full lg:max-w-[90%] mx-auto px-4 xl:px-8 py-8">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold font-infant text-[#3b493f] mb-6">
          Shop by Collection
        </h2>

        {/* Collections */}
        {collections.map((collection, index) => (
          <div key={collection.id} className="px-4 py-8 2xl:py-12">
            <div
              className={`border-14 border-[#EDEAE5] rounded-md flex flex-col md:flex-row items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-[55%]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-[45%] flex flex-col justify-center items-center md:px-10 bg-white">
                {collection.trending && (
                  <p className="text-[#9C0300] text-xl md:text-2xl xl:text-3xl font-medium text-center mt-2 md:mt-4 mb-5  ">
                    Now Trending
                  </p>
                )}
                <h3 className="text-3xl lg:text-4xl 2xl:text-6xl font-serif font-bold text-[#000000] text-center mb-5 font-infant">
                  {collection.title}
                </h3>
                {/* <p className="text-[#3B493F] text-xl md:text-3xl font-semibold text-center mb-5">
                  {collection.subtitle}
                </p> */}
                <p className="text-[#9C0300] font-medium mt-2 text-xl md:text-2xl 2xl:text-3xl text-center mb-5">
                  Starts at ₹ {collection.price}.
                </p>
                <div className="flex justify-center items-center md:justify-start">
                  <Link
                    to={`/collect?collection=${collection.id}`}
                    className="text-lg lg:text-xl 2xl:text-2xl mt-2 mb-4 px-4 py-0 md:px-6 md:py-2  2xl:px-8 bg-[#9C0300] text-white rounded-full hover:bg-red-700 transition"
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