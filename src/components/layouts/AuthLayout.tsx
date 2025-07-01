import { Link, Outlet } from "react-router";
import LogoWithText from "../common/LogoWithText";

export default function AuthLayout() {
  return (
    <div className="">
      <div className="w-full flex justify-center py-6 bg-white">
        <Link to="/">
          <LogoWithText />
        </Link>
      </div>
      <div className="bg-gray-50 flex items-start mt-16 justify-center">
        <Outlet />
      </div>
    </div>
  );
}
