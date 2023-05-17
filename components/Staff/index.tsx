import React from 'react';
import styles from './Home.module.css';
import { StaffType } from '~/types/staff';

export interface StaffProps {
  staff: StaffType[];
}

export default function Staff({ staff }: StaffProps) {
  return (
    <section className={styles.staffContainer}>
      <div className={styles.leftSection}>
        <h2>
          <p>Staff</p>
        </h2>
      </div>
      <div className={styles.rightSection}>
        {staff ? (
          staff.map((staff) => (
            <div className={styles.staffContent} key={staff.id}>
              <img src={staff.image.url} alt={staff.jpName} />
              <div className={styles.text}>
                <div className={styles.jpName}>{staff.jpName}</div>
                <div className={styles.enName}>{staff.enName}</div>
                <div className={styles.description}>{staff.description}</div>
              </div>
            </div>
          ))
        ) : (
          <>no staff</>
        )}
      </div>
    </section>
  );
}
