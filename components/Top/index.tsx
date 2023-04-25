import React from 'react';
import styles from './Home.module.css';

export default function Top() {
  // TODO: microCMSで管理する
  const randNum = Math.floor(Math.random() * 4) + 1;
  const imageName = `/topimage/top-${randNum}.jpg`;

  return (
    <section className={styles.topContainer}>
      <img src={imageName} alt="トップ画像" />
    </section>
  );
}
