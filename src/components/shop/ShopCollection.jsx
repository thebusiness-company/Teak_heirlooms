import { Link } from 'react-router-dom';
import Img from "../../assets/images/shop/image.jpg";

const collections = [
  {
    id: 'collection1',
    title: 'Significant Essence',
    subtitle: 'Wall Mirrors',
    price: '3899.00',
    trending: true
  },
  {
    id: 'collection2',
    title: 'Elegant Reflections',
    subtitle: 'Floor Mirrors',
    price: '4599.00',
    trending: true
  },
  {
    id: 'collection3',
    title: 'Modern Minimalist',
    subtitle: 'Decorative Mirrors',
    price: '3299.00',
    trending: true
  },
  {
    id: 'collection4',
    title: 'Vintage Charm',
    subtitle: 'Antique Mirrors',
    price: '4999.00',
    trending: true
  }
];

const ShopCollection = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold font-infant text-[#3b493f] mb-6">
          Shop by Collection
        </h2>

        {/* Collections */}
        {collections.map((collection, index) => (
          <div key={collection.id} className="max-w-5xl mx-auto px-4 py-8">
            <div className={`border-14 border-[#EDEAE5] rounded-md flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={Img}
                  alt={collection.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:pl-15 bg-white">
                {collection.trending && (
                  <p className="text-[#9C0300] text-xl md:text-3xl font-medium text-center mt-2 md:mt-4 mb-5  ">
                    Now Trending
                  </p>
                )}
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] text-center mb-5 font-infant">
                  {collection.title}
                </h3>
                <p className="text-[#3B493F] text-xl md:text-3xl font-semibold text-center mb-5">
                  {collection.subtitle}
                </p>
                <p className="text-[#9C0300] font-medium mt-2 text-xl md:text-2xl text-center mb-5">
                  Starts at ₹ {collection.price}.
                </p>
                <div className="flex justify-center items-center md:justify-start">
                  <Link 
                    to={`/collect?collection=${collection.id}`}
                    className="mt-2 mb-4 px-5 py-2 bg-[#9C0300] text-white rounded-full hover:bg-red-700 transition"
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