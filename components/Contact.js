import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.item}>
        <i className="fa-solid fa-phone"></i>
        <a href="tel:503472282">503 472 282</a>
      </div>
      <div className={styles.item}>
        <i className="fa-solid fa-phone"></i>
        <a href="tel:503340935">503 340 935</a>
      </div>
      <div className={styles.item}>
        <i className="fa-solid fa-envelope"></i>
        <a href="mailto:majewski243@o2.pl">majewski243@o2.pl</a>
      </div>
      <div className={styles.item}>
        <i className="fa-solid fa-location-dot"></i>
        <a
          href="https://www.google.com/maps/place/Podegrodzie+243/"
          target="_blank"
        >
          Podegrodzie 243, 33-386 Podegrodzie
        </a>
      </div>
      <div className={styles.item}>
        <p>NIP: 734 283700 6</p>
      </div>
    </div>
  );
};

export default Contact;
