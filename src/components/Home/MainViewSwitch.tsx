import * as React from "react";
import { useDispatch } from "react-redux";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { toggleLanguage } from "../../store/translate/translateSlice";
import "./styles/MainViewSwitch.scss";
interface ISwitchProps {}

const Switch: React.FunctionComponent<ISwitchProps> = (props) => {
  const [switchCheckbox, toggleSwitch] = React.useState(false);
  const { t } = useTranslation();

  const swithLanguageHandler = () => {
    toggleSwitch(!switchCheckbox);
    const currentLanguage = switchCheckbox ? "en" : "ru";
    i18n.changeLanguage(currentLanguage);
  };

  return (
    <>
      <label htmlFor="switch" className="switch">
        <span className="switch__title">{t("language")}: </span>
        <input
          type="checkbox"
          id="switch"
          className="switch__input"
          onClick={swithLanguageHandler}
          checked={switchCheckbox}
        />
        <span className="switch__control" data-lang-on="en" data-lang-off="ru"></span>
      </label>
    </>
  );
};

export default Switch;
