import type { GetStaticProps, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '~/components/Header';
import Top from '~/components/Top';
import About from '~/components/About';
import HairCatalog from '~/components/HairCatalog';
import Menu from '~/components/Menu';
import ReserveButton from '~/components/ReserveButton';
import Staff from '~/components/Staff';
import Footer from '~/components/Footer';
import client from '~/utils/microCMSClient';
import { MenuType } from '~/types/menu';
import { StaffType } from '~/types/staff';
import { HairCatalogType } from '~/types/hairCatalog';
import Access from '~/components/Access';
import Meta from '~/components/_common/Meta';

export interface Props {
  menu: MenuType[];
  staff: StaffType[];
  hairCatalog: HairCatalogType[];
}
const Home = ({ menu, staff, hairCatalog }: Props) => {
  return (
    <div>
      {/* TODO: サイト公開の際はnoIndexを外す */}
      <Meta pageTitle="" pageUrl="" pageOgImage="" noIndex />
      <main className={styles.main}>
        <Header />
        <Top />
        <About />
        <HairCatalog hairCatalog={hairCatalog} />
        <Menu menu={menu} />
        <Staff staff={staff} />
        <Access />
        <Footer />
        <ReserveButton />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // .envファイル未設定の場合nullを返す
  if (client == null) {
    return {
      props: {},
    };
  }

  const menuData = await client.get({ endpoint: 'menu' });
  const staffData = await client.get({ endpoint: 'staff' });
  const hairCatalogData = await client.get({ endpoint: 'hair-catalog', queries: { limit: 4, orders: '-date' } });

  return {
    props: {
      menu: menuData.contents,
      staff: staffData.contents,
      hairCatalog: hairCatalogData.contents,
    },
  };
};
