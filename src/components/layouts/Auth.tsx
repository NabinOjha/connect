import { Outlet } from "react-router";
import Header from "./Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 flex items-center h-[calc(100vh-68px)] justify-center">
        <Outlet />
      </div>
    </>
  );
}
