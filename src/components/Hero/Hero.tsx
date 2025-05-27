import React from "react";
import heroImage from '../../../assets/hero/heroImage.png'
import styles from "../../styles/Hero.module.css";

export const Hero:React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakshi</h1>
        <p className={styles.description}>
          I'm a Frontend developer.
          Aspiring software engineer at Simform 
          <br />
          with hands-on training in coding, web development.
        </p>
      </div>
      <img
        src={heroImage}
        alt="About image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};