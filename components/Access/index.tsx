import React from 'react';
import styles from './Access.module.css';

export default function Access() {
  return (
    <section id="access" className={styles.accessContainer}>
      <div className={styles.leftSection}>
        <div className={styles.accessContent}>
          <div className={styles.accessDescription}>
            <p>〒150-0002 東京都新宿区新宿1-2-3</p>
            <p>Phone: 03-3333-3333</p>
            <p>Open: 8:00 am - 10:00 pm</p>
            <p>Closed: Monday</p>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4880141904196!2d139.69838261525905!3d35.689606680192334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c32a1f1ecacfdd5!2z5paw5a6_6aeF!5e0!3m2!1sja!2sjp!4v1684402761611!5m2!1sja!2sjp"
              width="600"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>Access</h2>
      </div>
    </section>
  );
}
