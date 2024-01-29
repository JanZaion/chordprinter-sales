import Image from 'next/image';

import chAdvImage from '../../../public/images/chordprinterAdv.png';
import chBasImage from '../../../public/images/chordprinterBasic.png';

import Chords from './Chords';
import chordsStyles from './Chords.module.css';
import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.container}>
    <Chords />
    <div className={chordsStyles.container}>
      <h1 className={styles.title}>ChordPrinter</h1>
      <p className={styles.titleInfo}>Chord Progressions Just Became Easy</p>
      <div className={styles.bottomContainer}>
        <Image
          alt="Chordprinter Advanced Image"
          className={styles.chAdvImage}
          src={chAdvImage}
        />
        <Image
          alt="Chordprinter Basic Image"
          className={styles.chBasImage}
          src={chBasImage}
        />
        <div className={styles.subtitle}>
          Generate chord progressions instantly inside Ableton Live&apos;s
          clips. Create loops that vibe with this Max for Live device!
        </div>
        <div className={styles.buttonContainer}>
          <a
            className={styles.button}
            href="https://www.google.com/"
            target="blank"
          >
            Try demo
          </a>
          <a
            className={styles.button}
            href="https://www.google.com/"
            target="blank"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
