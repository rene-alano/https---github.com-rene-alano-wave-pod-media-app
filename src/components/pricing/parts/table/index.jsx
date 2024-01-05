import styles from "./styles.module.scss";
export default function IndividualService({ individualService }) {
  return (
    <>
      <div className={styles.tableBox}>
        <div className={styles.serviceBox}>
          <h4 className={styles.individual}>Individual Services</h4>
          {individualService?.map((service, index) => (
            <p className={styles.text}>&nbsp;&nbsp;{service.name}</p>
          ))}
        </div>
        <div className={styles.priceBox}>
          <h4 className={styles.title}>Price Points</h4>
          {individualService?.map((service, index) => (
            <div className={styles.priceContent}>
              <span>₱</span>
              <p className={styles.text}>{service.price}</p>
            </div>
          ))}
        </div>
        <div className={styles.durationBox}>
          <h4 className={styles.title}>Duration</h4>
          <p className={styles.text}>/ month</p>
          <p className={styles.text}>/ month</p>
          <p className={styles.text}>/ month</p>
          <p className={styles.text}>/ month</p>
          <p className={styles.text}>/ month</p>
        </div>
      </div>
    </>
  );
}
