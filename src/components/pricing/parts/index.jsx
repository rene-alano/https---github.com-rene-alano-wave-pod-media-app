import styles from "./styles.module.scss";
import ContentList from "./list_content";
export default function PlanCard({
  planName,
  planDescription,
  price,
  priceDescription,
  bgColor,
  contents,
}) {
  return (
    <>
      <div
        className={`${styles.plan} ${
          planName === "Standard" ? styles.planStandard : ""
        }`}
      >
        <div className={styles.planCard}>
          <div className={styles.upperContent}>
            <h4 className={styles.planName}>{planName}</h4>
            <p className={styles.planNameDesc}>{planDescription}</p>
          </div>
          <div className={styles.midContent}>
            <h4 className={styles.price}>{price}</h4>
            <p className={styles.planNameDesc}>{priceDescription}</p>
            <div className={styles.buttonContainer}>
              <a
                className={styles.button}
                style={{
                  backgroundColor: bgColor,
                  color: planName === "Standard" ? "white" : "black",
                }}
              >
                Get started
              </a>
            </div>
          </div>
          <div className={styles.lowerContent}>
            <ul className={styles.lists}>
              {contents?.map((content, index) => {
                return (
                  <ContentList key={index} content={content}></ContentList>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
