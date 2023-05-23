import { GetStaticProps } from 'next';
import { HairCatalogType } from '~/types/hairCatalog';
import { client } from '~/utils/microCMSClient';
import styles from './hairCatalog.module.css';
import homeStyles from '~/styles/Home.module.css';
import hairCatalogStyles from '~/components/HairCatalog/HairCatalog.module.css';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import ReserveButton from '~/components/ReserveButton';
import Meta from '~/components/_common/Meta';
import { useState } from 'react';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import { Pagination } from '~/components/Pagination';

export interface Props {
  data: HairCatalogType[];
  totalCount: number;
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

const PER_PAGE = 4;

const Home = ({ data, totalCount }: Props) => {
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
    <div>
      <Meta pageTitle="髪型一覧 | Simple Hair Salon | microCMS Template" pageUrl="" pageOgImage="" noIndex />
      <main className={homeStyles.main}>
        <Header />
        <div className={styles.hairCatalogContainer}>
          <div className={styles.topSection}>
            <h2>Hair Catalog</h2>
            <p>
              様々な髪型をご紹介しています。ロングヘアからショートヘア、パーマ、ボブ、ミディアムなど、トレンドに沿ったスタイルや個性的なアレンジまで幅広く掲載しています。さらに、カラーリングのアイデアやスタイリングのヒントも提供しています。あなたの魅力を引き出す最適な髪型を見つけて、自信を持って輝きましょう。
            </p>
          </div>
          <div className={styles.bottomSection}>
            <Pagination totalCount={totalCount} path="hairCatalog" perPage={PER_PAGE} />
            <div className={hairCatalogStyles.hairCatalogImages}>
              {data ? (
                data.map((hairCatalog) => (
                  <div
                    className={hairCatalogStyles.imageContainer}
                    key={hairCatalog.id}
                    onClick={() => openModal(hairCatalog)}
                  >
                    <img src={hairCatalog.image.url} alt={hairCatalog.hairStyle} />
                    <p className={hairCatalogStyles.hairDescription}>
                      <span className={hairCatalogStyles.date}>{dayjs(hairCatalog.date).format('YYYY.MM.DD')}</span>
                      <span className={hairCatalogStyles.name}>{hairCatalog.hairStyle}</span>
                    </p>
                  </div>
                ))
              ) : (
                <>no hairCatalog</>
              )}
            </div>
            <Pagination totalCount={totalCount} path="hairCatalog" perPage={PER_PAGE} />
          </div>
          <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal} closeTimeoutMS={200}>
            {selectHairCatalog && (
              <div className={hairCatalogStyles.modalWrapper}>
                <img
                  src={selectHairCatalog.image.url}
                  alt={selectHairCatalog.hairStyle}
                  className={hairCatalogStyles.modalImage}
                />
                <div className={hairCatalogStyles.modalDescription}>
                  <p>{selectHairCatalog.hairStyle}</p>
                  <p>{selectHairCatalog.comment || ''}</p>
                </div>
              </div>
            )}
          </Modal>
        </div>
        <Footer />
        <ReserveButton />
      </main>
    </div>
  );
};

export default Home;

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: 'hair-catalog' });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/hairCatalog/${repo}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params ? context.params.id : '';
  const data = await client.get({
    endpoint: 'hair-catalog',
    queries: { offset: (Number(id) - 1) * PER_PAGE, limit: PER_PAGE, orders: '-date' },
  });

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
    },
  };
};
