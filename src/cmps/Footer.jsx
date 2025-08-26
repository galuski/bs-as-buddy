
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t, ready } = useTranslation();

    return (
        <footer>
            {t("© 2025 All rights reserved | Designed & developed by Gal-Code")}
        </footer>

    )
}
