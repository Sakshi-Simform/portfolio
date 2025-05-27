import type { Project } from "../../types/type";
import styles from "../../styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
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
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a href={demo} className={styles.link}>
            Demo
          </a>
          <a href={source} className={styles.link}>
            Source
          </a>
        </div></div>

    </div>
  );
};