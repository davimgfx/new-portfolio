import React from "react";
import img from "../../images/about/profile-image.png";
import { AboutTechs } from "./AboutTechs";
import { useTranslation } from "react-i18next";
const About = () => {
const { t } = useTranslation(["about"]);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h1 className="text-[7rem] text-[#150e2e] text-center z-[5] h1-text-shadow  min800:text-[5rem] ">
          {t("title")}
          </h1>
          <h2 className="text-center text-[17.2rem] -mt-[17.8rem] text-[#150e2e48] min800:text-[12rem] min800:-mt-[12.2rem] min480:hidden">
            {t("subtitle")}
          </h2>
          <div className="about_text flex gap-[3.5rem] min800:flex-col min800:mx-[auto] min480:mt-[3rem]">
            <img
              src={img}
              alt="foto1"
              className="w-[28rem] rounded-xl min800:mx-[auto]"
            />
            <div>
              <h2 className="text-[2.5rem] text-[#754ef9] uppercase min800:text-center">
                {t("about-phrase")}
              </h2>
              <p className="text-[1.8rem]  leading-10 font-sans text-[#150e2e83] ">
                {t("desc1")} <br />
                <br />
                {t("desc2")} <br />
                <br />
                {t("desc3")}
              </p>
            </div>
          </div>
          <div className="about_skills">
            <h2 className="text-[3.2rem] text-[#150e2e] uppercase text-center mt-[8rem] mb-[2rem]">
              Tech Stack:
            </h2>
            <div className="flex flex-wrap justify-center align-center mx-auto gap-[0rem]">
              {AboutTechs.map((key, index) => {
                return (
                  <div className="flex justify-center flex-col mx-[auto] " key={index}>
                    <div className="diamond-border flex justify-center">
                      <i
                        className={`bx ${key.icon} text-[2.5rem] text-center my-auto text-[white] z-[3]`}></i>
                    </div>
                    <h2 className="text-center text-[2.1rem] font-semibold ">
                      {key.name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
