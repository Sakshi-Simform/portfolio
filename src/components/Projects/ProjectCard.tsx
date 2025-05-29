import type { Project } from "../../types/type";
import styles from "../../styles/ProjectCard.module.css";

interface ProjectCardProp {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProp> = ({
  project: { title, image, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagediv}><img
        src={image}
        className={styles.image}
      /></div>
      <div className={styles.right}><h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={demo} className={styles.link} target="_blank">
            Demo
          </a>
          <a href={source} className={styles.link} target="_blank">
            Source
          </a>
        </div>
        </div>
    </div>
  );
};