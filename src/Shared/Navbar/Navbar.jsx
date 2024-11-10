import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      // Show/hide scroll to top button
      setShowScrollTop(scrollY > 500);

      // Update navbar background
      setIsScrolled(scrollY > 50);

      // Update active section
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          isScrolled
            ? "bg-black/50 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => scrollToTop()}
              className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 
                bg-clip-text text-transparent hover:opacity-80 transition-all"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 py-1 text-sm font-medium transition-all
                    ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 
                    bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left 
                    transition-transform duration-300
                    ${activeSection === item.id ? "scale-x-100" : "scale-x-0"}`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden gap-4">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 
          text-white shadow-lg transition-all duration-300 hover:bg-blue-700
          ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Navbar;
