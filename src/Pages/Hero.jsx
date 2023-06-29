import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaUserTie, FaDownload } from "react-icons/fa";
import heroBg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{ backgroundImage: `url('${heroBg}')` }}>
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
            <h1 className="text-6xl font-bold text-slate-100">Muhammad Hamim</h1>

            <h2 className="text-4xl font-semibold">
              <span className="text-slate-300">I am a </span>
              <span className="text-magenta">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1000,
                    "Tech Enthusiastic",
                    1000,
                    "Student",
                    1200,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>
          <div className="mt-5 space-x-2">
            <button className="btn btn-primary">
              <FaDownload /> Download Resume
            </button>
            <button className="btn btn-primary">
              <FaUserTie /> Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
