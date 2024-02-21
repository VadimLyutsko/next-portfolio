import styles from './Tab.module.scss';

type TabData = {
  id: string;
  title: string;
  tabHandler: (id: string) => void;
};

export const Tab: React.FC<TabData> = ({ id, title, tabHandler }) => {
  return (
    <p
      className={styles.tab}
      onClick={() => {
        tabHandler(id);
      }}
    >
      {title}
    </p>
  );
};
