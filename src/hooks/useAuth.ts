import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { currentUser } from "@/services/api/auth";
import { useAuthStore } from "@/store/auth";

export function useAuth() {
  const { setAuth } = useAuthStore();

  const { data: userData, isSuccess, isLoading } = useQuery({
    queryKey: ["checkAuth"],
    queryFn: currentUser,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (isSuccess && userData) {
      setAuth(userData);
    }
  }, [isSuccess, userData]);

  return {
    isLoading,
    user: userData,
  };
}
