import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Profile</h1>
        <p className={styles.description}>
       Creative by nature, analytical by training — blending statistical rigor with the creative instincts of a model, actress, and TV host. Skilled in data analysis, communication, and creative problem-solving, with a passion for turning insights into impact. </p>
        <a href="Necheuani@gmail.com" className={styles.contactBtn}>
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero3me.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};