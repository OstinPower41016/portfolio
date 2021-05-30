import * as React from "react";

import Resume from "../../components/About/Resume";
import Container from "../../components/layout/container";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <section className="about">
      <Container>
        <Resume />
      </Container>
    </section>
  );
};

export default About;
