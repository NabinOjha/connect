import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  return (
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
                Describe your job, add photos, set your budget, and specify your
                location. It takes less than 5 minutes.
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
                Monitor job progress in real-time, communicate directly, and pay
                securely when the work is completed to your satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
