import Chords from './components/chords/Chords';
import { Hi } from './components/hi/Hi';
import styles from './page.module.css';
import './globals.css';

const Home = () => (
  <main>
    <div className={styles.container}>
      <Hi />
      <Chords />
    </div>
  </main>
);

export default Home;
