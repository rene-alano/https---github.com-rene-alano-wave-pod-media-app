import styles from "./style.module.scss";
import image from "../../assets/WAVEPOD CO FOUNDER.jpg";
import HowItWorksCard from "./parts";
export default function HowItWorksSection() {
  const howItWorks = [
    {
      name: "Discover the Currents",
      desc: "Explore your brand's unique currents, goals, and challenges.",
    },
    {
      name: "Craft the Tide",
      desc: "We tailor a digital strategy that rides the tide of your brand's journey.",
    },
    {
      name: "Ride the Digital Swell",
      desc: "Launch into action as we ride the waves of innovation, propelling your brand to new heights.",
    },
  ];
  return (
    <>
      <div className={styles.howItWorksSection} id="howitworks">
        <div className={styles.sectionContainer}>
          <div className={styles.headerContainer}>
            <h2 className={styles.sectionTitle}>How it Works?</h2>
            <p className={styles.description}>
              Dive into the digital ocean with Wavepod Media, where success
              comes in waves.
            </p>
          </div>
          <div className={styles.stepsContainer}>
            {howItWorks?.map((item, index) => (
              <HowItWorksCard
                name={item.name}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </div>

          <div className={styles.testimonialContainer}>
            <p className={styles.testimonial}>
              Hey there! 🌊 I'm &nbsp;
              <span className={styles.founderName}>Ken</span>, co-founder of
              Wavepod. We're not just a marketing agency; we're your brand's
              surfing buddy in the vast digital ocean. Let's catch the waves of
              success together! Ready to ride?
              <br />
              #WavepodJourney 🏄‍♂️
            </p>
            <div className={styles.cofounder}>
              <img src={image} alt="co-founder" className={styles.image}></img>
              <p className={styles.name}>John Kenneth Buenafe</p>
              <p className={styles.role}>Co-Founder of WavePod Media</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
