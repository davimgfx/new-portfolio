import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import brazilianFlag from "../../images/navbar/brazil-logo.png";
import englandFlag from "../../images/navbar/united-kingdom-logo.png";

const Header = () => {
  //Translation
  const { i18n, t } = useTranslation(["navbar"]);
  const [isSunHovered, setIsSunHovered] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      i18next.changeLanguage("en");
    } else if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("pt-BR");
    }
  }, []);

  const handleLanguageChange = () => {
    const currentLanguage = i18n.language === "pt-BR" ? "en" : "pt-BR";
    i18n.changeLanguage(currentLanguage);
  };

  const isBrazilianSelected = i18n.language === "pt-BR";

  //Navbar reponsive
  const [showLinks, setShowLinks] = useState(false);
  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="flex flex-row items-center justify-between px-12 fixed top-0 left-0 right-0 z-50 py-6 navbar">
      <h2 className="text-[1.8rem] text-[#754ef9] font-bold">Davimgfx</h2>
      <div className="flex gap-[2rem]">
        <ul className={`flex gap-[2rem] justify-center my-auto cursor-pointer ${ showLinks ? "responsive_nav" : "nav-phone"}`}>
          <a href="#home" onClick={toggleNavbar}>
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease min540:text-[3rem]">
              {t("home")}
            </li>
          </a>
          <a href="#about" onClick={toggleNavbar}>
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease min540:text-[3rem]">
              {t("about")}
            </li>
          </a>
          <a href="#projects" onClick={toggleNavbar}>
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease min540:text-[3rem]">
              {t("projects")}
            </li>
          </a>
          <a href="#contact" onClick={toggleNavbar}>
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease min540:text-[3rem]">
              {t("contact")}
            </li>
          </a>
        </ul>
        <i
          className={`bx ${
            isSunHovered ? "bxs-sun" : "bx-sun"
          } transform translate-y-[0.6rem] text-[2.2rem] cursor-pointer hover:text-[#754ef9] duration-500 ease`}
          onMouseEnter={() => setIsSunHovered(true)}
          onMouseLeave={() => setIsSunHovered(false)}></i>
        <div className="w-[5rem]" onClick={handleLanguageChange}>
          {isBrazilianSelected ? (
            <img
              src={brazilianFlag}
              alt="Bandeirapt-BR"
              className="w-[100%] border-solid border-[#150e2e85] rounded-lg cursor-pointer hover:border-[#754ef9] duration-500 ease"
            />
          ) : (
            <img
              src={englandFlag}
              alt="English_flag"
              className="w-[100%] border-solid border-[#150e2e85] rounded-lg cursor-pointer hover:border-[#754ef9] duration-500 ease"
            />
          )}
        </div>
        <button className="nav-btn" onClick={toggleNavbar}>
          {showLinks ? (<i class="bx bx-x transform text-[3.2rem] cursor-pointer text-[#3a3a3a] hover:text-[#754ef9]  min540:text-[5rem]"></i>) : (<i class="bx bx-menu transform text-[3.2rem] cursor-pointer text-[#3a3a3a] "></i>)}
          
        </button>
      </div>
    </nav>
  );
};

export default Header;
