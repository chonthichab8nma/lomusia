import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();


const menuItems = [
  { label: "home", id: "home" },
  { label: "features", id: "features" },
  { label: "pricing", id: "pricing" },
  { label: "contact", id: "contact" },
];


  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      const scrollPosition = window.scrollY + offset;

      menuItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
    setIsOpen(false);
  };


  return (
    <nav className="bg-red  fixed top-0 w-full z-1000 font-sans h-17.5">
      <div className="max-w-full h-full mx-auto px-4 md:px-10 flex items-center relative">
        <div className="shrink-0 z-10">
          <a onClick={() => scrollToSection("home")} className="cursor-pointer">
            <img
              src="/image/logo1.png"
              alt="Logo"
              className="h-14 md:h-16 w-auto"
            />
          </a>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex list-none gap-7.5 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => scrollToSection(item.id)}
                  className={`font-prompt font-semibold cursor-pointer transition-all duration-300 text-lg
                    ${
                      activeSection === item.id
                        ? "text-cream"
                        : "text-white hover:text-cream"
                    }`}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="ml-auto md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div
          className={`
          md:hidden absolute top-17.5 left-0 w-full z-50 transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <ul className="bg-white flex flex-col items-center gap-6 py-10 shadow-xl border-t border-gray-100">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <a
                  onClick={() => scrollToSection(item.id)}
                  className={`font-prompt text-xl font-bold block py-2 transition-colors
                    ${
                      activeSection === item.id
                        ? "text-greenold"
                        : "text-green"
                    }`}
                >
                  {t(item.label)}

                </a>
              </li>
            ))}
          </ul>
          <div
            className="h-screen bg-black/40"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
                    {/* Language Switcher (Desktop) */}
      <div className="hidden md:flex items-center gap-2 ml-auto">
        <button
          onClick={() => i18n.changeLanguage("th")}
          className={`px-3 py-1 text-sm font-semibold rounded transition
            ${
              i18n.language === "th"
                ? "bg-cream text-red"
                : "text-white hover:text-cream"
            }`}
        >
          TH
        </button>

        <span className="text-white/50">|</span>

        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`px-3 py-1 text-sm font-semibold rounded transition
            ${
              i18n.language === "en"
                ? "bg-cream text-red"
                : "text-white hover:text-cream"
            }`}
        >
          EN
        </button>
      </div>

      </div>

    </nav>
  );
};

export default Navbar;
