import { experience } from "../../Mockdata/Experience";
import styles from "../../styles/Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {experience.map((item, index) => (
            <li className={styles.historyItem} key={index}>
              <img
                src="https://th.bing.com/th/id/OIP.nV2K7VZ6_JuXrNAXiQqV8QAAAA?cb=iwc2&rs=1&pid=ImgDetMain"
                alt={item.organisation}
              />
              <div className={styles.historyItemDetails}>
                <h3>{item.role}, {item.organisation}</h3>
                <p>{item.startDate} - {item.endDate}</p>
                <ul>
                  {item.experience.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};