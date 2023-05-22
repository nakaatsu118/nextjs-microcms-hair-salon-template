import React from 'react';
import styles from './Home.module.css';

export default function ReserveButton() {
  return (
    // TODO: 予約ボタンのリンク先を変更する
    <a className={styles.reserveButton} href="/" target="_blank" rel="noopener noreferrer">
      <div className={styles.reserveIcon}>
        <img src={'/calendar.svg'} alt="予約" />
      </div>
    </a>
  );
}
