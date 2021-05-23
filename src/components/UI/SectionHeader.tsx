import * as React from "react";

import "./styles/SectionHeader.scss";

interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
}

const alternateSubtitle = `No one lights a lamp in order to hide it behind the door: the purpose of light 
is to create more light to open people’s eyes, to reveal the marvels around.`;

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = ({
  title,
  subtitle = alternateSubtitle,
}) => {
  return (
    <div className="section-header">
      <header className="section-header__header">{title}</header>
      <span className="section-header__divider"></span>
      <h3 className="section-header__subtitle">{subtitle}</h3>
    </div>
  );
};

export default SectionHeader;
