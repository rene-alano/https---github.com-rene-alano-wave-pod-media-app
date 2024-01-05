import styles from "./style.module.scss";
import PlanningImg from "../../assets/planning.jpeg";
import ReactCardFlip from "react-card-flip";
import React, { useState, useEffect } from "react";
export default function AboutUsSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flippedHandler = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <>
      <section className={styles.aboutSection} id="aboutus">
        <div className={styles.aboutUsSection}>
          <div className={styles.upperSection}>
            <div className={styles.imageBox}>
              <img
                src={PlanningImg}
                alt="women plannning"
                className={styles.image}
              />
            </div>
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
          </div>
          <div className={styles.lowerSection}>
            <div className={styles.aboutUsContent}>
              <div className={styles.about}>
                <h3 className={styles.title}>About Us</h3>
                <p className={styles.text}>
                  At Wavepod Media, we help businesses to elevate in their
                  industry and field of business, and to create an opportunity
                  for them through giving them complete access to the digitized
                  world and build bridges for them toward the modern age of
                  brand marketing.
                </p>
              </div>

              <div className={styles.mission}>
                <h3 className={styles.title}>Mission</h3>
                <p className={styles.text}>
                  To merge the digital world and business with creativity and
                  relevance to create meaningful and sustainable solutions that
                  connect people and build culture.
                </p>
              </div>

              <div className={styles.vision}>
                <h3 className={styles.title}>Vision</h3>
                <p className={styles.text}>
                  To transform businesses with the help of our business as we
                  commit to honor, inspire, and value our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
