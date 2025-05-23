import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, addBlog, updateBlog, deleteBlog } from "../services/BlogService";

export const useBlogs = () => {
  const queryClient = useQueryClient();

  // Fetch blogs
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 0, // Forces fresh data
    cacheTime: 0, // Prevents storing cached responses
  });

  // Create blog
  const addMutation = useMutation({
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });

  // Update blog
  const updateMutation = useMutation({
    mutationFn: updateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });

  // Delete blog
  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });

  return {
    blogs,
    isLoading,
    error,
    addMutation,
    updateMutation,
    deleteMutation,
  };
};
