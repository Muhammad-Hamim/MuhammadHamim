import { LuGithub, LuLinkedin } from "react-icons/lu";
import logo from "../../assets/logo2.png";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="flex items-center flex-col border-t-[1px] border-slate-700 py-6">
      <Link to="/">
        <motion.img
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="w-48 h-fit mx-auto"
          src={logo}
          alt=""
        />
      </Link>
      <div>
        <div className="flex mt-6 gap-3">
          <a
            href="https://www.facebook.com/Muhammad.Hamim.01"
            rel="noreferrer"
            target="_blank"
            className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
            <FiFacebook />
          </a>
          <a
            href="https://github.com/Muhammad-Hamim"
            rel="noreferrer"
            target="_blank"
            className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadhamim01/"
            rel="noreferrer"
            target="_blank"
            className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
            <LuLinkedin />
          </a>
        </div>
      </div>
      <div>
        <p className="text-center text-slate-600 mt-4">
          &copy; 2023 All Rights Reserved By{" "}
          <Link to="/" className="font-bold hover:text-magenta duration-300">
            Muhammad Hamim
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
