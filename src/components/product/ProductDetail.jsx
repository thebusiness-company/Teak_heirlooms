import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import RelatedProduct from "./RelatedProduct";
import api from "../../api";
import { toast } from "react-toastify";

// Custom Left Arrow for Color Slider
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeftIcon className="w-5 h-5" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronRightIcon className="w-5 h-5" />
  </button>
);

const ProductDetail = ({setNumCartItems}) => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inCart, setInCart] = useState(false);
  const cart_code = localStorage.getItem('cart_code');
  console.log(cart_code);
  
  // Fetch product data
  useEffect(() => {
    setLoading(true);
    api.get(`products/${slug}`)
    .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
    })
    .catch((error) => {
        console.error(error.message);
        setLoading(false);
        setError(error.message);
    });
}, [slug]);

const Newitem = {
    cart_code: cart_code,
    product_id: product?.id,
};

function add_item() {
    api.post('add_item/', Newitem)
    .then((response) => {
        console.log(response.data);
        setInCart(true);
        toast.success("Item added to cart");
        setNumCartItems(curr=>curr+1);
    })
    .catch((error) => {
        console.error(error.message);
    });
}

useEffect(() => {
    if (product?.id) {
        api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
        .then((response) => {
            console.log(response.data);
            setInCart(response.data.product_in_cart);
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}, [product?.id, cart_code]);


  // Set default selected color
  useEffect(() => {
    if (product?.finishes?.length > 0 && !selectedColor) {
      setSelectedColor(product.finishes[0]);
    }
  }, [product, selectedColor]);

  if (loading) return <p className="text-center text-lg">Loading product...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
  if (!product) return null;

  const colors = product.finishes || [];
  const images = product.images?.map((img) => img.image) || [];

  const colorSliderSettings = {
    dots: false,
    infinite: colors.length > 3,
    speed: 500,
    slidesToShow: Math.min(colors.length, 3),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(colors.length, 3) } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <>
      <div className="p-4 md:p-8 max-w-7xl mx-auto font-sans grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="space-y-6 mr-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</span>
            <span className="text-sm ml-2">{product.ratings || "No Ratings"}</span>
          </div>
          <p className="text-gray-600">{product.category}</p>
          {product.customizable && <p className="text-red-600 font-semibold">CUSTOMIZE</p>}
          <p className="text-gray-500">Available in {colors.length} Wood Finishes</p>

          {/* Color Slider */}
          {colors.length > 0 && (
            <div className="relative">
              <Slider {...colorSliderSettings} className="border pl-12 rounded-2xl">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => setSelectedColor(color)}
                  >
                    <div
                      className={`w-16 h-8 mt-2 ${
                        selectedColor === color
                          ? "border-2 border-black"
                          : "border border-gray-300"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                    <p className="text-sm mt-1">{color}</p>
                  </div>
                ))}
              </Slider>
            </div>
          )}

          {/* Quantity & Price */}
          <div className="flex items-center gap-40">
            <p>Qty:</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="border p-2 w-12 text-center"
            />
          </div>
          <div className="flex gap-40">
            <p>Price</p>
            <p className="text-2xl font-semibold">₹ {product.price?.toFixed(2) || "N/A"}</p>
          </div>

          <button 
          onClick={add_item}
          disabled={inCart}
          className="bg-[#9C0300] w-full text-white px-6 py-3 cursor-pointer rounded-md mt-4">
            {inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>

        {/* Column 2: Main Image */}
        {images.length > 0 && (
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 p-2 rounded-full"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <img src={images[currentImage]} alt="Product" className="w-full h-120 mx-20" />
            <button
              onClick={() => setCurrentImage((currentImage + 1) % images.length)}
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 p-2 rounded-full"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Column 3: Thumbnails & Dimensions */}
        <div className="space-y-2 mx-6">
          <div className="grid grid-cols-3 gap-2 relative">
            {images.slice(0, 8).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 cursor-pointer ${
                  currentImage === index ? "border-2" : "border"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
            {images.length > 8 && (
              <div
                className="w-16 h-16 flex items-center justify-center bg-cover bg-center text-white bg-amber-300 cursor-pointer"
                style={{ backgroundImage: `url(${images[8]})` }}
              >
                +{images.length - 8}
              </div>
            )}
          </div>
          <p className="text-red-600 font-semibold mt-5 ml-6">Dimensions</p>
          <div className="p-4 bg-[#fff1df] w-40">
            <p className="mt-4">
              Length: <br /> <strong>{product.dimensions?.length || "N/A"} cm</strong>
            </p>
            <p className="mt-5">
              Breadth: <br /> <strong>{product.dimensions?.breadth || "N/A"} cm</strong>
            </p>
            <p className="mt-5">
              Height: <br />
              <strong>{product.dimensions?.height || "N/A"} cm</strong>
            </p>
          </div>
        </div>

        {/* Product Description */}
        <div className="md:col-span-3 mt-6">
          <h3 className="font-semibold text-lg">Product Description</h3>
          <p className="text-gray-600 mt-2">
            {product.description || "No description available."}
          </p>
        </div>
      </div>

      {/* Related Product Section */}
      <RelatedProduct category={product.category} slug={product.slug} />
    </>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

ProductDetail.propTypes = {
  setNumCartItems: PropTypes.func.isRequired,
};

export default ProductDetail;
