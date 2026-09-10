import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className="background-container">
        <div className="blur-blob blur-blob-1"></div>
        <div className="blur-blob blur-blob-2"></div>
        <div className="blur-blob blur-blob-3"></div>
      </div>
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
