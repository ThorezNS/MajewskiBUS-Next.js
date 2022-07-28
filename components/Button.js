import styles from '../styles/Button.module.css';

const Button = ({ timetable, tickets, text, handleToggle }) => {
  let buttonElement;
  const border = <span className={styles.border}></span>;

  if (timetable) {
    buttonElement = (
      <a className={styles.button} target="_blank" href="/majewski_rozklad.pdf">
        {text}
        {border}
      </a>
    );
  } else if (tickets) {
    buttonElement = (
      <button onClick={handleToggle} className={styles.button}>
        {text}
        {border}
      </button>
    );
  }
  return buttonElement;
};

export default Button;
