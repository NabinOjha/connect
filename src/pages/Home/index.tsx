import Hero from "@/pages/Home/Hero";
import Stats from "@/pages/Home/Stats";
import HowItWorks from "@/pages/Home/HowItWorks";
import Features from "@/pages/Home/Features";
import Cta from "@/pages/Home/Cta";
import Footer from "@/components/layouts/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
