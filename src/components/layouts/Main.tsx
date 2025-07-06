import { Outlet } from "react-router";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import Header from "./Header";
import { Spinner } from "../ui/spinner";
import { useAuth } from "@/hooks/useAuth";

export default function Main() {
  useAuth();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const loading = isFetching > 0 || isMutating > 0;

  return (
    <div>
      <Header />
      <div className="justify-center bg-gray-50 flex items-center min-h-[calc(100vh-68px)]">
        {loading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center w-full bg-black opacity-50">
            <Spinner />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
