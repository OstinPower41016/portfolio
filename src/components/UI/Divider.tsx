import * as React from "react";

import "./styles/Divider.scss";

interface IDividerProps {}

const Divider: React.FunctionComponent<IDividerProps> = (props) => {
  return <div className="section-divider"></div>;
};

export default Divider;
