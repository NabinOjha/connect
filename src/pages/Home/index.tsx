import Header from "@/components/common/Header";
import Hero from "@/pages/Home/Hero";
import Stats from "@/pages/Home/Stats";
import HowItWorks from "@/pages/Home/HowItWorks";
import Features from "@/pages/Home/Features";
import Cta from "@/pages/Home/Cta";
import Footer from "@/components/common/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
