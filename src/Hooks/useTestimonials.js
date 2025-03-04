import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial } from "../services/testimonialService";

export const useTestimonials = () => {
  const queryClient = useQueryClient();

  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  const addMutation = useMutation({
    mutationFn: addTestimonial,
    onSuccess: () => queryClient.invalidateQueries(["testimonials"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, formData }) => updateTestimonial(id, formData),
    onSuccess: () => queryClient.invalidateQueries(["testimonials"]),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: () => queryClient.invalidateQueries(["testimonials"]),
  });

  return { testimonials, isLoading, error, addMutation, updateMutation, deleteMutation };
};
