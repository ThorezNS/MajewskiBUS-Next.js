import styles from '../styles/Popup.module.css';
import text from '../data/theTextOfThePopup.json';

const Popup = ({ isActive, handleToggle }) => {
  return (
    <div
      className={
        isActive ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <button onClick={handleToggle} className={styles.button}>
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  );
};

export default Popup;
