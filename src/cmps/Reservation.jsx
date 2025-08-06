import { useTranslation } from "react-i18next";
import { BookingList } from "./BookingList";
import { Title } from "./Title";
import { ButtonHero } from "./ButtonHero";

export function Reservation() {
    const { t } = useTranslation();

    return (

        <section className="reservation">
            <Title title={t("Reservá tu experiencia")} />
            <p>{t("¿Querés planear tu visita? Escribime y armamos un recorrido juntos.")}</p>
            <p>{t("Podés venir solo/a, en pareja o en grupo pequeño.")}</p>
            <div>
                <BookingList />
            </div>
            <ButtonHero />
        </section>
    )
}