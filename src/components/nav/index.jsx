import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Nav from "./parts/index";
import { Link } from "react-router-dom";
import logo from "../../assets/wave-pad-logo-final.png";
export default function NavBar() {
  const navs = ["How it Works", "Benefits", "Pricing", "About", "Contact Us"];

  return (
    <>
      <header className={styles.Header}>
        <a>
          <img className={styles.logoImage} alt="wavepod logo" src={logo}></img>
        </a>

        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            {navs.map((item, index) => (
              <Nav key={index} to="/" name={item} />
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
