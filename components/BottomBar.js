import styles from '../styles/BottomBar.module.css';
import Contact from './Contact';
import Container from './Container';
import Logo from './Logo';

const BottomBar = () => {
  return (
    <footer className={styles.bottomBar}>
      <Container contact>
        <Logo bottom />
        <Contact />
      </Container>
    </footer>
  );
};

export default BottomBar;
