import React from 'react';
import styles from './Top.module.css';

export default function Top() {
  return (
    <section id="top" className={styles.topContainer}>
      <div className={styles.textContainer}>
        <h1>
          <p>Simple</p>
          <p>Hair Salon</p>
        </h1>
      </div>
      <div className={styles.imgContainer}>
        <img src="/topImage/top-1.jpg" alt="トップ画像" />
      </div>
    </section>
  );
}
