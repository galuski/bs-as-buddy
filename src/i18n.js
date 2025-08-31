import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// בעת שינוי שפה, נוסיף class לשורש ה-HTML (למשל: en / es)
i18n.on("languageChanged", (lng) => {
  document.documentElement.className = ""; // איפוס
  document.documentElement.classList.add(lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = "ltr"; // אין עברית, אז תמיד LTR
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es"], // ⬅️ רק אנגלית וספרדית
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    resources: {
      en: {
        translation: {
          //Navbar
          Inicio: "Home",

          "Acerca de mí": "About me",

          FAQ: "FAQ",

          "Clases de Español": "Spanish Lessons",

          //hero
          "Vamos a hablar": "Let's Talk",

          "Descubrí Buenos Aires con una amiga local":
            "Discover Buenos Aires with a Local Friend",

          "¿Querés vivir Buenos Aires como un porteño más?":
            "Do you want to experience Buenos Aires like a true local?",

          "Te invito a explorar la ciudad conmigo: bares, restaurantes, ferias, eventos culturales, fiestas, música en vivo, sitios de interés, barrios, museos, y más!":
            "Join me to explore the city in a whole new way: hidden bars, unique restaurants, open-air markets, cultural events, music, live shows, nightlife, museums, neighborhoods full of character… and much more!",

          "No soy una guía tradicional: soy tu amiga local en Buenos Aires, y te voy a mostrar esos lugares que no están en niguna guía turística.":
            "I’m not a traditional tour guide — I’m your local friend in Buenos Aires, and I’ll take you to places that don’t show up in any guidebook.",

          //hero-list

          "Tours personalizados": "Personalized tours",

          "Día y noche": "Day & night",

          "Planes auténticos y flexibles": "Authentic and flexible plans",

          //About

          "¿Quién soy?": "Who am I?",

          "Hola, soy Linda,": "Hi! I’m Linda,",

          "Nací en Buenos Aires y llevo años caminando sus calles, descubriendo rincones ocultos, disfrutando de su cultura, su comida, su gente y su noche.":
            "I was born in Buenos Aires and have spent years walking its streets, discovering hidden corners, and soaking in its culture, food, people, and nightlife.",

          "Amo compartir todo eso con quienes visitan mi ciudad y buscan algo más que una visita guiada común: quieren conexión, anécdotas, sorpresas y experiencias reales.":
            "I love sharing all that with people who visit and are looking for more than a standard tour, people who want real connection, stories, surprises, and meaningful experiences.",

          "Te voy a llevar a los lugares que le mostraría a un amigo que viene por primera vez.":
            "I'll take you to the places I’d show a friend visiting for the first time.",

          "Pero no solo camino la ciudad: también la toco y la escucho.":
            "But I don’t just walk the city.. I also play it and listen to it.",

          "Soy música, compositora, cantante, toco guitarra y bajo, y formé y sigo formando parte de muchas bandas del circuito local.":
            "I’m a musician, composer, singer, and I play guitar and bass. I’ve been part of many bands in the local scene.",

          "Gracias a eso, conozco de cerca la movida cultural y musical de Buenos Aires: bares con música en vivo, espacios alternativos, ciclos escondidos y escenarios de la ciudad.":
            "Thanks to that, I’m deeply connected to the cultural and musical life of Buenos Aires: live music bars, alternative venues, underground events and creative spaces across the city.",

          //Booling List

          "Reservá tu experiencia": "Book Your Experience",

          "Consultá disponibilidad": "Check availability",

          "Encuentros en distintos puntos de la ciudad":
            "Meet-up spots across the city",

          "Tours en español e inglés": "Tours in Spanish or English",

          //FAQ

          "Preguntas frecuentes": "FAQ – Frequently Asked Questions",

          "¿Son caminatas privadas o grupales?":
            "Are the tours private or in groups?",

          "Son personalizadas, solo para vos o tu grupo.":
            "They’re fully personalized — just for you or your group.",

          "¿Qué pasa si llueve?": "What if it rains?",

          "Adaptamos la experiencia a lugares cubiertos o reprogramamos.":
            "We adapt the experience to indoor spots or reschedule.",

          "¿En qué idioma se hacen los recorridos?":
            "What languages do you speak?",

          "En español o inglés, según lo que necesites.":
            "Spanish and English.",

          "¿Dónde nos encontramos?": "Where do we meet?",

          "Te paso la ubicación una vez que coordinamos según la experiencia que elijas.":
            "I’ll send you the exact location once we’ve chosen the right experience.",

          "Tarifas / Cómo funciona / Reservá":
            "Pricing / How It Works / Book Now",

          "Me escribís y contás qué te interesa, te armo una propuesta personalizada, confirmás, abonás y nos encontramos.":
            "You message me and tell me what you're interested in, I prepare a personalized proposal for you, and once you confirm and pay, we meet.",

          //Comments

          "Opiniones de viajeros": "What Travelers Say",

          "Sentí que caminaba con una amiga, Nada de tours aburridos.":
            "It felt like walking around with a friend, not a boring tour at all",

          "Descubrí lugares que ni sabía que existían. Volvería mil veces.":
            "I discovered places I didn’t even know existed. I’d come back a thousand times",

          "Perfecto para quienes buscan la Buenos Aires real, no solo lo turístico.":
            "Perfect for anyone looking to see the real Buenos Aires, not the touristy version.",

          Contacto: "Contact",

          //Explore-Spanish

          "Clases de Español Conversacional": "Spanish Conversation Lessons",
          "Aprendé español de forma natural, divertida y a tu ritmo":
            "Learn Spanish naturally, at your own pace and have fun doing it",
          "¿Querés mejorar tu español sin estrés y con conversaciones reales? Te ofrezco clases personalizadas de español conversacional, para todos los niveles — desde principiante hasta avanzado.":
            "Want to improve your Spanish without stress and through real conversations? I offer personalized conversation-based Spanish lessons for all levels from complete beginner to advanced.",
          "Las clases pueden ser presenciales en Buenos Aires, capital federal, u online desde cualquier parte del mundo.":
            "Classes can be in-person in Buenos Aires (Capital Federal) or online from anywhere in the world.",
          "Mi enfoque es relajado y práctico: charlas reales, vocabulario útil, expresiones cotidianas, pronunciación y comprensión. Aprendemos hablando, escuchando y disfrutando.":
            "My approach is relaxed and practical: real-life conversations, useful vocabulary, everyday expressions, pronunciation and listening. We learn by speaking, listening and enjoying the process.",

                      //Offer
          "¿Qué te ofrezco?": "What I offer:",
          "Clases 100% personalizadas": "100% personalized lessons",
          "donde te quede cómodo": "wherever you are comfortable",
          "Ritmo flexible, según tu disponibilidad": "Flexible schedule based on your availability",
          "Enfoque en conversación, cultura y fluidez": "Focus on conversation, culture and fluency",
          "Ejercicios según las necesidades de cada alumno": "Exercises tailored to each student’s needs",

                    //Ideal

          "Ideal si...": "Perfect for you if...",
          "Querés viajar o vivir en países hispanohablantes": "You're planning to travel or move to a Spanish-speaking country",
          "Estás en Buenos Aires y querés practicar con alguien local": "You're living in Buenos Aires and want to practice with a local",
          "Buscás ganar confianza al hablar": "You want to gain confidence speaking",
          "Ya sabés un poco pero querés soltarte": "You already know a bit and want to get more fluent",
          "Si estás empezando desde cero (¡también es para vos!)": "If you’re starting from zero (yes, this is for you too!)",
        },
      },
      es: {
        translation: {
          //Navbar
          Inicio: "Inicio",

          "Acerca de mí": "Acerca de mí",

          FAQ: "FAQ",

          "Clases de Español": "Lessons de Español",

          "Vamos a hablar": "Vamos a hablar",
          //hero
          "Descubrí Buenos Aires con una amiga local":
            "Descubre los secretos de Buenos Aires con una amiga local",

          "¿Querés vivir Buenos Aires como un porteño más?":
            "¿Querés vivir Buenos Aires como un porteño más?",

          "Te invito a explorar la ciudad conmigo: bares, restaurantes, ferias, eventos culturales, fiestas, música en vivo, sitios de interés, barrios, museos, y más!":
            "Te invito a explorar la ciudad conmigo: bares, restaurantes, ferias, eventos culturales, fiestas, música en vivo, sitios de interés, barrios, museos, y más!",

          "No soy una guía tradicional: soy tu amiga local en Buenos Aires, y te voy a mostrar esos lugares que no están en niguna guía turística.":
            "No soy una guía tradicional: soy tu amiga local en Buenos Aires, y te voy a mostrar esos lugares que no están en niguna guía turística.",

          //hero-list
          "Tours personalizados": "Tours personalizados",

          "Día y noche": "Día y noche",

          "Planes auténticos y flexibles": "Planes auténticos y flexibles",

          //About

          "¿Quién soy?": "¿Quién soy?",

          "Hola, soy Linda,": "Hola, soy Linda,",

          "Nací en Buenos Aires y llevo años caminando sus calles, descubriendo rincones ocultos, disfrutando de su cultura, su comida, su gente y su noche.":
            "Nací en Buenos Aires y llevo años caminando sus calles, descubriendo rincones ocultos, disfrutando de su cultura, su comida, su gente y su noche.",

          "Amo compartir todo eso con quienes visitan mi ciudad y buscan algo más que una visita guiada común: quieren conexión, anécdotas, sorpresas y experiencias reales.":
            "Amo compartir todo eso con quienes visitan mi ciudad y buscan algo más que una visita guiada común: quieren conexión, anécdotas, sorpresas y experiencias reales.",

          "Te voy a llevar a los lugares que le mostraría a un amigo que viene por primera vez.":
            "Te voy a llevar a los lugares que le mostraría a un amigo que viene por primera vez.",

          "Pero no solo camino la ciudad: también la toco y la escucho.":
            "Pero no solo camino la ciudad: también la toco y la escucho.",

          "Soy música, compositora, cantante, toco guitarra y bajo, y formé y sigo formando parte de muchas bandas del circuito local.":
            "Soy música, compositora, cantante, toco guitarra y bajo, y formé y sigo formando parte de muchas bandas del circuito local.",

          "Gracias a eso, conozco de cerca la movida cultural y musical de Buenos Aires: bares con música en vivo, espacios alternativos, ciclos escondidos y escenarios de la ciudad.":
            "Gracias a eso, conozco de cerca la movida cultural y musical de Buenos Aires: bares con música en vivo, espacios alternativos, ciclos escondidos y escenarios de la ciudad.",

          //Booling List

          "Reservá tu experiencia": "Reservá tu experiencia",

          "Consultá disponibilidad": "Consultá disponibilidad",

          "Encuentros en distintos puntos de la ciudad":
            "Encuentros en distintos puntos de la ciudad",

          "Tours en español e inglés": "Tours en español e inglés",

          //FAQ

          "Preguntas frecuentes": "Preguntas frecuentes",

          "¿Son caminatas privadas o grupales?":
            "¿Son caminatas privadas o grupales?",

          "Son personalizadas, solo para vos o tu grupo.":
            "Son personalizadas, solo para vos o tu grupo.",

          "¿Qué pasa si llueve?": "¿Qué pasa si llueve?",

          "Adaptamos la experiencia a lugares cubiertos o reprogramamos.":
            "Adaptamos la experiencia a lugares cubiertos o reprogramamos.",

          "¿En qué idioma se hacen los recorridos?":
            "¿En qué idioma se hacen los recorridos?",

          "En español o inglés, según lo que necesites.":
            "En español o inglés, según lo que necesites.",

          "¿Dónde nos encontramos?": "¿Dónde nos encontramos?",

          "Te paso la ubicación una vez que coordinamos según la experiencia que elijas.":
            "Te paso la ubicación una vez que coordinamos según la experiencia que elijas.",

          "Tarifas / Cómo funciona / Reservá":
            "Tarifas / Cómo funciona / Reservá",

          "Me escribís y contás qué te interesa, te armo una propuesta personalizada, confirmás, abonás y nos encontramos.":
            "Me escribís y contás qué te interesa, te armo una propuesta personalizada, confirmás, abonás y nos encontramos.",

          //Comments

          "Opiniones de viajeros": "Opiniones de viajeros",

          "Sentí que caminaba con una amiga, Nada de tours aburridos.":
            "Sentí que caminaba con una amiga, Nada de tours aburridos.",

          "Descubrí lugares que ni sabía que existían. Volvería mil veces.":
            "Descubrí lugares que ni sabía que existían. Volvería mil veces.",

          "Perfecto para quienes buscan la Buenos Aires real, no solo lo turístico.":
            "Perfecto para quienes buscan la Buenos Aires real, no solo lo turístico.",

          Contacto: "Contacto",

          //Explore-Spanish

          "Clases de Español Conversacional": "Clases de Español Conversacional",
          "Aprendé español de forma natural, divertida y a tu ritmo": "Aprendé español de forma natural, divertida y a tu ritmo",
          "¿Querés mejorar tu español sin estrés y con conversaciones reales? Te ofrezco clases personalizadas de español conversacional, para todos los niveles — desde principiante hasta avanzado.": "¿Querés mejorar tu español sin estrés y con conversaciones reales? Te ofrezco clases personalizadas de español conversacional, para todos los niveles — desde principiante hasta avanzado.",
          "Las clases pueden ser presenciales en Buenos Aires, capital federal, u online desde cualquier parte del mundo.": "Las clases pueden ser presenciales en Buenos Aires, capital federal, u online desde cualquier parte del mundo.",
          "Mi enfoque es relajado y práctico: charlas reales, vocabulario útil, expresiones cotidianas, pronunciación y comprensión. Aprendemos hablando, escuchando y disfrutando.": "Mi enfoque es relajado y práctico: charlas reales, vocabulario útil, expresiones cotidianas, pronunciación y comprensión. Aprendemos hablando, escuchando y disfrutando.",

          //Offer
          "¿Qué te ofrezco?": "¿Qué te ofrezco?",
          "Clases 100% personalizadas": "Clases 100% personalizadas",
          "donde te quede cómodo": "donde te quede cómodo",
          "Ritmo flexible, según tu disponibilidad": "Ritmo flexible, según tu disponibilidad",
          "Enfoque en conversación, cultura y fluidez": "Enfoque en conversación, cultura y fluidez",
          "Ejercicios según las necesidades de cada alumno": "Ejercicios según las necesidades de cada alumno",

          //Ideal

          "Ideal si...":"Ideal si...",
          "Querés viajar o vivir en países hispanohablantes": "Querés viajar o vivir en países hispanohablantes",
          "Estás en Buenos Aires y querés practicar con alguien local": "Estás en Buenos Aires y querés practicar con alguien local",
          "Buscás ganar confianza al hablar": "Buscás ganar confianza al hablar",
          "Ya sabés un poco pero querés soltarte": "Ya sabés un poco pero querés soltarte",
          "Si estás empezando desde cero (¡también es para vos!)": "Si estás empezando desde cero (¡también es para vos!)",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
