import styles from "./styles.module.scss";
import { LogoFacebook } from "react-ionicons";
import { Mail } from "react-ionicons";
import { LogoTwitter } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";

export default function FooterSection() {
  return (
    <>
      <section className={styles.footerSection}>
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

              <a className={styles.callUs}>Call us &rarr;</a>
            </div>
          </div>
          <div className={styles.lowerContent}>
            <h1 className={styles.email}>hello@wavepodmedia.com</h1>
            <div className={styles.footerContainer}>
              <div className={styles.leftContent}>
                <p className={styles.website}>WavePod.me</p>
                <p className={styles.copyright}>© 2024</p>
              </div>
              <div className={styles.iconContainer}>
                <Mail color={"#ffffff"} height="24px" width="24px" />
                <LogoFacebook color={"#ffffff"} height="24px" width="24px" />
                <LogoTwitter color={"#ffffff"} height="24px" width="24px" />
                <LogoInstagram color={"#ffffff"} height="24px" width="24px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
