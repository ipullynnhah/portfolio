import { ProjectList } from "./ProjectList";
import styles from "./style.module.css";

export function ProjectSection() {
  return (
    <section id={"projects"} className={styles.project}>
      <h2 className={"title md"}>Projetos</h2>
      <ProjectList />
    </section>
  );
}
