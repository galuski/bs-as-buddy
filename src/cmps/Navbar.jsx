import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import logo from './../../public/logo.svg';

import argentinaFlag from './../../public/flags/argentina.png';
import usaFlag from './../../public/flags/usa.png';

export function Navbar() {

    // פונקציה להחזרת הדגל המתאים לשפה
    const getFlag = (lang) => {
        switch (lang) {
            case 'es': return argentinaFlag;
            case 'en': return usaFlag;
            default: return ''; // אין דגל ברירת מחדל
        }
    };


    const getLanguageName = (lang) => {
        switch (lang) {
            case 'es': return 'Es';
            case 'en': return 'En';
            default: return 'Language';
        }
    };

    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [selectedFlag, setSelectedFlag] = useState(getFlag(i18n.language));
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);


    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        setSelectedFlag(getFlag(lang));
        setIsOpen(false);
    };

    useEffect(() => {
        const updateDirection = () => {
            document.documentElement.lang = i18n.language;
            document.documentElement.className = ""; // איפוס המחלקות כדי למנוע הצטברות
            document.documentElement.classList.add(i18n.language);
        };

        updateDirection();
    }, [i18n.language]);

    return (
        <nav className="navbar">
            <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bars" id="bar1" />
                <div className="bars" id="bar2" />
                <div className="bars" id="bar3" />
            </div>
            <a href="/"><img className="navbar-logo" src={logo} alt="logo" /></a>

            <ul className={menuOpen ? "open" : ""}>
                <li><a href="">{t("About me")}</a></li>
                <li><a href="">{t("Projects")}</a></li>
                <li><a href="">{t("Contact me")}</a></li>
            </ul>

            <div className="navbar-area-btns">
                {/* Dropdown */}
                <div className="dropdown">
                    <button onClick={toggleDropdown}>
                        {getLanguageName(selectedLanguage)}
                        <img src={selectedFlag} alt="flag" className="flag-icon" />
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <div className="dropdown-option" onClick={() => handleChangeLanguage('en')}>
                                En<img src={usaFlag} alt="USA Flag" className="flag-icon" />
                            </div>
                            <div className="dropdown-option" onClick={() => handleChangeLanguage('es')}>
                                Es<img src={argentinaFlag} alt="Argentina Flag" className="flag-icon" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}