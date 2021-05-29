import * as React from "react";
import cn from "classnames";

import "./style.scss";

interface IContainerProps {
  className?: string;
}

const Container: React.FunctionComponent<IContainerProps> = (props) => {
  return (
    <div className={cn("container", { [props.className!]: props.className })}>{props.children}</div>
  );
};

export default Container;
