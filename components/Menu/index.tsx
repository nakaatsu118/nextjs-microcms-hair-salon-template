import React from 'react';
import styles from './Home.module.css';

export default function Menu() {
  return (
    <section className={styles.menuContainer}>
      <div className={styles.leftSection}>
        <div className={styles.menuContent}>
          <div className={styles.priceContainer}>
            <p className={styles.enMenuName}>cut</p>
            <p className={styles.jpMenuName}>カット</p>
            <p className={styles.price}>¥5500</p>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.enMenuName}>cut&color</p>
            <p className={styles.jpMenuName}>カット＆カラー</p>
            <p className={styles.price}>¥11000</p>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.enMenuName}>cut&perm</p>
            <p className={styles.jpMenuName}>カット＆パーマ</p>
            <p className={styles.price}>¥11000</p>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.enMenuName}>cut&straight perm</p>
            <p className={styles.jpMenuName}>カット＆ストレートパーマ</p>
            <p className={styles.price}>¥16500</p>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.enMenuName}>wcolor</p>
            <p className={styles.jpMenuName}>ダブルカラー</p>
            <p className={styles.price}>¥14300</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>Menu</h2>
      </div>
    </section>
  );
}
