import React from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';
import { SpaceGrotesk } from '@/app/fonts';

export type TitlePropsType = {
  title: string;
  isPageTitle?: boolean;
  isArticleTitle?: boolean;
};

export const Title: React.FC<TitlePropsType> = ({ title, isPageTitle, isArticleTitle }) => {
  return (
    <>
      {isPageTitle && <h1 className={clsx(styles.pageTitle, SpaceGrotesk.className)}>{title}</h1>}
      {isArticleTitle && <h1 className={clsx(styles.articleTitle, SpaceGrotesk.className)}>{title}</h1>}
    </>
  );
};
