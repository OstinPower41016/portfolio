import * as React from "react";

import MainView from "../../components/Home/MainView";
import MySkills from "../../components/Home/MySkills";
import MyWorks from "../../components/Home/MyWorks";
import WhatIDo from "../../components/Home/WhatIDo";
import NavBar from "../../components/NavBar";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <MainView />
      <NavBar />
      <WhatIDo />
      <MyWorks />
      <MySkills />
    </>
  );
};

export default Home;
