import { useTranslation } from "react-i18next";
import { Title } from "./Title";
import { CheakMarkIdea } from "./CheakMarkIdea";

export function Ideal() {
    const { t } = useTranslation();

    const items = [
        t("Querés viajar o vivir en países hispanohablantes"),
        t("Estás en Buenos Aires y querés practicar con alguien local"),
        t("Buscás ganar confianza al hablar"),
        t("Ya sabés un poco pero querés soltarte"),
        t("Si estás empezando desde cero (¡también es para vos!)"),
    ];

    return (
        <section className="ideal">
            <div className="ideal-title">
            <Title title={t("Ideal si...")} />
            </div>
            <ul className="ideal-list">
                {items.map((item, index) => (
                    <li key={index}>
                        <CheakMarkIdea />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
