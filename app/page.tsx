import Features from './components/features/Features';
import GetChordprinter from './components/getChordprinter/GetChordprinter';
import Hero from './components/hero/Hero';
import HowItWorks from './components/howItWorks/HowItWorks';
import styles from './page.module.css';
import './globals.css';

const Home = () => (
  <main>
    <div className={styles.container}>
      <Hero />
      <HowItWorks />
      <Features />
      <GetChordprinter />
      <div style={{ width: '100%', height: '500px' }} />
    </div>
  </main>
);

export default Home;
