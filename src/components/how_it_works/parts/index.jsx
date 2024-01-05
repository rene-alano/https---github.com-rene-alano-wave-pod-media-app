import styles from "./style.module.scss";

export default function HowItWorksCard({ name, desc }) {
  return (
    <>
      <div className={styles.steps}>
        <h3 className={styles.stepTitle}>{name}</h3>
        <div className={styles.descBox}>
          <p className={styles.stepDesc}>{desc}</p>
        </div>
      </div>
    </>
  );
}
