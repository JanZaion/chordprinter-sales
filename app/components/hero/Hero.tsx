import Image from 'next/image';
import chAdvImage from '../../../public/images/chordprinterAdv.png';
import HeroButtons from './HeroButtons';
import Chords from './Chords';
import styles from './Hero.module.css';
import chordsStyles from './Chords.module.css';

const Hero = () => (
  <div className={styles.container}>
    <Chords />
    <div className={chordsStyles.container}>
      <h1 className={styles.title}>ChordPrinter</h1>
      <p className={styles.titleInfo}>Chord Progressions Just Became Easy</p>
      <div className={styles.bottomContainer}>
        <Image
          alt="Chordprinter Image"
          className={styles.chAdvImage}
          src={chAdvImage}
        />
        <div className={styles.subtitle}>
          Generate chord progressions instantly inside Ableton Live's clips.
          Create loops that vibe with this Max for Live device!
        </div>
        <HeroButtons />
      </div>
    </div>
  </div>
);

export default Hero;
