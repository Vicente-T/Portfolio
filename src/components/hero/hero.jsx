import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vicente</h1>
        <p className={styles.description}>
          I'm Web Development student using Html,Sass, Js and
          React. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vicenteteixeira05@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> 
      </div >
      <img 
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};