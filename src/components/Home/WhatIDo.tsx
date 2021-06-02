import * as React from "react";
import { HiCode } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import "./styles/WhatIDo.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
import BaseCard from "../UI/BaseCard";

interface IWhatIDoProps {}

const WhatIDo: React.FunctionComponent<IWhatIDoProps> = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <section className="what-i-do">
      <Container>
        <SectionHeader title={t("whatIDo.title")} subtitle={t("whatIDo.subtitle")} />

        <p className="what-i-do__text-content" data-animation="what-i-do__text-content-anim">
          {t("whatIDo.description")}
        </p>
      </Container>
    </section>
  );
};

export default WhatIDo;
