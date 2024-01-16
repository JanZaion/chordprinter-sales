import Chords from './components/chords/Chords';
import Hero from './components/hero/Hero';
import styles from './page.module.css';
import './globals.css';

const Home = () => (
  <main>
    <div className={styles.container}>
      <Hero />
      <Chords />
      <div style={{ width: '100%', height: '5000px' }} />
    </div>
  </main>
);

export default Home;
