import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
