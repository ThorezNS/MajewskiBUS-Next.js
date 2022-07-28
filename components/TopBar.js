import styles from '../styles/TopBar.module.css';
import Container from './Container';
import Logo from './Logo';
import Title from './Title';

const TopBar = ({ children }) => {
  return (
    <header className={styles.topBar}>
      <Logo top />
      <Container buttonsAndTitle>
        <Container buttons>{children}</Container>
        <Title />
      </Container>
    </header>
  );
};

export default TopBar;
