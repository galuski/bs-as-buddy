import { useTranslation } from 'react-i18next';

import MailSVG from './../assets/icons/mail.svg?react';
import WhatsappSVG from './../assets/icons/whatsapp.svg?react';
import InstagramSVG from './../assets/icons/instagram.svg?react';
import FacebookSVG from './../assets/icons/facebook.svg?react';
import StampVG from './../assets/icons/stamp.svg?react';


import { Title } from "./Title";

export function Contact() {
          const { t } = useTranslation();

    return (
        <section className="contact">
            <Title title={t("Contacto")} />
            <div className="contact-container">
                <div className="contact-list">
                    <a href="https://www.instagram.com/buenosairesbuddy?igsh=MWQwdnJ3bjJmdXVraA=="><InstagramSVG className="contact-icon" /> Buenos Aires Buddy - Argentina</a>
                    <a href="https://wa.me/5491159343218" target="_blank"><WhatsappSVG className="contact-icon" /> +54 9 11 5934-3218</a>
                    <a href="https://www.facebook.com/buenosairesbuddy"><FacebookSVG className="contact-icon" /> Buenos Aires Buddy - Argentina</a>
                    <a href="mailto:buenosairesbuddy@gmail.com"><MailSVG className="contact-icon" />buenosairesbuddy@gmail.com</a>
                </div>
                <div>
                    <StampVG className="stamp-icon" />
                </div>
            </div>
        </section>
    )
}