import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">JobConnect</span>
            </div>
            <p className="text-gray-400">
              Connecting customers with trusted local contractors for all your
              home service needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Contractors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Safety
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Contractors</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Find Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contractor App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JobConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
