'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';

import styles from './Chords.module.css';

const Chords = () => (
  <div className={styles.container}>
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.25 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.25 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.25 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.5 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.5 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.5 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.75 }}
    />

    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.75 }}
    />
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.75 }}
    />
  </div>
);

export default Chords;
