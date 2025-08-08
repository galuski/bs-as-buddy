import { Element } from 'react-scroll';

import { About } from './cmps/About';
import { Comments } from './cmps/Comments';
import { Contact } from './cmps/Contact';
import { Explore } from './cmps/Explore';
import Faq from './cmps/Faq';
import { Header } from './cmps/Header';
import { Hero } from './cmps/Hero';
import { Reservation } from './cmps/Reservation';
// import Video from './cmps/Video';

function App() {

  return (
    <main className='app main-layout'>
      {/* <Video /> */}
      <Header />
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
    </main>
  )
}
export default App;
