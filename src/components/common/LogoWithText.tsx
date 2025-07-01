import { Zap } from "lucide-react";

const LogoWithText = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
        <Zap className="w-5 h-5 text-white" />
      </div>
      <span className="ml-2 text-xl font-bold text-gray-900">JobConnect</span>
    </div>
  );
};

export default LogoWithText;
