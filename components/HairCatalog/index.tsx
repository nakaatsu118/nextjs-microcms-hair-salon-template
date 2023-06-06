import React, { useState } from 'react';
import styles from './HairCatalog.module.css';
import { HairCatalogType } from '~/types/hairCatalog';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import Link from 'next/link';

export interface HairCatalogProps {
  hairCatalog: HairCatalogType[];
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 'fit-content',
    maxHeight: '70%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '0',
    border: 'none',
  },
  overlay: {
    transition: 'opacity 400ms ease-in-out',
    backgroundColor: 'rgba(100, 100, 100, 0.75)',
  },
};

export default function HairCatalog({ hairCatalog }: HairCatalogProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectHairCatalog, setSelectHairCatalog] = useState<HairCatalogType | null>(null);

  const openModal = (hairCatalog: HairCatalogType) => {
    setModalIsOpen(true);
    setSelectHairCatalog(hairCatalog);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectHairCatalog(null);
  };

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
              <div className={styles.imageContainer} key={hairCatalog.id} onClick={() => openModal(hairCatalog)}>
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
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal} closeTimeoutMS={200}>
          {selectHairCatalog && (
            <div className={styles.modalWrapper}>
              <img src={selectHairCatalog.image.url} alt={selectHairCatalog.hairStyle} className={styles.modalImage} />
              <div className={styles.modalDescription}>
                <p>{selectHairCatalog.hairStyle}</p>
                <p>{selectHairCatalog.comment || ''}</p>
              </div>
            </div>
          )}
        </Modal>
        {hairCatalog ? (
          <Link href="/hairCatalog/1/" passHref>
            <div className={styles.andMore}>AND MORE</div>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
