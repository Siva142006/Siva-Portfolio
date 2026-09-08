import { certifications } from "../data/experience";

function Certifications() {
  return (
    <section id="certifications" className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Certifications</span>
          <h2>Learning Milestones</h2>
        </div>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="col-md-6 col-xl-4 reveal-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="cert-card glass-card h-100">
                <div className="cert-icon">
                  <i className="bi bi-patch-check-fill" aria-hidden="true" />
                </div>
                <div className="cert-body">
                  <span className="cert-year">{cert.year}</span>
                  <h3>{cert.name}</h3>
                  <p>{cert.organization}</p>
                  <ul className="cert-topics">
                    {cert.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    View Certificate{" "}
                    <i className="bi bi-arrow-up-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
