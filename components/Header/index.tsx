import React from 'react';
import styles from './Home.module.css';

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={'logoipsum-283.svg'} alt="Logo" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          {/* TODO: リンク設定する */}
          <img src={'instagram.svg'} alt="Instagram" />
          <img src={'twitter.svg'} alt="Twitter" />
        </div>
        <ul className={styles.navLinks}>
          {/* <li className={styles.navLink}>ABOUT</li> */}
          <li className={styles.navLink}>HAIR CATALOG</li>
          <li className={styles.navLink}>MENU</li>
          <li className={styles.navLink}>STAFF</li>
          <li className={styles.navLink}>NEWS</li>
        </ul>
      </div>
    </section>
  );
}
