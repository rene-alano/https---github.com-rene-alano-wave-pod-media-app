import styles from "./style.module.scss";
import Wave from "react-wavify";
import ReactTyped from "react-typed";
import { Link } from "react-scroll";
export default function HeroSection() {
  const text = "Digital Wave";

  return (
    <>
      <section className={styles.heroSection} id="hero">
        <div className={styles.hero}>
          <div className={styles.Container}>
            <div className={styles.titleBox}>
              <div>
                <h1 className={`${styles.title} ${styles.textAlign}`}>
                  Riding the&nbsp;
                </h1>
              </div>
              <div>
                <ReactTyped
                  strings={["Digital Wave", "@WavePod"]}
                  typeSpeed={200}
                  loop={true}
                  style={{
                    textAlign: "left",
                    fontSize: "82px",
                    lineHeight: "1.05",
                    margin: "0",
                    fontWeight: "700",
                    color: "#001d5b",
                  }}
                />
              </div>
              <div className={styles.merge}>
                <h1 className={styles.title}>Making Your Brand Shine!</h1>
              </div>
            </div>
            <p className={styles.description}>
              Strategic digital marketing solutions to propel your brand to new
              heights.
              <br /> Join us on the journey to digital excellence.
            </p>

            <div className={styles.buttonContainer}>
              <Link
                className={styles.BtnPlaceHolder}
                activeClass="active"
                to="howitworks"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Get Started
              </Link>
              <p className={styles.freeTrialText}>FREE 3-day trial.</p>
            </div>
          </div>
        </div>
      </section>
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </>
  );
}
