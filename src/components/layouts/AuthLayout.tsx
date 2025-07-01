import { Outlet, useNavigate } from "react-router";
import LogoWithText from "../common/LogoWithText";

export default function AuthLayout() {
  // const navigation = useNavigate();

  return (
    <div className="">
      <div className="w-full flex justify-center py-6 bg-white">
        <LogoWithText />
      </div>
      <div className="bg-gray-50 flex items-start mt-16 justify-center">
        <Outlet />
      </div>
    </div>
  );
}
