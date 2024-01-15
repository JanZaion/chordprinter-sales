import { Hi } from './components/hi/Hi';
import styles from './page.module.css';
import './globals.css';
import Chords from './components/chords/Chords';

const Home = () => (
  <div className={styles.container}>
    {/* <Hi /> */}
    <Chords />
  </div>
);

export default Home;
