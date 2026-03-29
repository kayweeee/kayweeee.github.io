import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function NavBar({ sections }) {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = sections.map((section) =>
      document.getElementById(section.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-nav border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("intro")}
          className="font-display text-xl text-orange hover:opacity-80 transition-opacity"
          aria-label="Go to top"
        >
          KW
        </button>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? "text-orange bg-surface"
                  : "text-gray-500 hover:text-gray-900 hover:bg-surface"
              }`}
              aria-current={activeSection === section.id ? "page" : undefined}
            >
              {section.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-orange rounded-card-sm 
                       hover:opacity-90 transition-all duration-200 shadow-sm"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <FontAwesomeIcon
            icon={mobileOpen ? faXmark : faBars}
            className="text-gray-700"
            size="lg"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-border-subtle overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "text-orange bg-surface"
                      : "text-gray-600 hover:bg-surface"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
