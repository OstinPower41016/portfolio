import * as React from "react";
import cn from "classnames";

import "./styles/SectionHeader.scss";

interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: any;
}

const alternateSubtitle = `No one lights a lamp in order to hide it behind the door: the purpose of light 
is to create more light to open people’s eyes, to reveal the marvels around.`;

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = ({
  title,
  subtitle = alternateSubtitle,
  children,
}) => {
  const el = React.useRef<HTMLElement>(null);
  // const isVisibility = useScrollPartialVisibility(el);

  return (
    <div className="section-header">
      <header
        ref={el}
        className={cn("section-header__header", {
          // "section-header__header--active": isVisibility,
        })}
        data-animation="on"
        data-active-anim-class="section-header__header--active"
      >
        {title}
      </header>
      <span className="section-header__divider"></span>
      <h3
        className={cn("section-header__subtitle", {
          // "section-header__subtitle--active": isVisibility,
        })}
        data-animation="on"
        data-active-anim-class="section-header__subtitle--active"
      >
        {children ? children : subtitle}
      </h3>
    </div>
  );
};

export default SectionHeader;
