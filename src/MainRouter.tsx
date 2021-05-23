import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default MainRouter;
