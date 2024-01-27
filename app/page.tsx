import Hero from './components/hero/Hero';
import styles from './page.module.css';
import './globals.css';
import HowItWorks from './components/howItWorks/HowItWorks';

const Home = () => (
  <main>
    <div className={styles.container}>
      <Hero />
      <HowItWorks />
      <div style={{ width: '100%', height: '5000px' }} />
    </div>
  </main>
);

export default Home;
