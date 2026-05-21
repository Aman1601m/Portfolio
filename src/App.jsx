import React from 'react';
import Navbar from './components/Navbar';
import WelcomeLoader from './components/WelcomeLoader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffect />
      <Navbar />
      <WelcomeLoader />
      <main className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto space-y-32 pb-32">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
