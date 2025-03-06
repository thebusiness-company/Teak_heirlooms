// src/hooks/useProducts.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../services/productService";

export const useProducts = () => {
  const queryClient = useQueryClient();

  // Fetch products
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Add or update product
  const mutation = useMutation({
    mutationFn: async ({ slug, formData }) => {
      return slug ? updateProduct(slug, formData) : addProduct(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Delete product
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return {
    products,
    isLoading,
    error,
    mutation,
    deleteMutation,
  };
};
