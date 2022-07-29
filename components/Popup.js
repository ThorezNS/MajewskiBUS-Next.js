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
      {text.map((section, i) => {
        return (
          <div key={i}>
            <h2 className={styles.title}>{section.title}</h2>
            {section.body.map((body, j) => {
              return (
                <div key={j}>
                  <p className={styles.paragraph}>{body.paragraph}</p>
                  {body.bullet.map((bullet, k) => {
                    return (
                      <span key={k} className={styles.bullet}>
                        {bullet}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Popup;
