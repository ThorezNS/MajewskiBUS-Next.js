import styles from '../styles/Containers.module.css';

const Container = ({ children, main, firstScreen, secondScreen }) => {
  let style;
  if (main) {
    style = styles.main;
  } else if (firstScreen) {
    style = styles.firstScreen;
  } else if (secondScreen) {
    style = styles.secondScreen;
  }

  return <div className={style}>{children}</div>;
};

export default Container;
