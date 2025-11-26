import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <Navigation />
          <main className="relative">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
