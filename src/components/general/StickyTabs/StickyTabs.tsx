import React from 'react';
import styles from './StickyTabs.module.scss';
import { TabType } from '@/app/types/componentsTypes';

export type StickyTabsPropsType = {
  tabsData: TabType[];
};

export const StickyTabs: React.FC<StickyTabsPropsType> = async ({ tabsData }) => {
  const stickyTabs = tabsData.map((tab: TabType) => {
    return (
      <p key={tab.id} className={styles.tab}>
        {tab.title}
      </p>
    );
  });
  return (
    <>
      <div className={styles.tabsContainer}>{stickyTabs}</div>
    </>
  );
};
