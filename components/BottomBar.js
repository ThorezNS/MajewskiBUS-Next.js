import styles from '../styles/BottomBar.module.css';
import Container from './Container';
import Logo from './Logo';

const BottomBar = () => {
  return (
    <footer className={styles.bottomBar}>
      <Container contact>
        <Logo bottom />
      </Container>
    </footer>
  );
};

export default BottomBar;
