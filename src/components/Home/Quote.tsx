import * as React from "react";
import Container from "../layout/container";
import { useTranslation } from "react-i18next";

import "./styles/Quote.scss";

interface IQuoteProps {}

const Quote: React.FunctionComponent<IQuoteProps> = (props) => {
  const { t } = useTranslation();

  return (
    <section className="quote">
      <Container>
        <div className="quote__wrapper">
          <q className="quote__text">{t("quote.text")} </q>
          <span className="quote__author">{t("quote.author")}</span>
        </div>
      </Container>
    </section>
  );
};

export default Quote;
