import * as React from "react";
import cn from "classnames";

import "./styles/Divider.scss";

interface IDividerProps {
  margin0?: boolean;
}

const Divider: React.FunctionComponent<IDividerProps> = (props) => {
  return <div className={cn("section-divider", { "section-divider__mt": !props.margin0 })}></div>;
};

export default Divider;
