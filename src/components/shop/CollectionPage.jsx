import { useLocation } from 'react-router-dom';
import { useProducts } from '../../Hooks/useProducts';
import ProductCard from "../RTShip/ProductCard";

const CollectionPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const collectionSlug = queryParams.get('collection');

  // Map collection IDs to display names
  const collectionNames = {
    'collection1': 'Significant Essence',
    'collection2': 'Elegant Reflections',
    'collection3': 'Modern Minimalist',
    'collection4': 'Vintage Charm'
  };

  const { products, isLoading, error } = useProducts({
    collection: collectionSlug
  });

  if (isLoading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        {collectionSlug ? collectionNames[collectionSlug] || `${collectionSlug.replace(/-/g, ' ')}` : 'All Products'}
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
        <p className="text-center py-12">No products found in this collection.</p>
      )}
    </div>
  );
};

export default CollectionPage;