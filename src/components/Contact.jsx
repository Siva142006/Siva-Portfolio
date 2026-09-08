function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Contact</span>
          <h2>Let&apos;s Connect</h2>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-7 reveal-up">
            <div className="contact-panel glass-card text-center">
              <h3>Let&apos;s Connect</h3>
              <p>
                I am always interested in learning, building, collaborating, and
                exploring opportunities in Data Analytics, Data Science, and
                technology.
              </p>

              <div className="contact-list justify-content-center">
                <a
                  href="mailto:sivagovindaraj86@gmail.com"
                  className="contact-item"
                >
                  <i className="bi bi-envelope" aria-hidden="true" />
                  <span>sivagovindaraj86@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
