// HeaderData

export type HeaderDataPropsType = {
  headerData: HeaderBlockType[];
};

export type HeaderBlockType = {
  id: string;
  title: string;
  linkAddress?: string;
};

// MainData

export type MainDataPropsType = {
  title: string;
};

export type MainBlockType = {
  title: string;
  tabsData: TabType[];
};

export type TabType = {
  id: string;
  title: string;
};

// CustomData

export type CustomDataPropsType = {
  customData: CustomBlockType;
};

export type CustomBlockType = {
  title: string;
  customBlocks: TabType[];
};

// Tabulation

export type TabulationDataPropsType = {
  tabulationData: TabulationBlockType;
};

export type TabulationBlockType = {
  title: string;
  tabsTitle: TabType[];
  tabsData: TabulationContentTupe[];
};

export type TabulationContentTupe = {
  id: string;
  title: string;
  description: string;
};
