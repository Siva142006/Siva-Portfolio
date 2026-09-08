import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Featured Projects</span>
          <h2>Selected Work</h2>
        </div>

        <div className="row g-4 project-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                project.featured
                  ? "col-lg-6 reveal-up"
                  : "col-lg-4 col-md-6 reveal-up"
              }
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
