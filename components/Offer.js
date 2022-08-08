import styles from '../styles/Offer.module.css';
import offer from '../data/offer.json';

const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{offer.title}</p>
        {offer.text.map((row, i) => {
          return (
            <p className={styles.text} key={i}>
              {row}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
