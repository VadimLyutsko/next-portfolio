'use client';
import styles from './Tabulation.module.scss';
import { TabulationDataPropsType } from '@/app/types/componentsTypes';
import { Title } from '@/components/general/Title/Title';
import { Tab } from '@/components/general/Tab/Tab';
import { useState } from 'react';

export const Tabulation: React.FC<TabulationDataPropsType> = ({ tabulationData }) => {
  const [activeTab, setActiveTab] = useState<string>('0');

  const tabHandler = (index: string) => {
    setActiveTab(() => index);
    // alert('123');
  };

  const tabsTitleData = tabulationData.tabsTitle.map((tab) => {
    return <Tab key={tab.id} id={tab.id} title={tab.title} tabHandler={tabHandler} />;
  });

  const tabsData = tabulationData.tabsData.map((tab) =>
    tab.id === activeTab ? (
      <div key={tab.id} className={styles.fillingBlock}>
        <p className={styles.articleTitle}>{tab.title}</p>
        <p className={styles.description}> {tab.description}</p>
      </div>
    ) : (
      ''
    ),
  );

  return (
    <div className={styles.tabulation}>
      <Title title={tabulationData.title} isPageTitle />
      <div className={styles.tabsContantDataContainer}>{tabsTitleData}</div>
      <div className={styles.tabsTitleDataContainer}>{tabsData}</div>
    </div>
  );
};
