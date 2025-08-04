import { useTranslation } from "react-i18next";

import { SectionImg } from "./SectionImg";
import lindaIMG from "./../../public/images/covers/linda.jpg"
import { Title } from "./Title";

export function About() {
    const { t } = useTranslation();

    return (
        <section className="about">

            <div className="text-area">
                <Title title={t("¿Quién soy?")} />

                <p><b>{t("Hola, soy Linda,")}</b></p>
                <p>{t("Nací en Buenos Aires y llevo años caminando sus calles, descubriendo rincones ocultos, disfrutando de su cultura, su comida, su gente y su noche.")}</p>
                <p>{t("Amo compartir todo eso con quienes visitan mi ciudad y buscan algo más que una visita guiada común: quieren conexión, anécdotas, sorpresas y experiencias reales.")}</p>
                <p>{t("Te voy a llevar a los lugares que le mostraría a un amigo que viene por primera vez.")}</p>
                <p>{t("Pero no solo camino la ciudad: también la toco y la escucho.")}</p>
                <p>{t("Soy música, compositora, cantante, toco guitarra y bajo, y formé y sigo formando parte de muchas bandas del circuito local.")}</p>
                <p>{t("Gracias a eso, conozco de cerca la movida cultural y musical de Buenos Aires: bares con música en vivo, espacios alternativos, ciclos escondidos y escenarios de la ciudad.")}</p>
            </div>

            <div className="section-img">
                <SectionImg
                    imgSrc={lindaIMG}
                    caption="Linda"
                />
            </div>
        </section>
    )
}