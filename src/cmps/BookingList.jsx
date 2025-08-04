import { useTranslation } from 'react-i18next';

import CalendarSVG from './../assets/icons/calendar.svg?react';
import LanguageSVG from './../assets/icons/language.svg?react';
import LocationSVG from './../assets/icons/location.svg?react';

export function BookingList() {
  const { t } = useTranslation();

  const lists = [
    {
      icon: CalendarSVG,
      titleKey: "Consultá disponibilidad",
    },
    {
      icon: LocationSVG,
      titleKey: "Encuentros en distintos puntos de la ciudad",
    },
    {
      icon: LanguageSVG,
      titleKey: "Tours en español e inglés",
    },
  ];

  return (
    <ul className="book-list">
      {lists.map((list, index) => {
        const Icon = list.icon;
        return (
          <li key={index} className="book-item">
            <div className="icon">
              <Icon className="booking-icon" />
            </div>
            <div className="title">{t(list.titleKey)}</div>
          </li>
        );
      })}
    </ul>
  );
}