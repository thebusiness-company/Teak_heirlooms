import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import authService from "../services/authService";

export const useAuth = () => {
  const queryClient = useQueryClient();

  // Get user data using useQuery
  const { data: user, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: authService.fetchUser,
    retry: false,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
    },
  });

  return { 
    user, 
    isLoading, 
    error, 
    login: loginMutation.mutate, 
    logout: authService.logout 
  };
};
