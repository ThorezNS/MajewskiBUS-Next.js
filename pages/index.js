import BackgroundImage from '../components/BackgroundImage';
import BottomBar from '../components/BottomBar';
import Button from '../components/Button';
import Container from '../components/Container';
import Popup from '../components/Popup';
import TopBar from '../components/TopBar';
import Messages from '../components/Messages';
import Offer from '../components/Offer';
import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => setIsActive(!isActive);

  return (
    <Container main>
      <Container firstScreen>
        <TopBar>
          <Button timetable text="Rozkład jazdy" />
          <Button tickets text="Bilety" handleToggle={handleToggle} />
        </TopBar>
        <Popup isActive={isActive} handleToggle={handleToggle} />
        <Container firstScreenContent>
          <Messages />
          <Offer />
        </Container>
        <BackgroundImage bus />
      </Container>
      <Container secondScreen>
        <BottomBar />
        <BackgroundImage busInterior />
      </Container>
    </Container>
  );
}
