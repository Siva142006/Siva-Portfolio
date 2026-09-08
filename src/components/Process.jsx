const processSteps = [
  { index: "01", title: "Discover" },
  { index: "02", title: "Research" },
  { index: "03", title: "Design" },
  { index: "04", title: "Develop" },
  { index: "05", title: "Test" },
  { index: "06", title: "Deploy" },
  { index: "07", title: "Improve" },
];

function Process() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Process</span>
          <h2>How I Build</h2>
        </div>

        <div className="process-timeline reveal-up">
          {processSteps.map((step, index) => (
            <div
              key={step.index}
              className="process-step"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="process-card glass-card">
                <span className="process-index">{step.index}</span>
                <h3>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
