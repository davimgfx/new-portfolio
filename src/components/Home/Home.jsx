import "./style.css"
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <section id="home" className="section-home">
      <div className="container">
        <div className=" flex gap-[5rem] justify-start min800:flex-col-reverse min800:gap-[0] min540:gap-[2rem]">
          <h1 className="text-[15rem] text-[#150e2e] h1-text-shadow min800:text-center min540:text-[8rem]">
            REACT
          </h1>
          <div className="flex gap-[5rem] justify-start min800:justify-center min800:mb-[-3rem] min540:hidden">
            <div className="w-[3rem] h-[4rem] my-auto flex justify-center social-media ">
              <a
                href="https://www.linkedin.com/in/davifncosta/"
                className="my-auto"
                target="_blank">
                <i className="bx bxl-linkedin-square text-[3rem]"></i>
              </a>
            </div>
            <div className="w-[5rem] h-[4rem] my-auto flex justify-center  social-media">
              <a
                href="https://github.com/davimgfx"
                className="my-auto"
                target="_blank">
                <i className="bx bxl-github text-[3rem]"></i>
              </a>
            </div>
            <div className="w-[3rem] h-[4rem] my-auto flex justify-center  social-media">
              <a
                href="https://docs.google.com/document/d/1YNGs1RQKiroGaeuBQKoO_0fr1lUpJ_TMopWq3sp7NfE/edit#heading=h.oxg6mjh8f3mu"
                target="_blank"
                className="my-auto">
                <i className="fa-solid fa-file-arrow-down text-[3rem]"></i>
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-[15rem] -mt-[10rem] text-[#754ef9] min800:text-[8rem] min800:-mt-[6rem] min800:text-center min540:-mt-[3rem] min540:text-[5rem]">
          DEVELOPER
        </h1>
        <div className="h-[1.2rem] bg-[#754ef9] rounded transform translate-y-[-4.5rem] min800:translate-y-[-2.5rem] w-full min800:w-[50rem] min800:mx-[auto] min540:w-[28rem]  min540:translate-y-[-1.5rem]"></div>
        <div className="flex flex-row-reverse">
          <p className="flex flex-end w-[40rem] -mt-[3.8rem] leading-10 font-sans description-p  min800:-mt-[0.8rem] min800:mx-[auto] min800:w-[auto] min800:text-center">
            {t("desc")}
            <br />
          </p>
          <i className="fa-regular fa-hand-wave text-black w-[3rem]"></i>
        </div>
        <div className="hidden gap-[5rem] justify-center  min540:flex mt-[2rem]">
            <div className="w-[3rem] h-[4rem] my-auto flex justify-center social-media ">
              <a
                href="https://www.linkedin.com/in/davifncosta/"
                className="my-auto"
                target="_blank">
                <i className="bx bxl-linkedin-square text-[3rem]"></i>
              </a>
            </div>
            <div className="w-[5rem] h-[4rem] my-auto flex justify-center  social-media">
              <a
                href="https://github.com/davimgfx"
                className="my-auto"
                target="_blank">
                <i className="bx bxl-github text-[3rem]"></i>
              </a>
            </div>
            <div className="w-[3rem] h-[4rem] my-auto flex justify-center  social-media">
              <a
                href="https://docs.google.com/document/d/1YNGs1RQKiroGaeuBQKoO_0fr1lUpJ_TMopWq3sp7NfE/edit#heading=h.oxg6mjh8f3mu"
                target="_blank"
                className="my-auto">
                <i className="fa-solid fa-file-arrow-down text-[3rem]"></i>
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Home;
