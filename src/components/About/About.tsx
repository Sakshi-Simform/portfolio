import React from "react";
import styles from '../../styles/About.module.css'
import aboutImage from '../../../assets/about/aboutImage.png'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import uiIcon from '../../../assets/about/uiIcon.png'

export  const About: React.FC = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design.
              </p>
            </div>
          </li>
        </ul>
        </div>
    </section>
  );
};