import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASEURL } from "../api";

const API_URL = `${BASEURL}/api`;

export const useProducts = (filters = {}) => {
  const queryClient = useQueryClient();

  const fetchProducts = async () => {
    const params = new URLSearchParams();

    // Add all filters to params
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.append(key, value);
      }
    });

    try {
      const { data } = await axios.get(`${API_URL}/products/?${params.toString()}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  };

  const createProduct = async (formData) => {
    try {
      const { data } = await axios.post(`${API_URL}/products/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create product');
    }
  };

  const updateProduct = async ({ slug, formData }) => {
    try {
      const { data } = await axios.patch(`${API_URL}/products/${slug}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update product');
    }
  };

  const deleteProduct = async (slug) => {
    try {
      await axios.delete(`${API_URL}/products/${slug}/`);
      return slug;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete product');
    }
  };

  const { 
    data: products, 
    isLoading, 
    error,
    isError,
    refetch 
  } = useQuery({
    queryKey: ["products", filters],
    queryFn: fetchProducts,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    products: products || [],
    isLoading,
    error,
    isError,
    refetch,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};