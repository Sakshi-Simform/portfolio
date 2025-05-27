import React from "react";
import { education } from "../../Mockdata/Education";
import { languages } from "../../types/type";
import styles from '../../styles/About.module.css'
import aboutImage from '../../../assets/about/aboutImage.png'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import uiIcon from '../../../assets/about/uiIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'

export const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
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
              <img src={serverIcon} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Education</h3>
                <div className={styles.educationDetail}>
                  {education.map((education) => (
                    <p key={education.id}>
                      <strong className={styles.year}>{education.year}</strong>
                      <br />
                      <span>{education.title}</span>
                      <br />
                      <span>{education.institution}</span>
                    </p>
                  ))}
                </div>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={uiIcon} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>Languages</h3>
                <p className={styles.iconDisplay}>
                  {languages.map((language) => (
                    <span key={language} className={styles.language}>
                      {language}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};