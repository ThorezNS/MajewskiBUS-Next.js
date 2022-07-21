import styles from '../styles/Title.module.css';

const Title = () => {
  return (
    <h1 className={styles.title}>
      <span>
        Przewóz Osobowo<span className={styles.brighterPart}>-</span>Towarowy
      </span>
      <span className={styles.lowerPart}>
        Piotr Majewski <span className={styles.brighterPart}>i</span> Dariusz
        Majewski <span className={styles.brighterPart}>s.j.</span>
      </span>
    </h1>
  );
};

export default Title;
