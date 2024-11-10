import Navbar from "../Shared/Navbar/Navbar";
import Hero from "../Pages/Hero";
import Features from "../Pages/Features";
import Skills from "../Pages/Skills";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="features" className="min-h-screen">
        <Features />
      </section>
      
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      
      <section id="portfolio" className="min-h-screen">
        <Portfolio />
      </section>
      
      <section id="about" className="min-h-screen">
        <About />
      </section>
      
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Main;