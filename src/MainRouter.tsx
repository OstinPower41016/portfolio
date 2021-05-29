import * as React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import MainView from "./components/Home/MainView";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Blog from "./views/Blog";
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import Services from "./views/Services";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      {location.pathname === "/" && <MainView />}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
};

export default MainRouter;
