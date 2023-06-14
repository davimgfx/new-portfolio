import React from "react";
import { useTranslation } from "react-i18next";
import hoobank from "../../images/projects/hoobank_project.png";
import pulsegym from "../../images/projects/pulsegym_project.png";
const Projects = () => {
  const { t } = useTranslation(["projects"]);
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="about-title align-center flex flex-col">
          <h1 className="text-[7rem] text-[#150e2e] text-center z-[5] h1-text-shadow min800:text-[5rem] ">
          {t("title")}
          </h1>
          <h2 className="text-center text-[14rem] -mt-[15.2rem] text-[#150e2e48] min800:text-[8rem] min800:-mt-[9.2rem] min480:hidden">
            {t("subtitle")}
          </h2>
        </div>
        <div className="projects flex gap-[2rem] justify-center py-[3rem] mt-[3rem] min800:flex-col ">
          <a
            href="https://davimgfx.github.io/pulseGym/"
            target="_blank"
            className="projects-container-image my-auto md1024:ml-[2rem] min800:mx-auto min480:w-[200px] min480:h-[200px]">
            <img src={pulsegym} alt="" className="projects-image-1" />
          </a>
          <div className="flex flex-col  w-[400px] text-center p-[1rem] projects-container-desc  min800:mx-auto min480:w-[20rem] ">
            <h2 className=" text-[2.5rem] ">Pulse Gym 🏋️‍♀️</h2>
            <p className="text-[1.8rem] text-[#150e2e85] font-semibold mt-[1.2rem] ">
              {t("pulsegym")}
            </p>
            <div className="flex justify-center gap-[1rem] my-[2rem] flex-wrap min480:mx-auto ">
              <h2 className="p-[1rem] text-[1.5rem] projects-tech my-auto">
                React
              </h2>
              <h2 className="p-[1rem] text-[1.5rem] projects-tech">
                Tailwind CSS
              </h2>
            </div>
            <div className="flex justify-center gap-[1rem] ">
              <a href="https://github.com/davimgfx/pulseGym" target="_blank">
                <div className="flex">
                  <h2 className="p-[1rem] text-[2rem] font-semibold cursor-pointer hover:text-[#754ef9] duration-500 ease">
                    {t("code")} <i className="fa-brands fa-github"></i>
                  </h2>
                </div>
              </a>
              <a href="https://davimgfx.github.io/pulseGym/" target="_blank">
                <div className="flex">
                  <h2 className="p-[1rem] text-[2rem] font-semibold cursor-pointer hover:text-[#754ef9] duration-500 ease">
                  {t("code-live")} <i className="fa-solid fa-arrow-up-right-from-square text-[1.8rem]"></i>
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="projects flex flex-row-reverse gap-[2rem] justify-center py-[3rem] mt-[3rem] min800:flex-col">
          <a
            href="https://davimgfx.github.io/hoobank/"
            target="_blank"
            className="projects-container-image my-auto md1024:mr-[2rem] min800:mx-auto min480:w-[200px] min480:h-[200px]">
            <img src={hoobank} alt="" className="projects-image-2 " />
          </a>
          <div className="flex flex-col  w-[400px] text-center p-[1rem] projects-container-desc min800:mx-auto min480:w-[20rem]">
            <h2 className=" text-[2.5rem]">Hoobank 🤖</h2>
            <p className="text-[1.8rem] text-[#150e2e85] font-semibold mt-[1.2rem] min480:w-[20rem] min480:mx-auto ">
            {t("hoobank")}
            </p>
            <div className="flex justify-center gap-[1rem] my-[2rem] flex-wrap min480:mx-auto ">
              <h2 className="p-[1rem] text-[1.5rem] projects-tech my-auto">
                React
              </h2>
              <h2 className="p-[1rem] text-[1.5rem] projects-tech">
                Tailwind CSS
              </h2>
              <h2 className="p-[1rem] text-[1.5rem] projects-tech">
                JavaScript
              </h2>
              <h2 className="p-[1rem] text-[1.5rem] projects-tech">Sass</h2>
            </div>
            <div className="flex justify-center gap-[1rem] ">
              <div className="flex">
                <a href="https://github.com/davimgfx/hoobank" target="_blank">
                  <h2 className="p-[1rem] text-[2rem] font-semibold cursor-pointer hover:text-[#754ef9] duration-500 ease">
                  {t("code")} <i className="fa-brands fa-github"></i>
                  </h2>
                </a>
              </div>
              <div className="flex">
                <a href="https://davimgfx.github.io/hoobank/" target="_blank">
                  <h2 className="p-[1rem] text-[2rem] font-semibold cursor-pointer hover:text-[#754ef9] duration-500 ease">
                  {t("code-live")} <i className="fa-solid fa-arrow-up-right-from-square text-[1.8rem]"></i>
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
