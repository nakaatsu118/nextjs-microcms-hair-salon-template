import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Pagination.module.css';

interface Props {
  totalCount: number;
  path: string;
  perPage: number;
}

export const Pagination = ({ totalCount, path, perPage }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className={styles.pagination}>
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <Link
          href={`/${path}/${number}`}
          className={index + 1 == Number(id) ? styles.activeButton : styles.linkButton}
          key={index}
          passHref
        >
          <li key={index}>{number}</li>
        </Link>
      ))}
    </ul>
  );
};
