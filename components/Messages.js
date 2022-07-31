import styles from '../styles/Messages.module.css';

const Messages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        <div className={styles.titleContainer}>
          <i className="fa-solid fa-circle-exclamation"></i>
          <h2 className={styles.title}>Komunikaty</h2>
        </div>
      </div>
    </div>
  );
};

export default Messages;
