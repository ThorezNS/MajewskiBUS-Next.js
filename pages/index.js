import TopBar from '../components/TopBar';
import container from '../styles/Containers.module.css';

export default function Home() {
  return (
    <div className={container.main}>
      <div className={container.firstScreen}>
        <TopBar />
      </div>
      <div className={container.secondScreen}></div>
    </div>
  );
}
