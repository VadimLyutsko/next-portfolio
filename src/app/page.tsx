import { Header } from '@/components/general/Header/Header';
import styles from './page.module.scss';
import { getData } from './api/getData';
import { MainPageFetchType } from './types/fetchDataTypes';
import { Main } from '@/components/application/Main/Main';

export default async function Home() {
  const res: MainPageFetchType = await getData();

  return (
    <>
      <Header headerData={res.headerData} />
      <div className={styles.stickyContainer}>
        <Main mainData={res.mainData} />
      </div>
    </>
  );
}
