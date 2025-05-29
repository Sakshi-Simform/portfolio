import { project } from "../../Mockdata/Project";
import { ProjectCard } from "./ProjectCard";
import styles from "../../styles/Projects.module.css";

export const Projects: React.FC = () => {
  return (
    <div className={styles.projectcontainer}>
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
