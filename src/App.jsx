
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-20">
        <Header />
        <section id="about" className="space-y-4">
          <About />
        </section>
        <section id="projects" className="space-y-4">
          <Projects />
        </section>
        <section id="education" className="space-y-4">
          <Education />
        </section>
        <section id="skills" className="space-y-4">
          <Skills />
        </section>
        <section id="contact" className="space-y-4">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
