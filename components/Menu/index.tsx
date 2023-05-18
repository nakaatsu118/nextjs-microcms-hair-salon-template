import React from 'react';
import styles from './Home.module.css';
import { MenuType } from '~/types/menu';

export interface MenuProps {
  menu: MenuType[];
}

export default function Menu({ menu }: MenuProps) {
  return (
    <section id="menu" className={styles.menuContainer}>
      <div className={styles.leftSection}>
        <div className={styles.menuContent}>
          {menu ? (
            menu.map((menu) => (
              <div className={styles.priceContainer} key={menu.id}>
                <p className={styles.enMenuName}>{menu.enMenuName}</p>
                <p className={styles.jpMenuName}>{menu.jpMenuName}</p>
                <p className={styles.price}>{menu.price}</p>
              </div>
            ))
          ) : (
            <>no menu</>
          )}
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>Menu</h2>
      </div>
    </section>
  );
}
