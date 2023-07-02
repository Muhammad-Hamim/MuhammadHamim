import { BsDashLg } from "react-icons/bs";
import resume from "../assets/Muhammad-Hamim.pdf";
import { motion } from "framer-motion";
const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MuhammadHamim-resume.pdf";
    link.click();
  };

  const textMotion = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div id="about" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">
          Unveiling My Journey and Passions
        </h4>
        <h2 className="text-slate-100 text-6xl font-bold">About me</h2>
      </div>
      <div className="mt-10 mx-8 lg:mx-28">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
          className="grid lg:grid-cols-2 items-center justify-center gap-14">
          <motion.div variants={textMotion}>
            <img
              className="aboutImg mx-auto"
              src="https://i.ibb.co/ZBWt45G/rony.jpg"
              alt=""
            />
            <div className="mt-4 text-center">
              <motion.button
                variants={textMotion}
                onClick={handleDownloadResume}
                className="relative px-6 py-3 font-bold text-slate-200 group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-magenta rounded-sm group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-slate-200 rounded-sm" />
                <span className="relative">Download resume</span>
              </motion.button>
            </div>
          </motion.div>
          <div className="text-slate-300 text-lg">
            <motion.h1 variants={textMotion} className="text-3xl font-semibold">
              Hi! I am Muhammad Hamim.
            </motion.h1>
            <motion.p variants={textMotion} className="text-justify">
              <BsDashLg /> a passionate and versatile web developer with a
              diverse skill set. My expertise spans across HTML, CSS, Tailwind,
              Bootstrap, JavaScript, React, Node.js, Express.js, and MongoDB. I
              thrive on turning creative ideas into practical, visually
              appealing, and user-friendly websites. By combining design
              aesthetics with technical prowess, I craft seamless and intuitive
              user experiences. As a continuous learner, I stay updated with the
              latest industry trends, ensuring my solutions adhere to best
              practices. Whether it&apos;s building responsive front-end
              interfaces or developing robust back-end functionalities, I am
              committed to delivering high-quality results. Let&apos;s
              collaborate and embark on a journey to bring your web projects to
              life with innovation and excellence!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
