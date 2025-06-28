import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                JobConnect
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-green-500"
              >
                How it Works
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-green-500"
              >
                Features
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">
                Sign In
              </Button>
              <Button className="bg-green-500 hover:bg-green-700 text-white">
                Join as Contractor
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
