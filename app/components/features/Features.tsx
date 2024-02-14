import Chords from '../hero/Chords';

import styles from './Features.module.css';

const Features = () => (
  <div className={styles.sectionContainer}>
    <div className={styles.chordContainer}>
      <Chords />
      <Chords />
    </div>
    <div className={styles.contentContainer}>
      <h2 className={styles.header}>Easy to Use, but Rich with Features</h2>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <p className={styles.text}>
            <b>Harness the power of randomness. </b>
            Create chord progressions from up to 8 chords within a scale of your
            choice. Preview & print chords as fast as possible, to get to the
            desired vibe. Lock them in place once you are satisfied and tweak
            them further.
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            <b>Set direction to the random generation. </b>
            Random doesn&apos;t mean chaos. Select whether you want to generate
            triads or 7th chords. Decide whether chords should repeat within a
            progression or not. Augment your chords with bass notes. Open them
            up to increase sonic variety.
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            <b>Tweak voicing of each chord. </b>
            Don&apos;t just leave your chords in their basic position. Squish
            them to create the smoothest flow from one chord to another. Or
            choose from one of 24 voicing algorithms to push the voicing to the
            next level, at a click of a single button.
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            <b>Don&apos;t settle for basic triads. </b>
            Use dozens of advanced chords to modify each chord in your
            progression. Give your track the unique vibe only advanced chords
            can.
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            <b>Get comfortable with an easy-to-learn workflow. </b>
            Toggle between basic and advanced views of Chordprinter. Get right
            down to business by modifying a few key features of your progression
            in basic, or get down and dirty with the advanced view and modify
            all the advanced stuff.
          </p>
        </div>

        <div className={styles.box}>
          <p className={styles.text}>
            <b>
              Create your chords with the instrument you aim to use in your
              track.&nbsp;
            </b>
            No intermediate preview step necessary. Chordprinter interacts
            directly with Ableton&apos;s Live, which means that you are able to
            hear the final sound of your progression right away.
          </p>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.video}
          src="https://www.youtube.com/embed/BuIXvKKtVSw?si=gsWLbb-qLo7Shsox"
          title="YouTube video player"
        />
      </div>
    </div>
  </div>
);

export default Features;
