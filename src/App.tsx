import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import styles from './styles/App.module.css'

export function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}