import { useTranslation } from "react-i18next";

import sunriseMP4 from './../../public/videos/buenos-aires.mp4';

export default function Video() {
    const { t, ready } = useTranslation();

    // מחכה שהתרגומים ייטענו לפני הרינדור
    if (!ready) return null;

    return (
        <section className="video-container">
            <div className="video">
                <div className="video-overlay"></div>
                <video src={sunriseMP4} autoPlay loop muted />
                <div className="video-content">
                    <h1>buenos aires</h1>
                </div>
            </div>
        </section>
    );
}
