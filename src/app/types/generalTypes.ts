// Container

import { StaticImageData } from 'next/image';

export type ContainerPropsType = {
  children: React.ReactNode;
  left?: true;
};

// Project

export type ProjectsSwiperPropsType = {
  projectsData: ProjectPropsType[];
};

export type ProjectPropsType = {
  id: string;
  unHoverText: string;
  title: string;
  // image: StaticImageData;
  description: string;
};
