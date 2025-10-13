import { AnimatedBackground } from "./components/AnimatedBackground";
import { GridBackground } from "./components/GridBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Examples } from "./components/Examples";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <GridBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <HowItWorks />
        <Examples />
        <Features />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}