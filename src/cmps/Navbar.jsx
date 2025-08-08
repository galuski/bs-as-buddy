import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export function Navbar({ setMenuOpen, menuOpen }) {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav className='navbar'>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>{t("Inicio")}</Link ></li>
        <li><Link to="about" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>{t("Acerca de mí")}</Link ></li>
        <li><Link to="faq" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>{t("FAQ")}</Link ></li>
        <li><Link to="contact" spy={true} smooth={true} duration={500} onClick={handleLinkClick}>{t("Contacto")}</Link ></li>
        <li><a href="">{t("Clases de Español")}</a></li>
      </ul>
    </nav>
  );
}