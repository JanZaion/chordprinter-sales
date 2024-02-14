import Features from './components/features/Features';
import Footer from './components/footer/Footer';
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
      <Footer />
    </div>
  </main>
);

export default Home;
