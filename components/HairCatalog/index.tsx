import React from 'react';
import styles from './Home.module.css';

export default function HairCatalog() {
  return (
    <section className={styles.hairCatalogContainer}>
      <div className={styles.leftSection}>
        <h2>
          <p>Hair</p>
          <p>Catalog</p>
        </h2>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.hairCatalogImages}>
          <div className={styles.imageContainer}>
            <img src="/haircatalog/haircatalog-1.jpg" alt="Hair Catalog" />
            <p className={styles.hairDescription}>
              <span className={styles.date}>2023.04.12</span>
              <span className={styles.name}>ミディアム</span>
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/haircatalog/haircatalog-2.jpg" alt="Hair Catalog" />
            <p className={styles.hairDescription}>
              <span className={styles.date}>2023.04.01</span>
              <span className={styles.name}>ロング</span>
            </p>
          </div>{' '}
          <div className={styles.imageContainer}>
            <img src="/haircatalog/haircatalog-3.jpg" alt="Hair Catalog" />
            <p className={styles.hairDescription}>
              <span className={styles.date}>2022.12.24</span>
              <span className={styles.name}>スパイラルパーマ</span>
            </p>
          </div>{' '}
          <div className={styles.imageContainer}>
            <img src="/haircatalog/haircatalog-4.jpg" alt="Hair Catalog" />
            <p className={styles.hairDescription}>
              <span className={styles.date}>2022.11.30</span>
              <span className={styles.name}>ミディアム</span>
            </p>
          </div>
        </div>
        <div className={styles.andMore}>AND MORE</div>
      </div>
    </section>
  );
}
