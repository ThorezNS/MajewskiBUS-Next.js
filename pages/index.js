import BackgroundImage from '../components/BackgroundImage';
import BottomBar from '../components/BottomBar';
import Container from '../components/Container';
import TopBar from '../components/TopBar';

export default function Home() {
  return (
    <Container main>
      <Container firstScreen>
        <TopBar />
        <BackgroundImage bus />
      </Container>
      <Container secondScreen>
        <BottomBar />
        <BackgroundImage busInterior />
      </Container>
    </Container>
  );
}
