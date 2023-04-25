import React from 'react';
import styles from './Home.module.css';

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={'logoipsum-289.svg'} alt="Logo" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          {/* TODO: リンク設定する */}
          <img src={'instagram.svg'} alt="Instagram" />
          <img src={'twitter.svg'} alt="Twitter" />
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>About</li>
          <li className={styles.navLink}>Hair Catalog</li>
          <li className={styles.navLink}>Menu</li>
          <li className={styles.navLink}>Staff</li>
          <li className={styles.navLink}>News</li>
        </ul>
      </div>
    </section>
  );
}
