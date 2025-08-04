import { useTranslation } from "react-i18next";
import { HeroPicture } from "./HeroPicture";
import obeliscoIMG from './../../public/images/covers/obelisco.jpg';
import { SectionImg } from "./SectionImg";
import { Checkmark } from "./CheakMark";
import { CustomList } from "./CustomList";
import { Title } from "./Title";

export function Explore() {
  const { t } = useTranslation();

  return (
    <section className="Explore">
      <div className="Explore-text">
        <Title title={t("Descubrí Buenos Aires con una amiga local")} />

        <p><b>{t("¿Querés vivir Buenos Aires como un porteño más?")}</b></p>
        <p>{t("Te invito a explorar la ciudad conmigo: bares, restaurantes, ferias, eventos culturales, fiestas, música en vivo, sitios de interés, barrios, Museos, y más!")}</p>
        <p>{t("No soy una guía tradicional: soy tu amiga local en Buenos Aires, y te voy a mostrar esos lugares que no está en niguna guía turística.")}</p>

        <CustomList />

      </div>

      <div className="explore-img">
        <HeroPicture
          imgSrc={obeliscoIMG}
          caption="Obelisco"
        />
      </div>
    </section>
  );
}