import {useEffect, useState} from "react";
import { Blurhash } from "react-blurhash";
import { useTranslation } from "react-i18next";
const ProjectsDivs = ({ src, title, flexRowReverse, name, techs, linkCode, linkSite, imgAnimation, srcLoading }) => {
  const { t } = useTranslation(["projects"]);
  const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

  return (
    <div
      className={`projects flex ${
        flexRowReverse ? "flex-row-reverse" : ""
      } gap-[2rem] justify-center py-[3rem] mt-[3rem] min800:flex-col`}>
        
      <a
        href={linkSite}
        target="_blank"
        className={`projects-container-image md1024:${flexRowReverse ? "mr" : "ml"}-[2rem] my-auto min800:mx-auto`}>
            { !imageLoaded && (
                <Blurhash 
                hash={srcLoading}
                width={500}
                height={500}
                resolutionX={32}
                resolutionY={32}
                punch={1}
                />
            )}
        { imageLoaded && (<img src={src} alt="aumigos-project" className={imgAnimation} />)}
      </a>
      <div className="flex flex-col  w-[400px] text-center p-[1rem] projects-container-desc min800:mx-auto min480:w-auto">
        <h2 className="project-title">{title}</h2>
        <p className="text-[1.8rem] description-p mt-[1.2rem]  min480:mx-auto ">
          {t(`${name}`)}
        </p>
        <div className="flex justify-center gap-[1rem] my-[2rem] flex-wrap min480:mx-auto ">
          {techs.map((tech) => (
            <h2 className="projects-tech">{tech}</h2>
          ))}
        </div>
        <div className="flex justify-center gap-[1rem] ">
          <div className="flex">
            <a href={linkCode} target="_blank">
              <h2 className="projects-infos">
                {t("code")} <i className="fa-brands fa-github"></i>
              </h2>
            </a>
          </div>
          <div className="flex">
            <a href={linkSite} target="_blank">
              <h2 className="projects-infos">
                {t("code-live")}{" "}
                <i className="fa-solid fa-arrow-up-right-from-square text-[1.8rem]"></i>
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDivs;
