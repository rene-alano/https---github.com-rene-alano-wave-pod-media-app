import styles from "./style.module.scss";
import React, { useState } from "react";
import Wave from "react-wavify";
import { ReactComponent as Bulb } from "../../assets/svg/benefits/bulb-outline.svg";
import { ReactComponent as Cut } from "../../assets/svg/benefits/cut-outline.svg";
import { ReactComponent as People } from "../../assets/svg/benefits/people-outline.svg";
import { ReactComponent as Access } from "../../assets/svg/benefits/key-outline.svg";
import { ReactComponent as Card } from "../../assets/svg/benefits/card-outline.svg";
import { ReactComponent as Calendar } from "../../assets/svg/benefits/calendar-outline.svg";

import BenefitCard from "./parts";
export default function BenefitsSection() {
  const [flippedCard, setFlippedCard] = useState(null);
  const benefits = [
    {
      name: "Exclusive Insights",
      desc: "Stay ahead with insider tips and digital trends. ",
      icon: <Bulb />,
    },
    {
      name: "Tailored Strategies",
      desc: "Receive personalized marketing plans for your brand.",
      icon: <Cut />,
    },
    {
      name: "Priority Support",
      desc: "Get first-class assistance whenever you need it.",
      icon: <People />,
    },
    {
      name: "Early Access",
      desc: "Be the first to experience our latest services and features.",
      icon: <Access />,
    },
    {
      name: "Savings and Discounts",
      desc: "Enjoy special offers and discounted rates on our services.",
      icon: <Card />,
    },
    {
      name: "Monthly Updates",
      desc: "Receive regular reports on your brand's digital performance.",
      icon: <Calendar />,
    },
  ];
  return (
    <>
      <section className={styles.benefitSection} id="benefits">
        <div className={styles.sectionContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>Subscription Benefits</h3>
            <p className={styles.titleDesc}>
              Try before you buy with a FREE 3-day trial. No credit card
              required.
            </p>
          </div>
          <div className={styles.listContainer}>
            {benefits?.map((benefit, index) => (
              <BenefitCard
                key={index}
                id={index}
                name={benefit.name}
                desc={benefit.desc}
                icon={benefit.icon}
                flippedCard={flippedCard}
                setFlippedCard={setFlippedCard}
              />
            ))}
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
