import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import PlanCard from "./parts";
import IndividualService from "./parts/table";

export default function PricingSection() {
  const plans = [
    {
      name: "Package 1",
      planDescription: "Essential features for a strong digital start.",
      price: "40,000",
      save: "5.000",
      priceDesciption: "Unlocking essential digital solutions.",

      service: [
        "Social Media Management",
        "SEO (Search Engine Optimization)",
        "Online Media Placement",
      ],
      notIncluded: ["Influencer Marketing", "Content Marketing"],
    },

    {
      name: "Package 2",
      planDescription: "Unlock advanced tools for brand elevation.",
      price: "60,000",
      save: "5.000",
      priceDesciption: "Upgrade to unlock advanced features.",

      service: [
        "Online Media Placement",
        "Influencer Marketing",
        "Content Marketing",
      ],
      notIncluded: [
        "Social Media Management",
        "SEO (Search Engine Optimization)",
      ],
    },
    {
      name: "Package 3",
      planDescription: "Maximize digital impact with exclusive features.",
      price: "80,000",
      save: "20,000",
      priceDesciption: "Maximize your impact for exclusive benefits.",

      service: [
        "Social Media Management",
        "SEO (Search Engine Optimization)",
        "Online Media Placement",
        "Influencer Marketing",
        "Content Marketing",
      ],
    },
  ];

  const individualService = [
    { name: "Social Media Management", price: "15,000" },
    { name: "SEO (Search Engine Optimization)", price: "20,000" },
    { name: "Online Media Placement", price: "10,000" },
    { name: "Influencer Marketing", price: "25,000" },
    { name: "Content Marketing", price: "30,000" },
  ];
  return (
    <>
      <section className={styles.pricingSection} id="pricing">
        <div className={styles.cointainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.sectionTitle}>Plans & Pricing</h3>
            <p className={styles.sectionDesc}>
              Discover the ideal plan for your brand. Simple pricing, powerful
              results. Join Wavepod for digital success!
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
                services={plan.service}
                servicesNotIncluded={plan.notIncluded}
              />
            ))}
          </div>

          <div className={styles.individualBox}>
            <IndividualService individualService={individualService} />
          </div>
        </div>
      </section>
    </>
  );
}
