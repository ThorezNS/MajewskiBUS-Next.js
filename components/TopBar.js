import styles from '../styles/TopBar.module.css';
import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import Title from './Title';

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <Logo top />
      <Container buttonsAndTitle>
        <Container buttons>
          <Button text="Rozkład jazdy" />
          <Button text="Bilety" />
        </Container>
        <Title />
      </Container>
    </header>
  );
};

export default TopBar;
