import { useState, useEffect } from "react";

function NavBar({ sections }) {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const sectionElements = sections.map((section) =>
      document.getElementById(section.id)
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <nav className="fixed left-8 top-1/2 transform md:-translate-y-1/2 hidden md:flex flex-col items-start space-y-6">
      {sections.map((section, index) => (
        <div key={section.id} className="relative">
          <a
            href={`#${section.id}`}
            className="relative flex items-center space-x-3 z-10 group"
            onClick={() => setActiveSection(section.id)}
          >
            {/* Circle */}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md group-hover:bg-orange transition-colors ${
                activeSection === section.id ? "bg-orange" : "bg-light-orange"
              }`}
            ></div>
            {/* Text */}
            <span
              className={`group-hover:font-bold transition-colors text-xs ${
                activeSection === section.id ? "font-bold" : ""
              }`}
            >
              {section.label}
            </span>
          </a>
          {/* Vertical Line */}
          {index < sections.length - 1 && (
            <div className="absolute w-1 bg-gray-200 h-6 left-2.5 transform -translate-x-1/2 z-0"></div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default NavBar;
