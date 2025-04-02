import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const useProducts = (filters = {}) => {
  const queryClient = useQueryClient();

  const fetchProducts = async () => {
    const params = new URLSearchParams();
    if (filters.subcategory) params.append('subcategory', filters.subcategory);
    
    const { data } = await axios.get(`${API_URL}/products/?${params.toString()}`);
    return data;
  };
  const createProduct = async (formData) => {
    console.log("hiiiiiiiiii")
    const { data } = await axios.post(`${API_URL}/products/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const updateProduct = async ({ slug, formData }) => {
    const { data } = await axios.patch(`${API_URL}/products/${slug}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const deleteProduct = async (slug) => {
    await axios.delete(`${API_URL}/products/${slug}/`);
    return slug;
  };

  // Updated to use object syntax for useQuery
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  // Updated to use object syntax for useMutation
  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return {
    products,
    isLoading,
    error,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};