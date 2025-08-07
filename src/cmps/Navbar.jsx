import { useTranslation } from 'react-i18next';

export function Navbar({ menuOpen }) {
  const { t } = useTranslation();

  return (
    <nav className='navbar'>
      <ul className={menuOpen ? "open" : ""}>
        <li><a href="">{t("Inicio")}</a></li>
        <li><a href="">{t("Acerca de mí")}</a></li>
        <li><a href="">{t("FAQ")}</a></li>
        <li><a href="">{t("Contacto")}</a></li>
        <li><a href="">{t("Clases de Español")}</a></li>
      </ul>
    </nav>
  );
}