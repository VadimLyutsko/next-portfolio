import { CustomBlockType, HeaderBlockType, MainBlockType, TabulationBlockType } from './componentsTypes';

// MainPage

export type MainPageFetchType = {
  headerData: HeaderBlockType[];
  mainData: MainBlockType;
  customData: CustomBlockType;
  tabulationData: TabulationBlockType;
};
