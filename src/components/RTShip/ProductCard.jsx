
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, price, soldOut }) => {
  return (
    <div className="relative bg-white shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {soldOut && (
      <span className="absolute top-2 right-2 bg-[#9C0300] text-white text-xs px-2 py-1 rounded">
        Sold Out
      </span>
      )}
      <div className="p-2 text-center">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-[#9C0300] text-sm">₹ {price}</p>
      </div>
    </div>
    );
}
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  soldOut: PropTypes.bool.isRequired,
};


export default ProductCard;
