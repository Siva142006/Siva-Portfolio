function Education() {
  return (
    <section className="section-space-sm">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Education</span>
          <h2>Academic Background</h2>
        </div>

        <div className="education-card glass-card reveal-up">
          <div className="education-row">
            <div>
              <span className="education-label">Degree</span>
              <h3>B.Tech — Artificial Intelligence and Data Science</h3>
            </div>
            <div className="education-badge">CGPA 8.23</div>
          </div>

          <div className="education-meta">
            <span className="education-college">
              Annapoorana Engineering College, Salem, Tamil Nadu · 2023 – 2027
            </span>
          </div>
        </div>

        <div className="education-card glass-card reveal-up mt-4">
          <div className="education-row">
            <div>
              <span className="education-label">Higher Secondary — 12th</span>
              <h3>Government Boys Higher Secondary School</h3>
            </div>
            <div className="education-badge">60%</div>
          </div>
          <div className="education-meta">
            <span className="education-college">
              Marandahalli, Tamil Nadu · 2022 – 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
