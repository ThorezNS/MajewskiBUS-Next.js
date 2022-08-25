import styles from '../styles/YearsCounter.module.css';

const YearsCounter = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Już od <span className={styles.years}>10</span> lat jeździmy dla Was
      </p>
    </div>
  );
};

export default YearsCounter;
