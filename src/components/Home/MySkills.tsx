import * as React from "react";

import "./styles/MySkills.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";

interface IMySkillsProps {}

const MySkills: React.FunctionComponent<IMySkillsProps> = (props) => {
  return (
    <section className="my-skills">
      <Container>
        <SectionHeader title="My Skills" />
      </Container>
    </section>
  );
};

export default MySkills;
