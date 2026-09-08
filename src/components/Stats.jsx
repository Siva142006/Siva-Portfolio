import { useEffect, useState } from 'react';

const stats = [
  { value: 8.3, suffix: '+', label: 'CGPA' },
  { value: 4, suffix: '+', label: 'Projects' },
  { value: 2, suffix: '+', label: 'Internship' },
  { value: 5, suffix: '+', label: 'Technologies' }
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = value * eased;
      setCount(nextValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <span>
      {value >= 10 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section className="stats-section section-space-sm" aria-labelledby="stats-heading">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Quick Stats</span>
          <h2 id="stats-heading">Snapshot</h2>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="col-md-6 col-xl-3 reveal-up" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="stat-card glass-card">
                <h3>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
