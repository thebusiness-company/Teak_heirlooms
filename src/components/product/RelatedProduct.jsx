import ProductCard from "../RTShip/ProductCard";
import { useProducts } from "../../Hooks/useProducts";

const RelatedProduct = ({ category, slug }) => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  console.log("Selected Category:", category);
  console.log("Selected slug:", slug);

  console.log("All Products:", products);

  // Ensure products is an array before filtering
  const relatedProducts = Array.isArray(products)
    ? products.filter((item) => 
        item.category?.toLowerCase() === category?.toLowerCase() && item.slug !== slug
      )
    : [];

  console.log("Filtered Related Products:", relatedProducts);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <ProductCard
              key={item.id} // Ensure a unique key
              image={item?.images?.[0]?.image || item.image} 
              title={item?.name}
              price={item?.price}
              slug={item?.slug}
              soldOut={!item.in_stock} // Assuming in_stock is a boolean
            />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
