import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Features from "../Pages/Features";
import Hero from "../Pages/Hero";
import Portfolio from "../Pages/Portfolio";
import Skills from "../Pages/Skills";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Skills />
      <Portfolio />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
