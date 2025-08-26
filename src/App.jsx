import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import { About } from './cmps/About';
import { Comments } from './cmps/Comments';
import { Contact } from './cmps/Contact';
import { Explore } from './cmps/Explore';
import Faq from './cmps/Faq';
import { Header } from './cmps/Header';
import { Hero } from './cmps/Hero';
import { Reservation } from './cmps/Reservation';
import { SpanishClasses } from './cmps/SpanishClasses'; // עמוד חדש
import { Footer } from './cmps/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Explore />
      <Element name="about">
        <About />
      </Element>
      <Reservation />
      <Element name="faq">
        <Faq />
      </Element>
      <Comments />
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <main className="app main-layout">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/spanish-classes" element={<SpanishClasses />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;