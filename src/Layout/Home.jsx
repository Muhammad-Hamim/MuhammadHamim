
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Features from "../Pages/Features";
import Hero from "../Pages/Hero";
import Portfolio from "../Pages/Portfolio";
import Skills from "../Pages/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Skills/>
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
