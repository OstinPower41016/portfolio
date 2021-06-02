import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import MainRouter from "./MainRouter";
import useAnimateScroll from "./hooks/use/AnimateScroll";

function App() {
  useAnimateScroll();

  return (
    <BrowserRouter>
      <React.Suspense fallback="loading">
        <MainRouter />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
