import { Outlet } from "react-router";
import Header from "../common/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 flex items-start mt-16 justify-center">
        <Outlet />
      </div>
    </>
  );
}
