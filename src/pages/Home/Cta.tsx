import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
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
  );
}
