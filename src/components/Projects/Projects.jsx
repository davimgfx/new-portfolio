import { useTranslation } from "react-i18next";
import aumigos from "../../images/projects/aumigos_project.png";
import cryptoNeves from "../../images/projects/crypto_project.png";
import hoobank from "../../images/projects/hoobank_project.png";
import pulsegym from "../../images/projects/pulsegym_project.png";
import ProjectsDivs from "./ProjectsDivs";
import "./style.css";

const Projects = () => {
  const { t } = useTranslation(["projects"]);
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Title */}
        <div className="align-center flex flex-col">
          <h1 className="text-[7rem] text-center  h1-text-shadow min800:text-[5rem] ">
            {t("title")}
          </h1>
          <h2 className="text-center text-[14rem] -mt-[15.2rem] h2-text-header min800:text-[8.5rem] min800:-mt-[9.5rem] min480:hidden">
            {t("subtitle")}
          </h2>
        </div>
        {/* Project 4 */}
        <ProjectsDivs
          src={aumigos}
          title="Aumigos 🐶"
          flexRowReverse={true}
          name="aumigos"
          techs={["React", "Tailwind CSS", "Firebase"]}
          linkCode="https://github.com/davimgfx/aumigos"
          linkSite="https://aumigos-casa.vercel.app/"
          imgAnimation="projects-image-4"
          srcLoading="LWQ+~M~qaIn4Io%$S#V@_2DOVstR"
        />
        {/* Project 3 */}
        <ProjectsDivs
          src={cryptoNeves}
          title="Crypto Neves 💰"
          flexRowReverse={false}
          name="cryptoneves"
          techs={["React", "Material UI", "Firebase"]}
          linkCode="https://github.com/davimgfx/crypto-neves"
          linkSite="https://crypto-neves.vercel.app/"
          imgAnimation="projects-image-3"
          srcLoading="L05q-XP,00ul~EF@WH+$tUoNx9R#"
        />
        {/* Project 2 */}
        <ProjectsDivs
          src={hoobank}
          title="Hoobank 🤖"
          flexRowReverse={true}
          name="hoobank"
          techs={["React", "Tailwind CSS", "JavaScript", "Sass"]}
          linkCode="https://github.com/davimgfx/hoobank"
          linkSite="https://davimgfx.github.io/hoobank/"
          imgAnimation="projects-image-2"
          srcLoading="L25huzxS00t:*0I9R4?vI8tTs;Mw"
        />
        {/* Project 1 */}
        <ProjectsDivs
          src={pulsegym}
          title="Pulse Gym 🏋️‍♀️"
          flexRowReverse={false}
          name="pulsegym"
          techs={["React", "Tailwind CSS"]}
          linkCode="https://github.com/davimgfx/pulseGym"
          linkSite="https://davimgfx.github.io/pulseGym/"
          imgAnimation="projects-image-1"
          srcLoading="LE9ju}WFt7oe00a$Rjoc~qWBt7a#"
        />
      </div>
    </section>
  );
};

export default Projects;
