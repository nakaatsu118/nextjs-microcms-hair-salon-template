import React from 'react';
import styles from './Home.module.css';

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <img src="/about/about-2.jpg" alt="About Us" />
        <div className={styles.description}>
          <h2>About Us</h2>
          <p>
            美容室の概要についての文章がここに入ります。サロンの特徴、歴史、 取り組みなどの情報をお客様に伝えましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
