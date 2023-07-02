import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaUserTie, FaDownload } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import heroBg from "../assets/hero.jpg";
import { useContext } from "react";
import { StateContext } from "../Components/Context";
import resume from "../assets/Muhammad-Hamim.pdf";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const { isOpen, setIsOpen } = useContext(StateContext);
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MuhammadHamim-resume.pdf";
    link.click();
  };
  return (
    <div
      id="home"
      className="hero min-h-screen relative"
      style={{ backgroundImage: `url('${heroBg}')` }}>
      <div className="">
        <h2 className="text-slate-100 text-4xl absolute top-8 right-8 lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </h2>
      </div>
      <div className="hero-content text-center">
        <div className="-mt-[25%]">
          <div className="flex justify-center mt-16">
            <Link to="/">
              <img
                className="w-72 h-72 rounded-full border-slate-700 border-[16px] cursor-pointer"
                src="https://i.ibb.co/ZBWt45G/rony.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="mt-8 space-y-2 ">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-100">
              Muhammad Hamim
            </h1>

            <h2 className="text-2xl lg:text-4xl font-semibold">
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
            </h2>
          </div>
          <div className="mt-5 space-x-2">
            <button onClick={handleDownloadResume} className="btn btn-primary">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
