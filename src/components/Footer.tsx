import * as React from "react";
import { FcLike } from "react-icons/fc";
import { useTranslation } from "react-i18next";

import "./styles/Footer.scss";
import Container from "./layout/container";
// icons

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <h4 className="footer__txt">{t("footer.thanks")}</h4>
        <span className="footer__icon" data-animation="like">
          <FcLike />
        </span>
        <div className="footer__copyright">
          <small>&copy; {t("footer.copyright")}</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
