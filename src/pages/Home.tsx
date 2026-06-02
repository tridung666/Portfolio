import { About } from '../components/About';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Certificates } from '../components/Certificates';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export function Home(): React.ReactElement {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
