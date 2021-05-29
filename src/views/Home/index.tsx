import * as React from "react";

import Contact from "../../components/Home/Contact";
import MySkills from "../../components/Home/MySkills";
import MyWorks from "../../components/Home/MyWorks";
import Quote from "../../components/Home/Quote";
import WhatIDo from "../../components/Home/WhatIDo";
import Divider from "../../components/UI/Divider";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <WhatIDo />
      <Divider />
      <MySkills />
      <Divider />
      <MyWorks />
      <Divider />
      <Quote />
      <Divider margin0 />
      <Contact />
    </>
  );
};

export default Home;
