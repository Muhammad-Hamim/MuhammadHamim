import { TypeAnimation } from "react-type-animation";
import { FaUserTie, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from "../assets/Muhammad-Hamim.pdf";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MuhammadHamim-resume.pdf";
    link.click();
  };
  return (
    <motion.section className="min-h-screen flex items-center justify-center relative">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="circuit-line"
          style={{ top: `${i * 20}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: i * 0.2 }}
        />
      ))}
      <div className="container lg:max-w-7xl mx-auto px-4 py-20 relative z-10 ">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl" />
        </div>
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="text-[var(--accent)]">Muhammad Hamim</span>
            </motion.h1>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              className="text-2xl lg:text-3xl text-[var(--text-secondary)]"
              repeat={Infinity}
            />
            <div className="mt-8 flex gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px var(--accent)",
                }}
                className="px-6 py-3 bg-[var(--accent)] text-black font-bold rounded"
                onClick={handleDownloadResume}
              >
                <FaDownload className="inline mr-2" /> Download CV
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px var(--accent)",
                }}
                className="px-6 py-3 border border-[var(--accent)] text-[var(--accent)] font-bold rounded"
              >
                <FaUserTie className="inline mr-2" /> Hire Me
              </motion.button>
            </div>
          </div>
          <motion.div className="relative">
            <div className="glass-card p-2">
              <img
                src={profile}
                alt="Muhammad Hamim"
                className="rounded w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
