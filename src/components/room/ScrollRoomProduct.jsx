import { useProducts } from "../../Hooks/useProducts";
import { Link } from "react-router-dom";

const ScrollRoomProduct = () => {
  const { products, isLoading, error } = useProducts();

  const NewInProducts = products?.filter((product) => product.newin) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="max-w-8xl mx-auto text-center px-10 py-10">

      {NewInProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <div className="flex gap-4 md:gap-6 w-max">
            {NewInProducts.map((product) => (
              <div
                key={product.slug}
                className="min-w-[220px] sm:min-w-[250px] bg-white p-4 "
              >
                <Link to={`/product/${product.slug}`}>
                  <div className="w-full h-[200px] flex items-center justify-center overflow-hidden ">
                    <img
                      src={product.images[0]?.image || "/path/to/fallback-image.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mt-4 truncate text-[#9C0300]">{product.name}</h3>
                  <p className=" font-semibold">₹ {product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No New In products available.</p>
      )}
    </div>
  );
};

export default ScrollRoomProduct;
