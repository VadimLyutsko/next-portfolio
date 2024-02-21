import React from 'react';
import styles from './Main.module.scss';
import { MainDataPropsType } from '@/app/types/componentsTypes';
import clsx from 'clsx';
import { SpaceGrotesk } from '@/app/fonts';

export const Main: React.FC<MainDataPropsType> = ({ mainData }) => {
  const stickyTabs = mainData.tabsData.map((tab) => {
    return (
      <p key={tab.id} className={styles.tab}>
        {tab.title}
      </p>
    );
  });

  return (
    <div className={styles.main}>
      <h1 className={clsx(styles.title, SpaceGrotesk.className)}>{mainData.title}</h1>
      <div className={styles.tabsContainer}>{stickyTabs}</div>
    </div>
  );
};
