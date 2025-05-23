// components/category/SubCategoryProducts.jsx
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../Hooks/useProducts';
import ProductCard from "../RTShip/ProductCard";

const SubCategoryProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategorySlug = queryParams.get('subcategory');

  const { products, isLoading, error } = useProducts({
    subcategory: subcategorySlug
  });

  if (isLoading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        {subcategorySlug ? `${subcategorySlug.replace(/-/g, ' ')} Products` : 'All Products'}
      </h2>
      
      {products?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product?.images?.[0]?.image}
              title={product.name}
              price={product.price}
              slug={product.slug}
              soldOut={!product.in_stock}
            />
          ))}
        </div>
      ) : (
        <p className="text-center py-12">No products found in this subcategory.</p>
      )}
    </div>
  );
};

export default SubCategoryProducts;