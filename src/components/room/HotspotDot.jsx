import PropTypes from "prop-types";

const HotspotDot = ({ slug, name, price, top, left, hoverKey, hovered, setHovered, navigate }) => {
  return (
    <div
      onClick={() => navigate(`/product/${slug}`)}
      onMouseEnter={() => setHovered(hoverKey)}
      onMouseLeave={() => setHovered(null)}
      className="absolute w-5 h-5 bg-white border-4 border-black rounded-full cursor-pointer hover:scale-130 transition duration-200"
      style={{
        top,
        left,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {hovered === hoverKey && (
        <div className="absolute z-10 px-2 py-1 bg-white text-sm text-black rounded shadow-md whitespace-nowrap"
          style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
          <strong>{name}</strong><br />
          ₹{price}
        </div>
      )}
    </div>
  );
};

HotspotDot.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  hoverKey: PropTypes.string.isRequired,
  hovered: PropTypes.string,
  setHovered: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default HotspotDot;