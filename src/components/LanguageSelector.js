import React from "react";
import { withTranslation } from "react-i18next";
import { changeLanguage } from "../api/apiCalls";

const LanguageSelector = (props) => {
  const onChangeLangugae = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  return (
    <div className="container">
      <img
        src="https://flagcdn.com/16x12/tr.png"
        alt="Turkish Flag"
        onClick={() => onChangeLangugae("tr")}
        style={{ cursor: "pointer" }}
      ></img>
      &nbsp;
      <img
        src="https://flagcdn.com/16x12/us.png"
        alt="US Flag"
        onClick={() => onChangeLangugae("en")}
        style={{ cursor: "pointer" }}
      ></img>
    </div>
  );
};

export default withTranslation()(LanguageSelector);
