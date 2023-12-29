import styles from "./style.module.scss";
import { ReactComponent as BarChart } from "../../assets/svg/bar-chart-outline.svg";
import { ReactComponent as Leaf } from "../../assets/svg/leaf-outline.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail-open-outline.svg";
import image from "../../assets/example.jpg";
export default function HowItWorksSection() {
  return (
    <>
      <div className={styles.howItWorksSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.headerContainer}>
            <h2 className={styles.sectionTitle}>How it Works?</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.steps}>
              <BarChart className={styles.barChart} />
              <h3 className={styles.stepTitle}>STEP 1</h3>
              <p className={styles.stepDesc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.steps}>
              <Leaf className={styles.barChart} />
              <h3 className={styles.stepTitle}>STEP 2</h3>
              <p className={styles.stepDesc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.steps}>
              <Mail className={styles.barChart} />
              <h3 className={styles.stepTitle}>STEP 3</h3>
              <p className={styles.stepDesc}>
                Lorem ipsum dolor sit, amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className={styles.testimonialContainer}>
            <p className={styles.testimonial}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dolorum cupiditate ut id incidunt porro in est deleniti minus amet
              commodi, ad sit natus velit, pariatur modi nobis et. Aliquid?
            </p>
            <div className={styles.cofounder}>
              <img src={image} alt="co-founder" className={styles.image}></img>
              <p className={styles.name}>Juan Dela Cruz</p>
              <p className={styles.role}>Co-Founder of WavePod Media</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
