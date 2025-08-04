import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import PeopleSVG from './../assets/icons/people.svg?react';
import RainSVG from './../assets/icons/rain.svg?react';
import LanguageSVG from './../assets/icons/language.svg?react';
import MapSVG from './../assets/icons/map.svg?react';
import CoinsSVG from './../assets/icons/coins.svg?react';
import { Title } from './Title';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useTranslation();

    const faqData = [
        {
            question: t("¿Son caminatas privadas o grupales?"),
            answer: t("Son personalizadas, solo para vos o tu grupo."),
            icon: <PeopleSVG className="faq-icon" />,

        },
        {
            question: t("¿Qué pasa si llueve?"),
            answer: t("Adaptamos la experiencia a lugares cubiertos o reprogramamos."),
            icon: <RainSVG className="faq-icon" />,

        },
        {
            question: t("¿En qué idioma se hacen los recorridos?"),
            answer: t("En español o inglés, según lo que necesites."),
            icon: <LanguageSVG className="faq-icon" />,

        },
        {
            question: t("¿Dónde nos encontramos?"),
            answer: t("Te paso la ubicación una vez que coordinamos según la experiencia que elijas."),
            icon: <MapSVG className="faq-icon" />,

        },
        {
            question: t("Tarifas / Cómo funciona / Reservá"),
            answer: t("Me escribís y contás qué te interesa, te armo una propuesta personalizada, confirmás, abonás y nos encontramos."),
            icon: <CoinsSVG className="faq-icon" />,
        },

    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="col-md-6 offset-md-3">
                <div className="faq-title text-center pb-3">
                    <div className="faq-h1">
                    <Title title={t("Preguntas frecuentes")} />
                    </div>
                </div>
            </div>
            <div className="col-md-6 offset-md-3">
                <div className="faq" id="accordion">
                    {faqData.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="card-header" onClick={() => toggleIndex(index)}>
                                <h5 className="faq-title">
                                    <span className="badge">{item.icon}</span>
                                    {item.question}
                                </h5>
                            </div>
                            {openIndex === index && (
                                <div className={`card-body ${openIndex === index ? 'open' : ''}`}>
                                    <p className='answer-txt'>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}