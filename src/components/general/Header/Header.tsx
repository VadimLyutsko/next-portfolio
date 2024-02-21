import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { HeaderDataPropsType } from '@/app/types/componentsTypes';

export const Header: React.FC<HeaderDataPropsType> = ({ headerData }) => {
  return (
    <header className={styles.header}>
      {headerData.map((item) => {
        return (
          <div key={item.id} className={styles.block}>
            {item.linkAddress ? <Link href={item.linkAddress}> </Link> : item.title}
          </div>
        );
      })}
    </header>
  );
};
