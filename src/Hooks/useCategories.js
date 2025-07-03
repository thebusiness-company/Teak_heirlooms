import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://192.168.0.105:8000/api";

export const useCategories = () => {
  const queryClient = useQueryClient();

  const fetchCategories = async () => {
    const { data } = await axios.get(`${API_URL}/categories/`);
    return data;
  };

  const createCategory = async (formData) => {
    const { data } = await axios.post(`${API_URL}/categories/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const updateCategory = async ({ slug, formData }) => {
    const { data } = await axios.put(`${API_URL}/categories/${slug}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const deleteCategory = async (slug) => {
    await axios.delete(`${API_URL}/categories/${slug}/`);
    return slug;
  };

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  const createMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  return {
    categories,
    isLoading,
    error,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};



export const useSubCategories = (categorySlug = null) => {
  const queryClient = useQueryClient();

  const fetchSubCategories = async () => {
    const url = categorySlug 
      ? `${API_URL}/subcategories/?category=${categorySlug}`
      : `${API_URL}/subcategories/`;
    const { data } = await axios.get(url);
    return data;
  };

  const createSubCategory = async (formData) => {
    const { data } = await axios.post(`${API_URL}/subcategories/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const updateSubCategory = async ({ slug, formData }) => {
    const { data } = await axios.put(`${API_URL}/subcategories/${slug}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const deleteSubCategory = async (slug) => {
    await axios.delete(`${API_URL}/subcategories/${slug}/`);
    return slug;
  };

  const { data: subcategories, isLoading, error } = useQuery({
    queryKey: ['subcategories', categorySlug],
    queryFn: fetchSubCategories
  });

  const createMutation = useMutation({
    mutationFn: createSubCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subcategories'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateSubCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subcategories'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSubCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subcategories'] });
    },
  });

  return {
    subcategories,
    isLoading,
    error,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};