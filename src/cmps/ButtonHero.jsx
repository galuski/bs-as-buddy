import { useTranslation } from "react-i18next";

export function ButtonHero() {
    const { t } = useTranslation();

    const handleClick = () => {
        window.open("https://wa.me/5491159343218", "_blank");
    };


    return (
        <div className="hero-btn-container">
            <button onClick={handleClick} className="hero-btn">{t("Vamos a hablar")}</button>
        </div>
    );
}
