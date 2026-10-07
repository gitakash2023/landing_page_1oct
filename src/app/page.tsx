import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsTicker from "@/components/StatsTicker";
import About from "@/components/About";
import Programs from "@/components/Programs";
import StatsSection from "@/components/Stats";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsTicker />
      <About />
      <Programs />
      <StatsSection />
      <Campus />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
