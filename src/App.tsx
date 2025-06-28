import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with Local{" "}
              <span className="text-green-500">Contractors</span> Instantly
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Post your job, get competitive offers from verified contractors,
              and track progress in real-time. From plumbing to electrical work
              - find the right professional for any job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-700 text-white px-8 py-3"
              >
                Post a Job <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-3 bg-transparent"
              >
                Find Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                5,000+
              </div>
              <div className="text-gray-600">Verified Contractors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How JobConnect Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and secure way to get your job done
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white border-none">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Post Your Job
                </h3>
                <p className="text-gray-600">
                  Describe your job, add photos, set your budget, and specify
                  your location. It takes less than 5 minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white border-none">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Receive Offers
                </h3>
                <p className="text-gray-600">
                  Local contractors will send you competitive offers. Compare
                  prices, reviews, and portfolios to choose the best fit.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white border-none">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Track & Pay
                </h3>
                <p className="text-gray-600">
                  Monitor job progress in real-time, communicate directly, and
                  pay securely when the work is completed to your satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-30 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JobConnect?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a successful project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Verified Contractors
                </h3>
                <p className="text-gray-600">
                  All contractors are background-checked and verified with
                  proper licenses and insurance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Location-Based Matching
                </h3>
                <p className="text-gray-600">
                  Find contractors in your area for faster response times and
                  local expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Rating System
                </h3>
                <p className="text-gray-600">
                  Transparent reviews and ratings help you choose the best
                  contractor for your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-Time Tracking
                </h3>
                <p className="text-gray-600">
                  Monitor job progress, communicate instantly, and get updates
                  every step of the way.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure Payments
                </h3>
                <p className="text-gray-600">
                  Escrow-protected payments ensure contractors get paid and
                  customers get quality work.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Our customer support team is available around the clock to
                  help resolve any issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers and contractors on JobConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3"
            >
              Post Your First Job
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-green-600 px-8 py-3 bg-transparent"
            >
              Join as Contractor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
