import React from 'react';
import styles from './Home.module.css';

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.logo}>
        <img src={'logoipsum-283.svg'} alt="Logo" />
      </div>
      <div className={styles.copyRight}>Copyright © 2023 Simple All Rights Reserved.</div>
    </section>
  );
}
