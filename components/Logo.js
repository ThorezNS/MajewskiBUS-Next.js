import styles from '../styles/Logo.module.css';

const Logo = ({ top, bottom }) => {
  let left, right;

  if (top) {
    left = styles.logoLeftTopBar;
    right = styles.logoRightTopBar;
  } else if (bottom) {
    left = styles.logoLeftBottomBar;
    right = styles.logoRightBottomBar;
  }

  return (
    <div className={styles.container}>
      <span className={`${styles.logoLeft} ${left}`}>Majewski</span>
      <span className={`${styles.logoRight} ${right}`}>BUS</span>
    </div>
  );
};

export default Logo;
