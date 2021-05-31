import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import MainRouter from "./MainRouter";
import useAnimateScroll from "./hooks/use/AnimateScroll";

function App() {
  useAnimateScroll();

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
