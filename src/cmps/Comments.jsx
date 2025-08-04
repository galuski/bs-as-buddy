import { useTranslation } from 'react-i18next';

import colombiaIMG from './../../public/images/flags/colombia.png';
import ukIMG from './../../public/images/flags/uk.png';
import franceIMG from './../../public/images/flags/france.png';

import QuoteSVG from './../assets/icons/quote.svg?react';

import { Title } from './Title';

export function Comments() {
      const { t } = useTranslation();
    
    const comments = [
        {
            user: "Alex",
            country: ukIMG,
            comment: t("Sentí que caminaba con una amiga, Nada de tours aburridos."),
        },
        {
            user: "Luisa",
            country: colombiaIMG,
            comment: t("Descubrí lugares que ni sabía que existían. Volvería mil veces."),
        },
        {
            user: "Marc",
            country: franceIMG,
            comment: t("Perfecto para quienes buscan la Buenos Aires real, no solo lo turístico."),
        },
    ];

    return (
        <section className="comments">
            <div className="comments-title">
            <Title title={t("Opiniones de viajeros")} />
            </div>
            <div className="comments-container">
                {comments.map((item, index) => (
                    <div className="comment" key={index}>
                        <QuoteSVG className="quote-icon" />
                        <h3 className='comment-name'>{item.user}</h3>
                        <img className="comment-flag" src={item.country} alt={`Bandera de ${item.user}`} />
                        <p className="comment-txt">{item.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}