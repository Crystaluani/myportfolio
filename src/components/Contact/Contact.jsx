import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Interested in my data science work? Check out my projects on GitHub!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:Necheuani@gmail.com">Necheuani@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="tel:07084498946">07084498946</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Crystaluani">github.com/Crystaluani</a>
        </li>
      </ul>
    </footer>
  );
};
