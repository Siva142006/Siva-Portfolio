import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Technical Arsenal</span>
          <h2>Skills &amp; Expertise</h2>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="col-lg-6 reveal-up">
              <div className="skill-group glass-card h-100">
                <div className="skill-header">
                  <i className={`bi ${group.icon}`} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <span
                        className={`skill-level level-${skill.level.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
