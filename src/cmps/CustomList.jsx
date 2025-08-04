import { useTranslation } from "react-i18next";
import { Checkmark } from "./CheakMark";

export function CustomList() {
  const { t } = useTranslation();

  const items = [
    t("Tours personalizados"),
    t("Día y noche"),
    t("Planes auténticos y flexibles")
  ];

  return (
    <ul className="custom-list">
      {items.map((item, index) => (
        <li key={index}>
          <Checkmark />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
