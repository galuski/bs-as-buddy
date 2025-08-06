import { useTranslation } from "react-i18next";
import { ButtonHero } from "./ButtonHero";

// import amigosIMG from './../../public/images/covers/amigos.jpg'
import beersIMG from './../../public/images/covers/beers.jpg'
import viewIMG from './../../public/images/covers/view.png'

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="image-container">
                <picture>
                <source media="(min-width:600px )" srcSet={viewIMG} />
                <img className="beers-img" src={beersIMG} alt="beers" />
                </picture>
                <div className="overlay-text-container">
                    <h1>Buenos Aires Buddy</h1>
                    <p><b>{t("¿Querés vivir Buenos Aires como un porteño más?")}</b></p>
                    <ButtonHero />

                </div>
            </div>
        </section>
    )
}