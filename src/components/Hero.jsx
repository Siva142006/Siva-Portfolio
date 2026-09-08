const socials = [
  { icon: "bi-github", label: "GitHub", href: "https://github.com/Siva142006" },
  {
    icon: "bi-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/siva142006",
  },
  {
    icon: "bi-envelope",
    label: "Email",
    href: "mailto:sivagovindaraj86@gmail.com",
  },
];

function Hero() {
  return (
    <section id="home" className="hero-section position-relative">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="hero-copy reveal-up">
              <h1>
                SIVA G
                <span className="gradient-text">
                  Data Analyst &amp; Aspiring Data Scientist
                </span>
              </h1>
              <p>
                Turning data into meaningful insights and building practical
                technology solutions.
              </p>

              <div className="hero-actions d-flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href="#projects">
                  Explore My Work
                </a>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="/resume/Siva%20G%20resume%20.pdf"
                  download="Siva-G-Resume.pdf"
                >
                  Download Resume
                </a>
              </div>

              <div className="social-row d-flex flex-wrap align-items-center gap-3 mt-4">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="social-link"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    aria-label={item.label}
                  >
                    <i className={`bi ${item.icon}`} aria-hidden="true" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="terminal-panel reveal-up">
              <div className="terminal-badge">
                AI &amp; Data Science Student
              </div>
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="terminal-body">
                  <div className="terminal-line">Siva@portfolio:~$</div>
                  <div className="terminal-line command">$ whoami</div>
                  <div className="terminal-line output">
                    Data Analyst | Aspiring Data Scientist
                  </div>

                  <div className="terminal-line command">$ skills</div>
                  <div className="terminal-line output">Python</div>
                  <div className="terminal-line output">SQL</div>
                  <div className="terminal-line output">Pandas</div>
                  <div className="terminal-line output">NumPy</div>
                  <div className="terminal-line output">Power BI</div>
                  <div className="terminal-line output">Excel</div>

                  <div className="terminal-line command">$ status</div>
                  <div className="terminal-line output status-line">
                    <span className="status-dot" /> Open to Opportunities
                  </div>

                  <div className="terminal-line output progress-line">
                    <span className="progress-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
