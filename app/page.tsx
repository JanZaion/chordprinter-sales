import Features from './components/features/Features';
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
      <div style={{ width: '100%', height: '5000px' }} />
    </div>
  </main>
);

export default Home;
