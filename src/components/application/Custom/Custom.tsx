import React from 'react';
import styles from './Custom.module.scss';
import { CustomDataPropsType } from '@/app/types/componentsTypes';
import { Title } from '@/components/general/Title/Title';

export const Custom: React.FC<CustomDataPropsType> = ({ customData }) => {
  const fillingBlocks = customData.customBlocks.map((block) => {
    return (
      <div key={block.id} className={styles.fillingBlock}>
        {block.title}
      </div>
    );
  });

  return (
    <div className={styles.main}>
      <Title title={customData.title} isPageTitle />
      <div className={styles.blocksContainer}>{fillingBlocks}</div>
    </div>
  );
};
