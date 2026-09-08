function ProjectCard({ project }) {
  return (
    <article
      className={`project-card glass-card ${project.featured ? "featured-card" : ""}`}
    >
      <div className="project-visual">
        <img src={project.image} alt={project.title} loading="lazy" />
        {project.featured && (
          <span className="project-badge">FEATURED PROJECT</span>
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            className="btn btn-outline-light btn-sm"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github" aria-hidden="true" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
