import styles from '../styles/Button.module.css';

const Button = ({ text }) => {
  return (
    <>
      <button className={styles.button}>
        {text}
        <span className={styles.border}></span>
      </button>
    </>
  );
};

export default Button;
