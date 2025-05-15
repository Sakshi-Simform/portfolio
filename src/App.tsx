import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import styles from './styles/App.module.css'

export function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}