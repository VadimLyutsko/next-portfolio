import { Header } from '@/components/general/Header/Header';
import styles from './page.module.scss';
import { getData } from './api/getData';
import { MainPageFetchType } from './types/fetchDataTypes';
import { Main } from '@/components/application/Main/Main';
import { Custom } from '@/components/application/Custom/Custom';
import { StickyTabs } from '@/components/general/StickyTabs/StickyTabs';
import { Tabulation } from '@/components/application/Tabulation/Tabulation';
import { Container } from '@/components/general/Container/Container';
import { MySwiper } from '@/components/general/MySwiper/MySwiper';

export default async function Home() {
  const res: MainPageFetchType = await getData();

  return (
    <Container>
      <Header headerData={res.headerData} />
      <StickyTabs tabsData={res.mainData.tabsData} />
      <Main title={res.mainData.title} />
      <Custom customData={res.customData} />
      <Tabulation tabulationData={res.tabulationData} />
      <MySwiper projectsData={res.projectsData} />
    </Container>
  );
}
