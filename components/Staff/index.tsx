import React from 'react';
import styles from './Home.module.css';

export default function Staff() {
  return (
    <section className={styles.staffContainer}>
      <div className={styles.leftSection}>
        <h2>
          <p>Staff</p>
        </h2>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.staffContent}>
          <img src="/staff/staff-1.jpg" alt="Staff" />
          <div className={styles.text}>
            <div className={styles.jpName}>田中太郎</div>
            <div className={styles.enName}>Taro Tanaka</div>
            <div className={styles.description}>
              美容師として多くの女性客から信頼を得ている。おしゃれなカットや染め技術に定評がある。
            </div>
          </div>
        </div>
        <div className={styles.staffContent}>
          <img src="/staff/staff-4.jpg" alt="Staff" />
          <div className={styles.text}>
            <div className={styles.jpName}>山田花子</div>
            <div className={styles.enName}>Hanako Yamada</div>
            <div className={styles.description}>
              カラーリストとして働く。髪の悩みに親身になり、お客様に似合うカラーを提案する。
            </div>
          </div>
        </div>
        <div className={styles.staffContent}>
          <img src="/staff/staff-3.jpg" alt="Staff" />
          <div className={styles.text}>
            <div className={styles.jpName}>佐藤雅子</div>
            <div className={styles.enName}>Masako Sato</div>
            <div className={styles.description}>
              ヘアメイクアーティストとして活躍中。結婚式やファッションショーなど、様々な場面でヘアメイクを担当している。
            </div>
          </div>
        </div>
        <div className={styles.staffContent}>
          <img src="/staff/staff-2.jpg" alt="Staff" />
          <div className={styles.text}>
            <div className={styles.jpName}>伊藤健太</div>
            <div className={styles.enName}>Kenta Ito</div>
            <div className={styles.description}>
              理容師として技術に磨きをかけている。男性客からの支持が高く、髪型やヒゲのアドバイスに定評がある。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
