import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
