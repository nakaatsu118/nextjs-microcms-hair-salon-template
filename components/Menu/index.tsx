import React from 'react';
import styles from './Home.module.css';

export default function Menu() {
  return (
    <section className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <h2>Menu</h2>
        <div>料金表をだす</div>
      </div>
    </section>
  );
}
