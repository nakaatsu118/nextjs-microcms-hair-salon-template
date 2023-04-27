import React from 'react';
import styles from './Home.module.css';

export default function Top() {
  // TODO: microCMSで管理する
  const randNum = Math.floor(Math.random() * 4) + 1;
  const imageName = `/topimage/top-${randNum}.jpg`;

  return (
    <section className={styles.topContainer}>
      <div className={styles.textContainer}>
        <h1>
          <p>Olive</p>
          <p>Hair Salon</p>
        </h1>
      </div>
      <div className={styles.imgContainer}>
        <img src={imageName} alt="トップ画像" />
      </div>
    </section>
  );
}
