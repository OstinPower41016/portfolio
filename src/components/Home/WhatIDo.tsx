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

        <p className="what-i-do__text-content">
          Create websites from scratch using modern technologies and innovation in the field of the
          web. Revision of the existing code and introduction of new features. Components based code
          that allows you to maintain it for a long time and maintainability
        </p>
      </Container>
    </section>
  );
};

export default WhatIDo;
