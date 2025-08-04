import { useTranslation } from "react-i18next";

export function ButtonHero() {
    const { t } = useTranslation();

    return (
        <div className="hero-btn-container">
            <button className="hero-btn">{t("Vamos a hablar")}</button>
        </div>
    );
}
