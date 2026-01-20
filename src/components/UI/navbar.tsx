import { useIsMobile } from "@/hooks/use-mobile";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "@carbon/icons-react";
import StaggeredMenu from "./StaggeredMenu";
import { Libre_Barcode_39_Text } from "next/font/google"

const libreBarcode = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const menuItems = [
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Skills", ariaLabel: "Learn about our skills", link: "#skills" },
  {
    label: "Experience",
    ariaLabel: "Learn about our experience",
    link: "#experience",
  },
  {
    label: "Projects",
    ariaLabel: "Learn about our projects",
    link: "#projects",
  },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  // const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 200;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (bottom) {
          setActiveSection("contact");
        } else if (
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
  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 z-100">
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          // displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#00d492","#f4a8ff", "#B19EEF",]}
          // logoUrl="/path-to-your-logo.svg"
          logoText="Khushal"
          accentColor="#00d492"
          // onMenuOpen={() => console.log("Menu opened")}
          // onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    );
  }
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-100 backdrop-blur border-b border-slate-800 bg-slate-950/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <h1 className="text-xl font-bold text-emerald-400">Khushal Jangid</h1> */}
        <span className={`${libreBarcode.className} text-3xl sm:text-4xl font-bold`}>Khushal</span>

        <nav className="flex gap-8 text-sm">
          {navItems.map((item) => (
            <div
              key={item.href}
              className={`relative hover:text-emerald-400 transition cursor-pointer ${activeSection === item.href.substring(1)
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
      </div>
    </motion.header>
  );
}

export default Navbar;
