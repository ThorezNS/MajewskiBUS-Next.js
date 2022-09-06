import styles from '../styles/PFRinfo.module.css';

const PFRinfo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/pfr-logo.png" alt="PFR logo" />
      <p className={styles.text}>
        Przedsiębiorca uzyskał subwencję finansową w ramach programu rządowego
        <span>
          &quot;Tarcza Finansowa 2.0 Polskiego Fundusz Rozwoju dla Mikro, Małych
          i Średnich Firm&quot;
        </span>
        , udzieloną przez PFR SA.
      </p>
    </div>
  );
};

export default PFRinfo;
