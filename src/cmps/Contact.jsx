import { useTranslation } from "react-i18next";
import { BookingList } from "./BookingList";
import { Title } from "./Title";

export function Contact() {
    const { t } = useTranslation();

    return (

        <section className="contact">
            <Title title={t("Reservá tu experiencia")} />
            <p>{t("¿Querés planear tu visita? Escribime y armamos un recorrido juntos.")}</p>
            <p>{t("Podés venir solo/a, en pareja o en grupo pequeño.")}</p>
            <div>
                <BookingList />
            </div>
        </section>
    )
}