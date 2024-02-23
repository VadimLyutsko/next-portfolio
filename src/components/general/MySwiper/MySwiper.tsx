'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MySwiper.module.scss';
// Import Swiper styles
import 'swiper/css';
import { ProjectsSwiperPropsType } from '@/app/types/generalTypes';
import clsx from 'clsx';
import { Project } from '../Project/Project';
import { it } from 'node:test';

export const MySwiper: React.FC<ProjectsSwiperPropsType> = ({ projectsData }) => {
  return (
    <div className={styles.container}>
      <Swiper spaceBetween={50} slidesPerView={3} className={styles.swiper}>
        {projectsData.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.historySlide}>
              <Project id={item.id} title={item.title} unHoverText={item.unHoverText} description={item.description} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
