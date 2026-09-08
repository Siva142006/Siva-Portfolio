function ResumeCTA() {
  return (
    <section className="section-space-sm">
      <div className="container">
        <div className="cta-panel glass-card reveal-up">
          <div className="cta-content">
            <span className="section-tag">Let’s Connect</span>
            <h2>Let&apos;s Build Something Meaningful.</h2>
            <p>
              Interested in working together or have an opportunity that matches
              my skills?
            </p>
          </div>

          <div className="cta-actions d-flex flex-wrap gap-3">
            <a
              className="btn btn-primary btn-lg"
              href="/resume/Siva%20G%20resume%20.pdf"
              download="Siva-G-Resume.pdf"
            >
              Download Resume
            </a>
            <a className="btn btn-outline-light btn-lg" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeCTA;
