import React, { useContext } from "react";
import "./LanguageSwitcher.css";
import { LanguageContext } from "../LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <button onClick={toggleLanguage} className="language-switcher">
      {language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
    </button>
  );
};

export default LanguageSwitcher;
