import React from 'react';
import styles from './Project.module.scss';
import clsx from 'clsx';
import { ProjectPropsType } from '@/app/types/generalTypes';

export const Project: React.FC<ProjectPropsType> = ({ id, title, description, unHoverText }) => {
  return (
    <li className={clsx(styles.card, styles.cards__item)}>
      <div className={styles.card__frame}>
        <p className={styles.slideDescription}>{unHoverText}</p>
        <hr className={styles.hr} />
        <p className={styles.slideTitle}>{title}</p>
      </div>
      <div className={styles.card__overlay}></div>
      <div className={styles.card__content}>
        <p className={styles.slideDescriptionOpen}>{description}</p>
        <hr className={styles.hrOpen} />
        <p className={styles.slideTitleOpen}>{title}</p>
      </div>
    </li>
  );
};
