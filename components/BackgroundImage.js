import styles from '../styles/BackgroundImage.module.css';

const BackgroundImage = ({ bus, busInterior }) => {
  let style;
  if (bus) {
    style = styles.bus;
  } else if (busInterior) {
    style = styles.busInterior;
  }
  return <div className={style}></div>;
};

export default BackgroundImage;
