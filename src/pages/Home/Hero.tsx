import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with Local{" "}
            <span className="text-green-500">Contractors</span> Instantly
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Post your job, get competitive offers from verified contractors, and
            track progress in real-time. From plumbing to electrical work - find
            the right professional for any job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-green-700 text-white px-8 py-3 cursor-pointer"
            >
              Post a Job <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-500 cursor-pointer hover:primary-gradient px-8 py-3 bg-transparent"
            >
              Find Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
