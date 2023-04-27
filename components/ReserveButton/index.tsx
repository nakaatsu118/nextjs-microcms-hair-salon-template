import React from 'react';
import styles from './Home.module.css';

export default function ReserveButton() {
  return (
    <a className={styles.reserveButton}>
      <div className={styles.reserveIcon}>
        <img src={'calendar.svg'} alt="予約ボタン" />
      </div>
    </a>
  );
}
