import Container from '../components/Container';
import TopBar from '../components/TopBar';

export default function Home() {
  return (
    <Container main>
      <Container firstScreen>
        <TopBar />
      </Container>
      <Container secondScreen></Container>
    </Container>
  );
}
