import styles from '../styles/Messages.module.css';
import messages from '../data/messages.json';

const Messages = () => {
  return (
    <div className={styles.messages}>
      <div className={styles.titleContainer}>
        <i className="fa-solid fa-circle-exclamation"></i>
        <h2 className={styles.title}>Komunikaty</h2>
      </div>
      <div className={styles.wrapper}>
        {messages.map((message, i) => {
          return (
            <div className={styles.message} key={i}>
              <p className={styles.date}>{message.date}</p>
              {message.body.map((row, j) => {
                return (
                  <p className={styles.text} key={j}>
                    {row}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
