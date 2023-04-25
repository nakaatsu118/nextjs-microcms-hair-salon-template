import React from 'react';
import styles from './Home.module.css';

export default function HairCatalog() {
  return (
    <section className={styles.hairCatalogContainer}>
      <div className={styles.hairCatalogContent}>
        <h2>Hair Catalog</h2>
        <p>当店のヘアスタイルをご紹介します。</p>
        <div className={styles.hairCatalogImages}>
          <img src="/haircatalog/haircatalog-1.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-2.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-3.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-4.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-1.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-2.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-3.jpg" alt="Hair Catalog" />
          <img src="/haircatalog/haircatalog-4.jpg" alt="Hair Catalog" />
        </div>
      </div>
    </section>
  );
}
