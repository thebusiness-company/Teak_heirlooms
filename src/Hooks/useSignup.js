import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";

export const useAuth = () => {
  const signupMutation = useMutation({
    mutationFn: authService.signup,
  });

  return {
    signup: signupMutation.mutate,
    isSigningUp: signupMutation.isPending,
    signupError: signupMutation.error,
  };
};
