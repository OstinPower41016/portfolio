import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import MainRouter from "./MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
