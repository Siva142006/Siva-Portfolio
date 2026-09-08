const focusAreas = [
  {
    title: "Data Analytics",
    description: "Transforming raw data into actionable business insights.",
    icon: "bi-bar-chart-line",
  },
  {
    title: "Data Science",
    description:
      "Exploring data and developing intelligent solutions to real-world problems.",
    icon: "bi-cpu",
  },
  {
    title: "Data Visualization",
    description:
      "Creating clear and interactive dashboards that make data easier to understand.",
    icon: "bi-pie-chart",
  },
  {
    title: "Web Development",
    description: "Building practical and user-friendly web applications.",
    icon: "bi-window",
  },
];

const achievements = [
  ["Visionary Innovators Award", "Hack Fest 2K25"],
  ["First Prize", "PyCheck Web Application - Engineer's Day"],
  ["First Prize", "Text Summarisation Website - Intra Symposium"],
  [
    "Third Prize",
    "Artificial General Intelligence Presentation - Intra Symposium",
  ],
];

const softSkills = [
  "Teamwork",
  "Leadership",
  "Time Management",
  "Effective Communication",
  "Logical Thinking",
  "Organization",
];

function ProfileDetails() {
  return (
    <>
      <section className="section-space-sm" aria-labelledby="focus-heading">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="section-tag">My Focus</span>
            <h2 id="focus-heading">Where I create value</h2>
          </div>
          <div className="row g-4">
            {focusAreas.map((item, index) => (
              <div
                key={item.title}
                className="col-md-6 col-xl-3 reveal-up"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="glass-card h-100 p-4">
                  <i className={`bi ${item.icon} fs-2`} aria-hidden="true" />
                  <h3 className="h5 mt-3">{item.title}</h3>
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-space-sm"
        aria-labelledby="achievements-heading"
      >
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="section-tag">Achievements</span>
            <h2 id="achievements-heading">Recognition and milestones</h2>
          </div>
          <div className="row g-4">
            {achievements.map(([title, event], index) => (
              <div
                key={title + event}
                className="col-md-6 reveal-up"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="glass-card p-4 h-100">
                  <i className="bi bi-trophy-fill fs-3" aria-hidden="true" />
                  <h3 className="h5 mt-3">{title}</h3>
                  <p className="mb-0">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-space-sm"
        aria-labelledby="personal-skills-heading"
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 reveal-up">
              <div className="glass-card p-4 h-100">
                <span className="section-tag">Soft Skills</span>
                <h2 id="personal-skills-heading" className="h3 mt-3">
                  How I work
                </h2>
                <div className="about-pills d-flex flex-wrap gap-2 mt-4">
                  {softSkills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4 reveal-up">
              <div className="glass-card p-4 h-100">
                <span className="section-tag">Languages</span>
                <h2 className="h3 mt-3">Communication</h2>
                <p className="mb-2">
                  <strong>Tamil</strong> - Native
                </p>
                <p className="mb-0">
                  <strong>English</strong> - Professional Working Proficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileDetails;
