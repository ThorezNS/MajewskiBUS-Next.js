import styles from '../styles/TopBar.module.css';
import Logo from './Logo';

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <Logo top />
    </header>
  );
};

export default TopBar;
