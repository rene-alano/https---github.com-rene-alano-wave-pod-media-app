import styles from "./style.module.scss";
import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
export default function BenefitCard({
  id,
  name,
  desc,
  icon,
  flippedCard,
  setFlippedCard,
}) {
  const isFlipped = flippedCard === id;
  const flippedHandler = () => {
    setFlippedCard((prevFlippedCard) => (prevFlippedCard === id ? null : id));
  };

  return (
    <>
      <ReactCardFlip
        containerClassName={styles.CardContainer}
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        <diV className={styles.frontCard} onMouseEnter={flippedHandler}>
          <div className={styles.iconBox}>{icon}</div>
          <h4 className={styles.title}>{name}</h4>
        </diV>
        <diV className={styles.backCard} onMouseLeave={flippedHandler}>
          <p className={styles.desc}>{desc}</p>
        </diV>
      </ReactCardFlip>
    </>
  );
}
