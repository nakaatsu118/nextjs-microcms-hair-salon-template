import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '~/components/Header';
import Top from '~/components/Top';
import About from '~/components/About';
import HairCatalog from '~/components/HairCatalog';
import Menu from '~/components/Menu';
import ReserveButton from '~/components/ReserveButton';
import Staff from '~/components/Staff';
import Footer from '~/components/Footer';
import { client } from '~/utils/microCMSClient';
import { MenuType } from '~/types/menu';
import { StaffType } from '~/types/staff';

export interface Props {
  menu: MenuType[];
  staff: StaffType[];
}
const Home = ({ menu, staff }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Top />
        <About />
        <HairCatalog />
        <Menu menu={menu} />
        <Staff staff={staff} />
        <Footer />
        <ReserveButton />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await client.get({ endpoint: 'menu' });
  const staffData = await client.get({ endpoint: 'staff' });

  return {
    props: {
      menu: menuData.contents,
      staff: staffData.contents,
    },
  };
};
