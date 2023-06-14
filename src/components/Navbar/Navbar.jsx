import React, { useEffect } from "react";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import brazilianFlag from "../../images/navbar/brazil-logo.png";
import englandFlag from "../../images/navbar/united-kingdom-logo.png";

const Header = () => {
  const { i18n, t } = useTranslation(["navbar"]);

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

  return (
    <nav className="flex flex-row items-center justify-between px-12 fixed top-0 left-0 right-0 z-50 py-6 navbar ">
     <h2 className="text-[1.8rem] text-[#754ef9] font-bold">Davimgfx</h2>
      <div className="flex gap-[2rem]">
        <ul className="flex gap-[2rem] justify-center my-auto cursor-pointer">
          <a href="#home">
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease" >{t("home")}</li>
          </a>
          <a href="#about">
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease" >{t("about")}</li>
          </a>
          <a href="#projects">
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease">{t("projects")}</li>
          </a>
          <a href="#contact">
            <li className="text-[1.8rem] hover:text-[#754ef9] duration-500 ease">{t("contact")}</li>
          </a>
        </ul>
        <div className="w-[5rem]" onClick={handleLanguageChange}>
          {isBrazilianSelected ? (
            <img src={brazilianFlag} alt="Bandeirapt-BR" className="w-[100%] border-solid border-[#150e2e85] rounded-lg cursor-pointer hover:border-[#754ef9] duration-500 ease" />
          ) : (
            <img src={englandFlag} alt="English_flag" className="w-[100%] border-solid border-[#150e2e85] rounded-lg cursor-pointer hover:border-[#754ef9] duration-500 ease"  />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;