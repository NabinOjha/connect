import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import LogoWithText from "./LogoWithText";

export default function Header() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <LogoWithText />
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
              <Link to="/auth/signin">
                <Button variant="ghost" className="text-gray-600">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/contracter">
                <Button className="bg-green-500 hover:bg-green-700 text-white">
                  Join as Contractor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
