import styles from "./style.module.scss";
import PlanCard from "./parts";
export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      planDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "$1000",
      priceDesciption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      bgColor: "#5c7cfa",
      contents: [
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
      ],
    },

    {
      name: "Standard",
      planDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "$3000",
      priceDesciption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      bgColor: "#1c7ed6",
      contents: [
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
      ],
    },
    {
      name: "Premium",
      planDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "$5000",
      priceDesciption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      bgColor: "#5c7cfa",
      contents: [
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
        "Lorem ipsum, dolor sit amet.",
      ],
    },
  ];
  return (
    <>
      <section className={styles.pricingSection}>
        <div className={styles.cointainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.sectionTitle}>Plans & Pricing</h3>
            <p className={styles.sectionDesc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.plansContainer}>
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                planName={plan.name}
                planDescription={plan.planDescription}
                price={plan.price}
                priceDescription={plan.priceDesciption}
                bgColor={plan.bgColor}
                contents={plan.contents}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
