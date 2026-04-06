import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloorPlanDecoration from "@/components/svg/FloorPlanDecoration";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="hidden sm:block">
          <FloorPlanDecoration className="opacity-40 -my-4" />
        </div>
        <About />
        <Services />
        <div className="hidden sm:block">
          <FloorPlanDecoration className="opacity-30 -my-4 scale-x-[-1]" />
        </div>
        <Portfolio />
        <Process />
        <div className="hidden sm:block">
          <FloorPlanDecoration className="opacity-30 -my-4" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
