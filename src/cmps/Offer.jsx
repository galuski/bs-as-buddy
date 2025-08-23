import { useTranslation } from "react-i18next";

import { Title } from "./Title";
import { OfferList } from "./OfferList";

export function Offer() {
    const { t } = useTranslation();

    return (
        <section className="offer">
            <Title title={t("¿Qué te ofrezco?")} />
            <OfferList />
        </section>

    )
}