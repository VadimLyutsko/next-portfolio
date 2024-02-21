import React from 'react';
import styles from './Main.module.scss';
import { MainDataPropsType } from '@/app/types/componentsTypes';
import clsx from 'clsx';
import { SpaceGrotesk } from '@/app/fonts';
import { Title } from '@/components/general/Title/Title';

export const Main: React.FC<MainDataPropsType> = ({ title }) => {
  return (
    <div className={styles.main}>
      <Title title={title} isPageTitle />
    </div>
  );
};
