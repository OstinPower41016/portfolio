import * as React from "react";

import "./styles/MainViewSwitch.scss";
interface ISwitchProps {}

const Switch: React.FunctionComponent<ISwitchProps> = (props) => {
  return (
    <>
      <label htmlFor="switch" className="switch">
        <span className="switch__title">Language: </span>
        <input type="checkbox" id="switch" className="switch__input" />
        <span className="switch__control" data-lang-on="en" data-lang-off="ru"></span>
      </label>
    </>
  );
};

export default Switch;
