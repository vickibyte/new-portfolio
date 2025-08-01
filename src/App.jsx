/**
 * @copyright 2025 Fisher9ine
 * @license Apache-2.0
 */


import './App.css'
import { useEffect } from 'react'

/**
 * Node
 * 
 */
// import { useEffect } from 'react'
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx";
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Work from './components/Work.jsx';
import Review from "./components/Review.jsx";
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        durarion: 1,
        ease: 'power2.out'
      })
    });
  });


  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
