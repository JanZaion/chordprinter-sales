'use client';
import React from 'react';
import styles from './HeroButtons.module.css';

const HeroButtons = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.google.com/"
        target="blank"
        className={styles.button}
      >
        Try demo
      </a>
      <a
        href="https://www.google.com/"
        target="blank"
        className={styles.button}
      >
        Buy
      </a>
    </div>
  );
};

export default HeroButtons;
