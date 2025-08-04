import './App.css'
import { About } from './cmps/About';
import { Comments } from './cmps/Comments';
import { Contact } from './cmps/Contact';
import { Explore } from './cmps/Explore';
import Faq from './cmps/Faq';
import { Header } from './cmps/Header';
import { Hero } from './cmps/Hero';
// import Video from './cmps/Video';

function App() {

  return (
    <main className='app main-layout'>
      {/* <Video /> */}
      <Header />
      <Hero />
      <Explore />
      <About />
      <Contact />
      <Faq />
      <Comments/>
    </main>
  )
}
export default App;
