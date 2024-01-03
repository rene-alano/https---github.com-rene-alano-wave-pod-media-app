import styles from "./style.module.scss";
import { ReactComponent as Bag } from "../../assets/svg/benefits/bag-outline.svg";
import { ReactComponent as Build } from "../../assets/svg/benefits/build-outline.svg";
import { ReactComponent as Cart } from "../../assets/svg/benefits/cart-outline.svg";
import { ReactComponent as CheckMark } from "../../assets/svg/benefits/checkmark-outline.svg";
import { ReactComponent as Construct } from "../../assets/svg/benefits/construct-outline.svg";
import { ReactComponent as Finger } from "../../assets/svg/benefits/finger-print-outline.svg";

export default function BenefitsSection() {
  return (
    <>
      <div className={styles.benefitSection} id="benefits">
        <div className={styles.sectionContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>Subscription Benefits</h3>
            <p className={styles.titleDesc}>
              Try before you buy with a FREE 3-day trial. No credit card
              required.
            </p>
            <div>
              <a className={styles.BtnPlaceHolder}>Get Started</a>
            </div>
          </div>
          <div className={styles.listContainer}>
            <div className={styles.benefits}>
              <Bag className={styles.icon} />
              <h4 className={styles.benefitTitle}>BENEFIT 1</h4>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.benefits}>
              <Build className={styles.icon} />
              <h4 className={styles.benefitTitle}>BENEFIT 2</h4>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.benefits}>
              <Cart className={styles.icon} />
              <h4 className={styles.benefitTitle}>BENEFIT 3</h4>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.benefits}>
              <CheckMark className={styles.icon} />
              <h4 className={styles.benefitTitle}>BENEFIT 4</h4>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.benefits}>
              <Construct className={styles.icon} />
              <h4 className={styles.benefitTitle}>BENEFIT 5</h4>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.benefits}>
              <Finger className={styles.icon} />
              <h4 className={styles.benefitTitle}>BENEFIT 6</h4>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
