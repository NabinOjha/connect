import { Zap } from "lucide-react";
import { Link } from "react-router";

const LogoWithText = () => {
  return (
    <Link to="/">
      <div className="flex items-center cursor-pointer">
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="ml-2 text-xl font-bold text-gray-900">JobConnect</span>
      </div>
    </Link>
  );
};

export default LogoWithText;
