import * as React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Divider from "./components/UI/Divider";
import Home from "./views/Home";
import Footer from "./components/Footer";
import MainView from "./components/Home/MainView";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <>
      <MainView />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Divider />
      <Footer />
    </>
  );
};

export default MainRouter;
