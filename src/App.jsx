import './App.css'
import { useCallback } from "react";
// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



import About from './components/About'
import Bot from './components/Bot'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hireme from './components/Hireme'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'

import ParticleBg from './assets/Page/ParticleBg/ParticleBg';
import Particles from 'react-tsparticles';


function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div className='relative w-full' style={{zIndex:1}}>
        <Navbar />
        <Hero />
        <Bot />
        <About />
        <Skills />
        <Hireme />
        <Project />
        <Contact />
        <Footer />
      </div>
      {/* <ParticleBg /> */}

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#020617",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default App
