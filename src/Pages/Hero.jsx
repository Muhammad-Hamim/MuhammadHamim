import { TypeAnimation } from "react-type-animation";
import { FaUserTie, FaDownload } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import heroBg from "../assets/hero.jpg";
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
  const lineMotion = {
    offscreen: {
      x: "-500",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const textAnimation = {
    offscreen: {
      transform: "scaleX(0)",
      transformOrigin: "left",

      opacity: 0,
    },
    onscreen: {
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
      className="hero min-h-screen relative"
      style={{ backgroundImage: `url('${heroBg}')` }}>
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
        <motion.div className="h-fit flex gap-3">
          <motion.div
            variants={lineMotion}
            className="w-[15px] bg-magenta"></motion.div>
          <div className="my-8 space-y-2 ">
            <motion.h3
              variants={textAnimation}
              className="text-4xl font-medium text-slate-300">
              Hey, I&apos;m
            </motion.h3>
            <motion.h1
              variants={textAnimation}
              className="text-4xl lg:text-6xl font-bold text-slate-100">
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
                    "Tech Enthusiast",
                    2000,
                    "MERN stack Developer",
                    2000,
                  ]}
                  speed={70}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>
            <motion.div variants={textMotion} className="mt-5 space-x-2">
              <button
                onClick={handleDownloadResume}
                className="btn btn-primary">
                <FaDownload /> Download Resume
              </button>
              <ScrollLink
                to="contact"
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
                className="btn btn-primary">
                <FaUserTie /> Hire me
              </ScrollLink>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
