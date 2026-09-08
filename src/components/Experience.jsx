import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Experience</span>
          <h2>Career Journey</h2>
        </div>

        <div className="timeline-wrap">
          {experiences.map((item, index) => (
            <div
              key={`${item.title}-${item.company}`}
              className="timeline-item reveal-up"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span>{item.location}</span>
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul className="timeline-list">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
