import React from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';
import { ContainerPropsType } from '@/app/types/generalTypes';

export const Container: React.FC<ContainerPropsType> = ({ children, left }) => {
  const classes = clsx(styles.content, {
    [styles.leftPadding]: left,
  });

  return <div className={classes}>{children}</div>;
};
