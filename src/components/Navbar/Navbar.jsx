import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import brazilianFlag from "../../images/navbar/brazil-logo.png";
import englandFlag from "../../images/navbar/united-kingdom-logo.png";
import { NavLinks } from "./NavLinks.js";
import "./style.css";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { i18n, t } = useTranslation(["navbar"]);
  const [isSunHovered, setIsSunHovered] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      i18n.changeLanguage("en");
    } else if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("pt-BR");
    }
  }, []);

  const handleLanguageChange = () => {
    const currentLanguage = i18n.language === "pt-BR" ? "en" : "pt-BR";
    i18n.changeLanguage(currentLanguage);
  };

  const isBrazilianSelected = i18n.language === "pt-BR";

  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };

  const toggleDarkMode = () => {
    toggleTheme();
  };

  const handleSunMouseEnter = () => {
    setIsSunHovered(true);
  };

  const handleSunMouseLeave = () => {
    setIsSunHovered(false);
  };

  return (
    <nav className={`flex flex-row items-center justify-between px-12 fixed top-0 left-0 right-0 z-50 py-6 navbar ${theme}`}>
      <h2 className="text-[1.8rem] text-[#754ef9] font-bold">Davimgfx</h2>
      <div className="flex gap-[2rem]">
        <ul className={`flex gap-[2rem] justify-center my-auto cursor-pointer ${showLinks ? "responsive_nav" : "nav-phone"}`}>
          {NavLinks.map((key, index) => (
            <a href={key.id} onClick={toggleNavbar} key={index}>
              <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease min540:text-[3rem] nav-links">
                {t(`${key.title.toLocaleLowerCase()}`)}
              </li>
            </a>
          ))}
        </ul>
        <i
          className={`bx transform translate-y-[0.6rem]
          md1024:translate-y-[0.8rem] text-[2.2rem] cursor-pointer hover:text-[#754ef9] duration-500 ease ${theme === "dark" ? "bx-sun" : "bx-moon"} ${isSunHovered && theme === "dark" ? "bxs-sun" : ""} ${isSunHovered && theme !== "dark" ? "bxs-moon" : ""}`}
          onMouseEnter={handleSunMouseEnter}
          onMouseLeave={handleSunMouseLeave}
          onClick={toggleDarkMode}
        ></i>
        <div className="w-[5rem]" onClick={handleLanguageChange}>
          <img
            src={isBrazilianSelected ? brazilianFlag : englandFlag}
            alt={isBrazilianSelected ? "Bandeira_brasileira" : "English_flag"}
            className="w-[100%] border-solid border-[#150e2e85] rounded-lg cursor-pointer hover:border-[#754ef9] duration-500 ease"
          />
        </div>
        <button className="nav-btn" onClick={toggleNavbar}>
          <i
            className={`bx bx-${showLinks ? "x" : "menu"} transform  cursor-pointer text-[#3a3a3a] min540:text-[3.6rem] translate-y-[0.1rem]`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
