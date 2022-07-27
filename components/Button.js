import styles from '../styles/Button.module.css';

const Button = ({ timetable, tickets, text }) => {
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
      <button className={styles.button}>
        {text}
        {border}
      </button>
    );
  }
  return buttonElement;
};

export default Button;
