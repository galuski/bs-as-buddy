import { useTranslation } from "react-i18next";
import { Title } from "./Title";
import { ButtonHero } from "./ButtonHero";

export function ExploreSpanish() {
    const { t } = useTranslation();

    return (
        <section className="explore-spanish">


            <Title title={t("Clases de Español Conversacional")} />
            <div className="speech-container">
                <div className="speech-txt">
                    <p><b>{t("Aprendé español de forma natural, divertida y a tu ritmo")}</b></p>
                    <p>{t("¿Querés mejorar tu español sin estrés y con conversaciones reales? Te ofrezco clases personalizadas de español conversacional, para todos los niveles — desde principiante hasta avanzado.")}</p>
                    <p>{t("Las clases pueden ser presenciales en Buenos Aires, capital federal, u online desde cualquier parte del mundo.")}</p>
                    <p>{t("Mi enfoque es relajado y práctico: charlas reales, vocabulario útil, expresiones cotidianas, pronunciación y comprensión. Aprendemos hablando, escuchando y disfrutando.")}</p>
                </div>
            </div>
                    <ButtonHero />
        </section>
    )
}
