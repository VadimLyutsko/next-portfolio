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
  mainData: MainBlockType;
};

export type MainBlockType = {
  title: string;
  tabsData: TabType[];
};

type TabType = {
  id: string;
  title: string;
};
