import { TypeAnimation } from "react-type-animation";
import { FaUserTie, FaDownload } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
// import heroBg from "../assets/hero.jpg";
import { useContext } from "react";
import { StateContext } from "../Components/Context";
import resume from "../assets/Muhammad-Hamim.pdf";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const { isOpen, setIsOpen } = useContext(StateContext);
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MuhammadHamim-resume.pdf";
    link.click();
  };
  const textAnimation = {
    offscreen: {
      x: -400,
      transform: "scaleX(0)",
      transformOrigin: "left",

      opacity: 0,
    },
    onscreen: {
      x: 0,
      transform: "scaleX(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const textMotion = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  return (
    <div
      id="home"
      className="hero min-h-screen relative bg-background"
      // style={{ backgroundImage: `url('${heroBg}')` }}
    >
      <div>
        <h2 className="text-slate-100 text-4xl absolute top-8 right-8 lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </h2>
      </div>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="hero-content ">
        <motion.div className="">
          <motion.h3
            variants={textAnimation}
            className="text-4xl font-medium text-slate-300">
            Hey, I&apos;m
          </motion.h3>
          <motion.h1
            variants={textAnimation}
            className="text-4xl my-3 lg:text-6xl font-bold text-slate-100">
            Muhammad Hamim
          </motion.h1>

          <motion.h2
            variants={textMotion}
            className="text-2xl lg:text-4xl font-semibold">
            <span className="text-slate-300">I am a </span>
            <span className="text-magenta">
              <TypeAnimation
                sequence={[
                  "Front End Developer",
                  2000,
                  "Tech Enthusiastic",
                  2000,
                  "MERN stack Developer",
                  2000,
                ]}
                speed={70}
                repeat={Infinity}
              />
            </span>
          </motion.h2>
          <motion.div
            variants={textMotion}
            className="mt-5 flex items-center gap-5 flex-wrap">
            <button
              onClick={handleDownloadResume}
              className="button hover:text-magenta flex items-center gap-1">
              <span>
                <FaDownload />
              </span>
              <span>Download Resume</span>
            </button>
            <ScrollLink
              to="contact"
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="button hover:text-magenta flex items-center gap-1">
              <span>
                <FaUserTie />
              </span>
              <span>Hire me</span>
            </ScrollLink>
            {/* <button
                onClick={handleDownloadResume}
                className="button flex items-center gap-1 hover:text-magenta">
                <span>
                  <FaDownload />
                </span>
                <span>Download Resume</span>
              </button>
              <ScrollLink
                // to="contact"
                // spy={true}
                // offset={-70}
                // smooth={true}
                // duration={500}
                className="button flex items-center gap-1 w-fit hover:text-magenta">
                <span>
                  <FaUserTie />
                </span>
                <span>Hire me</span>
              </ScrollLink> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
