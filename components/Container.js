import styles from '../styles/Container.module.css';

const Container = ({ children, main, firstScreen, secondScreen }) => {
  let Tag, style;

  if (main) {
    Tag = 'div';
    style = styles.main;
  } else if (firstScreen) {
    Tag = 'section';
    style = styles.firstScreen;
  } else if (secondScreen) {
    Tag = 'section';
    style = styles.secondScreen;
  }

  return <Tag className={style}>{children}</Tag>;
};

export default Container;
