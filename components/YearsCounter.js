import styles from '../styles/YearsCounter.module.css';
import { getNumberOfYears } from '../helpers/getNumberOfYears';

const YearsCounter = () => {
  const year = getNumberOfYears(2008);
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Już od <span className={styles.years}>{year}</span> lat jeździmy dla Was
      </p>
    </div>
  );
};

export default YearsCounter;
