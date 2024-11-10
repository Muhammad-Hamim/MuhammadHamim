import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import logo from "../../assets/logo2.png";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="border-t border-slate-800 bg-gradient-to-b from-background to-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="block">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                src={logo}
                alt="Muhammad Hamim"
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm">
              Crafting exceptional web experiences with modern technologies and creative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block text-slate-400 hover:text-magenta transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:muhammadhamim.me@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-magenta transition-colors duration-300"
              >
                <LuMail className="text-magenta" />
                <span>muhammadhamim.me@gmail.com</span>
              </a>
              <a
                href="tel:+8801616026383"
                className="flex items-center gap-2 text-slate-400 hover:text-magenta transition-colors duration-300"
              >
                <LuPhone className="text-magenta" />
                <span>+880 1616 026383</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { icon: <FiFacebook />, url: "https://www.facebook.com/Muhammad.Hamim.01" },
                { icon: <LuGithub />, url: "https://github.com/Muhammad-Hamim" },
                { icon: <LuLinkedin />, url: "https://www.linkedin.com/in/muhammadhamim01/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800/50 rounded-lg text-slate-300 hover:text-magenta hover:bg-slate-800 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-slate-800 text-center"
        >
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
            <Link to="/" className="font-medium text-slate-400 hover:text-magenta transition-colors duration-300">
              Muhammad Hamim
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;