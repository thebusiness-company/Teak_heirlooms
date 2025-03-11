import { useQuery } from "@tanstack/react-query";
import { fetchCollection } from "../services/Productcategroy";

export const useProductCat = () => {
  const { data: productCat, isLoading, error } = useQuery({
    queryKey: ["productCat"],
    queryFn: fetchCollection,
  });

  return {
    productCat,
    isLoading,
    error,
  };
}