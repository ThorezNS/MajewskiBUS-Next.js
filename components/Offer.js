import styles from '../styles/Offer.module.css';
import offer from '../data/offer.json';
import getTextShadow from '../helpers/getTextShadow';

const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{offer.title}</p>
        {offer.text.map((row, i, a) => {
          return (
            <p
              className={`${styles.text} ${getTextShadow(i, a, styles.shadow)}`}
              key={i}
            >
              {row}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
