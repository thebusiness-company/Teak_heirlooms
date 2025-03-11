import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBanners, addBanner, updateBanner, deleteBanner } from "../services/shopBannerService";

export const useShopBanner = () => {
  const queryClient = useQueryClient();

  // Fetch banners
  const { data: banners, isLoading, error } = useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
    staleTime: 0, // Ensures data is always refetched
    cacheTime: 0, // Prevents caching the response
  });

  // Add banner
  const addMutation = useMutation({
    mutationFn: addBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["banners"]);
    },
  });

  // Partial Update banner using PATCH
  const updateMutation = useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["banners"]);
    },
  });

  // Delete banner
  const deleteMutation = useMutation({
    mutationFn: deleteBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["banners"]);
    },
  });

  return { banners, isLoading, error, addMutation, updateMutation, deleteMutation };
};
