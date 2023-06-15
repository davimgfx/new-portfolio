import "./style.css"
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <footer className="footer gap-[30rem] min800:gap-[2rem] min800:flex-col ">
      <div className="footer__text">
        <p>
          Copyright &copy; 2023 <br className="hidden min300:block" /> {t("part1")} | <br className="hidden min540:block" /> {t("part2")}
        </p>
      </div>

      <div className="footer__iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
