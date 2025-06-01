import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
         My name is Chukwuani Crystal Chinecherem, i studied Industrial Mathematics and Statistics at Enugu State University.
        I also hold a Data Science certificate. Beyond data, I am a model, actress,
        and TV host, blending analytical skills with creative passion.
      </p>
    </section>
  );
}

export default About;
