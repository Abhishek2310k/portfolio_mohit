import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import AOS from 'aos';
import { useEffect } from 'react';
// eslint-disable-next-line
import PureCounter from '@srexi/purecounterjs';

import 'aos/dist/aos.css';
import Highlights from './components/Highlights/Highlights';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Others/Others';
import Contact from './components/Contact/Contact';

function App() {

  useEffect(() => {
    AOS.init();
    new PureCounter();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <main id='main'>
        <About/>
        <Highlights/>
        <Skills/>
        <Portfolio/>
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
