import { useTranslation } from 'react-i18next';

import UserSVG from './../assets/icons/user.svg?react';
import LocationSVG from './../assets/icons/location.svg?react';
import ClockSVG from './../assets/icons/clock.svg?react';
import CommentsSVG from './../assets/icons/Comments.svg?react';
import BookSVG from './../assets/icons/book-open.svg?react';


export function OfferList() {
  const { t } = useTranslation();

  const lists = [
    {
      icon: UserSVG,
      titleKey: t("Clases 100% personalizadas"),
    },
    {
      icon: LocationSVG,
      titleKey: t("donde te quede cómodo"),
    },
    {
      icon: ClockSVG,
      titleKey: t("Ritmo flexible, según tu disponibilidad"),
    },
    {
      icon: CommentsSVG,
      titleKey: t("Enfoque en conversación, cultura y fluidez"),
    },
    {
      icon: BookSVG,
      titleKey: t("Ejercicios según las necesidades de cada alumno"),
    },
  ];

  return (
    <ul className="offer-list">
      {lists.map((list, index) => {
        const Icon = list.icon;
        return (
          <li key={index} className="offer-item">
            <div className="icon">
              <Icon className="offer-icon" />
            </div>
            <div className="title">{t(list.titleKey)}</div>
          </li>
        );
      })}
    </ul>
  );
}