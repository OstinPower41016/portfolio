import * as React from "react";
import { HiCode } from "react-icons/hi";

import "./styles/WhatIDo.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
import BaseCard from "../UI/BaseCard";

interface IWhatIDoProps {}

const WhatIDo: React.FunctionComponent<IWhatIDoProps> = (props) => {
  return (
    <section className="what-i-do">
      <Container>
        <SectionHeader title="That is what i do" />

        <div className="what-i-do__cards-wrapper">
          <BaseCard className="what-i-do__cards-item">
            <div className="what-i-do__icon">
              <HiCode />
            </div>
            <h4 className="what-i-do__title">Coding</h4>
            <p className="what-i-do-description">
              Planning, model development, competent preparation of the development environment, I
              write high-quality projects
            </p>
          </BaseCard>
          <BaseCard className="what-i-do__cards-item">
            <div className="what-i-do__icon">
              <HiCode />
            </div>
            <h4 className="what-i-do__title">Coding</h4>
            <p className="what-i-do-description">
              Planning, model development, competent preparation of the development environment, I
              write high-quality projects
            </p>
          </BaseCard>
          <BaseCard className="what-i-do__cards-item">
            <div className="what-i-do__icon">
              <HiCode />
            </div>
            <h4 className="what-i-do__title">Coding</h4>
            <p className="what-i-do-description">
              Planning, model development, competent preparation of the development environment, I
              write high-quality projects
            </p>
          </BaseCard>
        </div>
      </Container>
    </section>
  );
};

export default WhatIDo;
