import styles from "./style.module.scss";
export default function HeroSection() {
  return (
    <>
      <div className={styles.heroSection} id="hero">
        <div className={styles.hero}>
          <div className={styles.rightSection}>
            <h1 className={styles.title}>
              Lorem Ipsum amet consectetur adipisicing elit
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              officiis illum neque repellendus mollitia blanditiis, cumque ab,
              assumenda delectus perferendis sint laborum similique magnam
              magni.
            </p>

            <div className={styles.buttonContainer}>
              <a className={styles.BtnPlaceHolder}>Get Started</a>
              <p className={styles.freeTrialText}>FREE 3-day trial.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
