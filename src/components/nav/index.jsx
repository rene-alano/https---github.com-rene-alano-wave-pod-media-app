import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Nav from "./parts/index";
import { Link } from "react-scroll";
import logo from "../../assets/wave-pad-logo-final.png";
export default function NavBar() {
  const navs = [
    { name: "How it Works", link: "howitworks" },
    { name: "Benefits", link: "benefits" },
    { name: "Pricing", link: "pricing" },
    { name: "About Us", link: "aboutus" },
    { name: "Contact Us", link: "contactus" },
  ];

  return (
    <>
      <header className={styles.Header}>
        <Link
          className={styles.navLink}
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <img className={styles.logoImage} alt="wavepod logo" src={logo}></img>
        </Link>

        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            {navs.map((item, index) => (
              <Nav key={index.name} to={item.link} name={item.name} />
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
