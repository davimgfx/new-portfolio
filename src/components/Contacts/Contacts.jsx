import { useTranslation } from "react-i18next";
import "./style.css";
const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title align-center flex flex-col">
          <h1 className="text-[7rem] text-center h1-text-shadow min800:text-[5rem]">
            {t("title")}
          </h1>
          <h2 className="text-center text-[16.2rem] -mt-[17.2rem] h2-text-header min800:text-[10.2rem] min800:-mt-[11.2rem] min480:hidden">
            {t("subtitle")}
          </h2>
          <h3 className="text-[2.5rem] text-[#754ef9] uppercase indent-[1rem] min620:text-center min480:my-[3rem]">
            {t("contact-phrase")}
          </h3>
        </div>

        <div className="flex gap-[5rem] mt-[2rem] min620:flex-col min620:text-center min620:gap-[1rem]">
          <div className="flex justify-start align-center gap-[2rem] my-[2rem] min620:mx-[auto]  min620:flex-col min620:justify-center">
            <i className="bx bx-map icon-contact"></i>
            <div className="my-auto">
              <h2 className="text-local-contact">{t("address")}</h2>
              <p className="description-p">Salvador, Bahia</p>
            </div>
          </div>
          <div className="flex justify-start align-center gap-[2rem] my-[2rem] min620:mx-[auto]  min620:flex-col min620:justify-center">
            <i className="bx bx-envelope icon-contact"></i>
            <div className="my-auto">
              <h2 className="text-local-contact">Email</h2>

              <a
                href="mailto:davifncosta@gmail.com"
                className="hover:text-[#754ef9] description-p">
                davifncosta@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
