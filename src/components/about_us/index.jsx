import styles from "./style.module.scss";
import PlanningImg from "../../assets/planning.jpeg";
export default function AboutUsSection() {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutUsSection}>
          <div className={styles.upperSection}>
            <div className={styles.rideSection}>
              <h3 className={styles.title}>Let's Ride the Wave Together.</h3>
              <p className={styles.rideContent}>
                From startups to established businesses,
                <span className={styles.companyName}> Wavepod</span> is your
                partner in achieving digital success.
              </p>
              <p className={styles.joinUsText}>
                Join us on this journey to elevate your brand!
              </p>
            </div>
            <div className={styles.image}>
              <img
                src={PlanningImg}
                alt="women plannning"
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.lowerSection}>
            <div className={`${styles.aboutUsContent} ${styles.contentSize}`}>
              <h3>About Us</h3>
              <p>
                Welcome to <span className={styles.name}> Wavepod</span> Agency,
                your digital marketing partner. We're here to ride the digital
                wave, turning ideas into impactful results.
              </p>
            </div>
            <div
              className={`${styles.ourMissionContent} 
            ${styles.contentSize}`}
            >
              <h3>Our Mission</h3>
              <p>
                Empowering businesses to thrive in the online realm through
                strategic and creative digital marketing.
              </p>
            </div>
            <div className={`${styles.whoWeAreContent} ${styles.contentSize}`}>
              <h3>Who We Are</h3>
              <p>
                <span className={styles.name}> Wavepod</span> is a team of
                passionate professionals dedicated to delivering tailored
                solutions for your brand's success.
              </p>
            </div>
            <div
              className={`${styles.whatSetUsApartContent} ${styles.contentSize}`}
            >
              <h3>What Sets Us Apart</h3>
              <p>
                Strategic Approach: We craft personalized strategies that
                resonate with your
              </p>
              <p>
                Results-Driven: Data guides our decisions to ensure your
                marketing efforts deliver measurable results.
              </p>
              <p>
                Creativity Matters: Staying innovative keeps your brand ahead of
                the curve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
