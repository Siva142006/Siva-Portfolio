function ProjectModal({ project, isOpen, onClose }) {
  if (!project || !isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="projectModalLabel"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content custom-modal">
          <div className="modal-header border-0">
            <div>
              <span className="section-tag small-tag">Case Study</span>
              <h3 id="projectModalLabel" className="modal-title">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close modal"
              onClick={onClose}
            />
          </div>

          <div className="modal-body">
            <img
              src={project.image}
              alt={project.title}
              className="case-study-image"
              loading="lazy"
            />

            <div className="case-study-section">
              <h4>Project Overview</h4>
              <p>{project.overview}</p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Objective</h4>
                  <p>{project.objective}</p>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Technology Stack</h4>
                  <div className="tag-list">
                    {project.technologyStack.map((tool) => (
                      <span key={tool} className="project-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Development Process</h4>
                  <p>{project.process}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Key Features</h4>
                  <ul className="case-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Challenges</h4>
                  <ul className="case-list">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="case-study-section">
                  <h4>Results</h4>
                  <p>{project.results}</p>
                </div>
              </div>
            </div>

            <div className="case-study-section">
              <h4>Future Improvements</h4>
              <ul className="case-list">
                {project.futureImprovements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal-footer border-0">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
