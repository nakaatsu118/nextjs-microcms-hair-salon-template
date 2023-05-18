import React from 'react';
import styles from './Home.module.css';
import { HairCatalogType } from '~/types/hairCatalog';
import dayjs from 'dayjs';

export interface HairCatalogProps {
  hairCatalog: HairCatalogType[];
}
export default function HairCatalog({ hairCatalog }: HairCatalogProps) {
  return (
    <section id="hairCatalog" className={styles.hairCatalogContainer}>
      <div className={styles.leftSection}>
        <h2>
          <p>Hair</p>
          <p>Catalog</p>
        </h2>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.hairCatalogImages}>
          {hairCatalog ? (
            hairCatalog.map((hairCatalog) => (
              <div className={styles.imageContainer} key={hairCatalog.id}>
                <img src={hairCatalog.image.url} alt={hairCatalog.hairStyle} />
                <p className={styles.hairDescription}>
                  <span className={styles.date}>{dayjs(hairCatalog.date).format('YYYY.MM.DD')}</span>
                  <span className={styles.name}>{hairCatalog.hairStyle}</span>
                </p>
              </div>
            ))
          ) : (
            <>no hairCatalog</>
          )}
        </div>
        <div className={styles.andMore}>AND MORE</div>
      </div>
    </section>
  );
}
