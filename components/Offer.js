import styles from '../styles/Offer.module.css';
import offer from '../data/offer.json';
import { useEffect, useState } from 'react';

const Offer = () => {
  const [textShadowIndex, setTextShadowIndex] = useState(-1);

  useEffect(() => {
    const isAnIndexNumberLessThenElements = textShadowIndex < offer.text.length;
    if (isAnIndexNumberLessThenElements) {
      setTimeout(() => {
        setTextShadowIndex(textShadowIndex + 1);
      }, 1500);
    }
  }, [textShadowIndex]);

  return (
    <div className={styles.offer}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{offer.title}</p>
        {offer.text.map((row, i) => {
          return (
            <p
              className={`${styles.text} ${
                i === textShadowIndex ? styles.shadow : ''
              }`}
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
