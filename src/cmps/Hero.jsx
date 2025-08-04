import { useTranslation } from "react-i18next";
import { ButtonHero } from "./buttonHero";

import amigosIMG from './../../public/images/covers/amigos.jpg'
import beersIMG from './../../public/images/covers/beers.jpg'

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="image-container">
                <img className="amigos-img" src={amigosIMG} alt="amigos" />
                <img className="beers-img" src={beersIMG} alt="beers" />
                <div className="overlay-text-container">
                    <h1>Buenos Aires Buddy</h1>
                    <p><b>{t("¿Querés vivir Buenos Aires como un porteño más?")}</b></p>
                    <ButtonHero />

                </div>
            </div>
        </section>
    )
}