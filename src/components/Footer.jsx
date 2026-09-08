function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top row g-4 align-items-center">
          <div className="col-md-4">
            <div className="brand-block">
              <span className="brand-mark">SIVA.G</span>
              <p>AI &amp; Data Science Student</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a
                href="https://github.com/Siva142006"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/siva142006"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:sivagovindaraj86@gmail.com">Email</a>
            </div>
          </div>

          <div className="col-md-4 text-md-end">
            <p className="footer-note">Built with React + Bootstrap</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Siva G. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
