import styles from "./styles.module.scss";
import ContentList from "./list_content";
import { Link } from "react-scroll";
export default function PlanCard({
  planName,
  planDescription,
  price,
  priceDescription,

  services,
  servicesNotIncluded,
}) {
  return (
    <>
      <div
        className={`${styles.plan} ${
          planName === "Package 1" ? styles.planBasic : ""
        } ${planName === "Package 2" ? styles.planStandard : ""} ${
          planName === "Package 3" ? styles.planPremium : ""
        }`}
      >
        <div className={styles.planCard}>
          <div className={styles.upperContent}>
            <h4 className={styles.planName}>{planName}</h4>
            <p className={styles.planNameDesc}>{planDescription}</p>
          </div>
          <div className={styles.midContent}>
            <div className={styles.priceBox}>
              <span>₱&nbsp;</span>
              <h4 className={styles.price}>{price}</h4>
              <span>&nbsp;/ month</span>
            </div>
            <p className={styles.planNameDesc}>{priceDescription}</p>
          </div>
          <div className={styles.lowerContent}>
            <ul className={styles.lists}>
              {services?.map((service, index) => {
                return (
                  <ContentList key={index} service={service}></ContentList>
                );
              })}
              {servicesNotIncluded?.map((service, index) => (
                <ContentList key={index} notInclude={service}></ContentList>
              ))}
            </ul>
          </div>
          <div className={styles.buttonContent}>
            <div className={styles.buttonContainer}>
              <Link
                className={`${styles.button} ${
                  planName === "Package 1" ? styles.basicButton : ""
                } ${planName === "Package 2" ? styles.standardButton : ""} ${
                  planName === "Package 3" ? styles.premiumButton : ""
                }`}
                activeClass="active"
                to="contactus"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
