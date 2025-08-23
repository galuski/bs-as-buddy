import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Navbar({ setMenuOpen, menuOpen }) {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <RouterLink to="/" onClick={handleLinkClick}>
            {t("Inicio")}
          </RouterLink>
        </li>
        <li>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>
            {t("Acerca de mí")}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="faq" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>
            {t("FAQ")}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>
            {t("Contacto")}
          </ScrollLink>
        </li>
        <li>
          <RouterLink className="spanish-link" to="/spanish-classes" onClick={handleLinkClick}>
            {t("Clases de Español")}
          </RouterLink>
        </li>

      </ul>
    </nav>
  );
}