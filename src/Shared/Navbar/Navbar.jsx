import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-primary/90 backdrop-blur-xl fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-[var(--accent)]">
          My Portfolio
        </Link>
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:text-[var(--accent)]">Home</Link>
          <Link to="/portfolio" className="text-white hover:text-[var(--accent)]">Portfolio</Link>
          <Link to="/about" className="text-white hover:text-[var(--accent)]">About</Link>
          <Link to="/contact" className="text-white hover:text-[var(--accent)]">Contact</Link>
        </div>
        <div className="lg:hidden">
          <button className="text-white">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;