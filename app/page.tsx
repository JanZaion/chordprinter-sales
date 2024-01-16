import Chords from './components/chords/Chords';
import { Hi } from './components/hi/Hi';
import styles from './page.module.css';
import './globals.css';
import Hero from './components/hero/Hero';

const Home = () => (
  <main>
    <div className={styles.container}>
      <Chords />
      <Hero />
      <div style={{ width: '100%', height: '5000px' }} />
    </div>
  </main>
);

export default Home;
