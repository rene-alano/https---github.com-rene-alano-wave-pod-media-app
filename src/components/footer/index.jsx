import styles from "./styles.module.scss";
import { LogoFacebook } from "react-ionicons";
import { Mail } from "react-ionicons";
import { LogoTwitter } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";

export default function FooterSection() {
  return (
    <>
      <section className={styles.footerSection} id="contactus">
        <div className={styles.container}>
          <div className={styles.upperContent}>
            <div className={styles.upperBoxContent}>
              <h2 className={styles.title}>
                Ready to ride <br /> the digital wave <br />
                with Wavepod?
              </h2>
              <p className={styles.description}>
                Reach out to us today and let's make your
                <br /> brand the next success story.
                <br /> We're just a call away!
              </p>

              <a href="tel:+123456789" className={styles.callUs}>
                Call us &rarr;
              </a>
            </div>
          </div>
          <div className={styles.lowerContent}>
            <h1 className={styles.email}>wavepodmedia@gmail.com</h1>
            <div className={styles.footerContainer}>
              <div className={styles.leftContent}>
                <p className={styles.website}>WavePod.me</p>
                <p className={styles.copyright}>© 2024</p>
              </div>
              <div className={styles.iconContainer}>
                <a href="mailto:wavepodmedia@gmail.com" className={styles.icon}>
                  <Mail color={"#ffffff"} height="24px" width="24px" />
                </a>
                <a
                  href="https://www.facebook.com/facebook/"
                  className={styles.icon}
                >
                  <LogoFacebook
                    color={"#ffffff"}
                    height="24px"
                    width="24px"
                    className={styles.icon}
                  />
                </a>
                <a href="https://twitter.com/" className={styles.icon}>
                  <LogoTwitter color={"#ffffff"} height="24px" width="24px" />
                </a>
                <a href="https://www.instagram.com/" className={styles.icon}>
                  <LogoInstagram color={"#ffffff"} height="24px" width="24px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
