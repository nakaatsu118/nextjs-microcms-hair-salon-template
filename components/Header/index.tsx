import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.container}>
        <Link href="/" passHref>
          {/* TODO: ロゴ画像を差し替える */}
          <div className={styles.logo}>
            <img src={'/logoipsum-283.svg'} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          {/* TODO: ソーシャルリンクを差し替える */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={'/instagram.svg'} alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={'/twitter.svg'} alt="Twitter" />
          </a>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <a href="#hairCatalog">HAIR CATALOG</a>
          </li>
          <li className={styles.navLink}>
            <a href="#menu">MENU</a>
          </li>
          <li className={styles.navLink}>
            <a href="#staff">STAFF</a>
          </li>
          <li className={styles.navLink}>
            <a href="#access">ACCESS</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
