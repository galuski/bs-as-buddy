import { useState } from "react";
import { useTranslation } from "react-i18next";
import usaFlag from './../../public/images/flags/usa.png';
import argentinaFlag from './../../public/images/flags/argentina.png';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = i18n.language;

  const languages = [
    { code: 'en', label: 'EN', flag: usaFlag },
    { code: 'es', label: 'ES', flag: argentinaFlag }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="language-btn">
        {languages.find(l => l.code === selectedLanguage)?.label}
        <img
          src={languages.find(l => l.code === selectedLanguage)?.flag}
          alt="flag"
          className="flag-icon"
        />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {languages
            .filter(lang => lang.code !== selectedLanguage)
            .map(lang => (
              <div
                key={lang.code}
                className="dropdown-option"
                onClick={() => handleChangeLanguage(lang.code)}
              >
                {lang.label} <img src={lang.flag} alt={`${lang.label} Flag`} className="flag-icon" />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}