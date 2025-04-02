import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import RelatedProduct from "./RelatedProduct";

// Custom Left Arrow for Color Slider
const PrevArrow = ({ onClick }) => (
  <button 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeftIcon className="w-5 h-5" />
  </button>
);

// Custom Right Arrow for Color Slider
const NextArrow = ({ onClick }) => (
  <button 
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronRightIcon className="w-5 h-5" />
  </button>
);

// API Calls
const fetchProductDetail = async (slug) => {
  const response = await axios.get(`http://127.0.0.1:8000/api/products/${slug}/`);
  return response.data;
};

const addToWishlist = async (productId) => {
    try {
        const token = localStorage.getItem("token"); // Get token from local storage
        if (!token) {
            console.error("No authentication token found.");
            return;
        }

        const response = await axios.post(
            "http://127.0.0.1:8000/api/wishlist/",
            { product_id: productId },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Include the token in headers
                },
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error adding to wishlist:", error.response?.data || error.message);
    }
};

const removeFromWishlist = async (wishlistItemId) => {
    try {
        const token = localStorage.getItem("token");  
        if (!token) {
            console.error("No authentication token found.");
            return;
        }

        await axios.delete(`http://127.0.0.1:8000/api/wishlist/${wishlistItemId}/`, {
            headers: {
                Authorization: `Bearer ${token}`,  // Ensure token is sent
            },
        });

        console.log("Item removed from wishlist.");
    } catch (error) {
        console.error("Error removing from wishlist:", error.response?.data || error.message);
    }
};

const checkWishlistStatus = async (productSlug) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No authentication token found.");
        return false;
      }
  
      const response = await axios.get("http://127.0.0.1:8000/api/wishlist/", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      const wishlistItem = response.data.find((item) => item.product.slug === productSlug);
      return wishlistItem ? wishlistItem.id : false;
    } catch (error) {
      console.error("Error checking wishlist:", error.response?.data || error.message);
      return false;
    }
  };

const ProductDetail = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(true);

  // Fetch product data
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProductDetail(slug),
  });

  // Check wishlist status on component mount and when product changes
  useEffect(() => {
    const checkWishlist = async () => {
      setWishlistLoading(true);
      try {
        const status = await checkWishlistStatus(slug);
        setIsInWishlist(status);
      } catch (error) {
        console.error("Error checking wishlist:", error);
      } finally {
        setWishlistLoading(false);
      }
    };
    
    checkWishlist();
  }, [slug]);

  // Add to wishlist mutation
  const addToWishlistMutation = useMutation({
    mutationFn: () => addToWishlist(slug),
    onSuccess: () => {
      setIsInWishlist(true);
      queryClient.invalidateQueries(['wishlist']);
    },
    onError: (error) => {
      console.error("Error adding to wishlist:", error);
      // You might want to show an error message to the user here
    }
  });

  // Remove from wishlist mutation
  const removeFromWishlistMutation = useMutation({
    mutationFn: () => removeFromWishlist(slug),
    onSuccess: () => {
      setIsInWishlist(false);
      queryClient.invalidateQueries(['wishlist']);
    },
    onError: (error) => {
      console.error("Error removing from wishlist:", error);
      // You might want to show an error message to the user here
    }
  });

  // Toggle wishlist status
  const toggleWishlist = () => {
    if (wishlistLoading) return;
    
    if (isInWishlist) {
      removeFromWishlistMutation.mutate();
    } else {
      addToWishlistMutation.mutate();
    }
  };

  if (isLoading) return <p className="text-center text-lg">Loading product...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading product.</p>;

  // Default color and image setup
  const colors = product?.finishes || [];
  const images = product?.images?.map(img => img.image) || [];
  
  // Set default selected color when data is loaded
  if (!selectedColor && colors.length > 0) {
    setSelectedColor(colors[0]);
  }

  // Slider settings for colors
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
      
      {/* Column 1: Title, Ratings, Customization, and Add to Cart */}
      <div className="space-y-6 mr-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center">
          <span className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</span>
          <span className="text-sm ml-2">{product.ratings || "No Ratings"}</span>
        </div>
        <p className="text-gray-600">{product.category}</p>
        {product.customizable && <p className="text-red-600 font-semibold">CUSTOMIZE</p>}
        <p className="text-gray-500">Available in {colors.length} Wood Finishes</p>

        {/* Color Selection Slider */}
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
                    className={`w-16 h-8 mt-2 ${selectedColor === color ? "border-2 border-black" : "border border-gray-300"}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                  <p className="text-sm mt-1">{color}</p>
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Quantity and Price */}
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

        {/* Add to Cart Button */}
        <div className="flex items-center mt-4">
          <button className="bg-[#9C0300] w-full text-white px-6 py-3 rounded-md">ADD TO CART</button>
          <button 
            onClick={toggleWishlist}
            disabled={wishlistLoading}
            className="ml-3"
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            {wishlistLoading ? (
              <span className="w-12 h-12 flex items-center justify-center">
                {/* You can replace this with a proper spinner */}
                <span className="animate-pulse">...</span>
              </span>
            ) : isInWishlist ? (
              <FilledHeartIcon className="w-12 h-12 text-[#9C0300]" />
            ) : (
              <HeartIcon className="w-12 h-12 text-[#9C0300]" />
            )}
          </button>
        </div>
      </div>

      {/* Column 2: Main Image with Arrows */}
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

      {/* Column 3: Thumbnails */}
      <div className="space-y-2 mx-6">
        <div className="grid grid-cols-3 gap-2 relative">
          {images.slice(0, 8).map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Thumbnail ${index}`} 
              className={`w-16 h-16 cursor-pointer ${currentImage === index ? "border-2" : "border"}`} 
              onClick={() => setCurrentImage(index)} 
            />
          ))}
          {images.length > 8 && (
            <div className="w-16 h-16 flex items-center justify-center bg-cover bg-center text-white bg-amber-300 cursor-pointer" 
            style={{ backgroundImage: `url(${images[8]})` }}>
              +{images.length - 8}
            </div>
          )}
        </div>
        <p className="text-red-600 font-semibold mt-5 ml-6">Dimensions</p>
            <div className="p-4 bg-[#fff1df] ">
                <p className="mt-4">Length: <br /> <strong>{product.dimensions?.length || "N/A"} cm</strong></p>
                <p className="mt-5">Breadth: <br /> <strong>{product.dimensions?.breadth || "N/A"} cm</strong></p>
                <p className="mt-5">Height: <br /><strong>{product.dimensions?.height || "N/A"} cm</strong></p>
            </div>
      </div>

      {/* Product Description */}
      <div className="md:col-span-3 mt-6">
        <h3 className="font-semibold text-lg">Product Description</h3>
        <p className="text-gray-600 mt-2">{product.description || "No description available."}</p>
      </div>
    </div>
    <RelatedProduct category={product.category} slug={product.slug}/>
    </>
  );
};

export default ProductDetail;