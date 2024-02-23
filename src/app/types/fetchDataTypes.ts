import {
  CustomBlockType,
  HeaderBlockType,
  MainBlockType,
  ProjectsBlockType,
  TabulationBlockType,
} from './componentsTypes';

// MainPage

export type MainPageFetchType = {
  headerData: HeaderBlockType[];
  mainData: MainBlockType;
  customData: CustomBlockType;
  tabulationData: TabulationBlockType;
  projectsData: ProjectsBlockType[];
};
