// components/category/SubCategory.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubCategory = ({ title, items }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-12 text-[#3B493F] font-infant">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
            <Link
              to={`/Subcategory?subcategory=${item.slug}`}
              key={index}
              className="relative group overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#38493f] to-transparent p-4">
                <p className="text-white text-2xl md:text-3xl text-center font-semibold font-infant ">
                  {item.name}
                </p>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

SubCategory.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SubCategory;