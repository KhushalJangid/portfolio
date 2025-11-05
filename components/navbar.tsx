import { useIsMobile } from "@/hooks/use-mobile";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
// import { Download, Menu, X } from "lucide-react";
import {Download, Menu, Close} from "@carbon/icons-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    console.log(href);
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      // Scroll to top before opening menu if we're at bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setIsOpen(true), 500); // Wait for scroll to complete
      } else {
        setIsOpen(true);
      }
    }
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-100 backdrop-blur border-b border-slate-800 bg-slate-950/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-emerald-400">Khushal Jangid</h1>
        {!isMobile ? (
          <>
            <nav className="flex gap-8 text-sm">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className={`relative hover:text-emerald-400 transition cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? "text-emerald-400" // border-b-2 border-emerald-400"
                      : "text-slate-400"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>
            <button
              className="border border-emerald-400 rounded-lg px-4 py-1 flex items-center gap-2 cursor-pointer hover:bg-emerald-400 hover:text-slate-950 transition "
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="h-4 w-4" />
              Résumé
            </button>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-black text-black hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-900"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:ml-2">Resume</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isOpen ? (
                <Close className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0  dark:bg-black z-50 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-3 flex justify-end">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Close className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start pt-10 space-y-6 px-4 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full max-w-xs"
                >
                  <Button
                    variant="ghost"
                    className="w-full text-xl py-4"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
