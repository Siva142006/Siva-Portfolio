import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleActive = () => {
      let currentSection = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    handleActive();
    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#home"
            aria-label="Go to home section"
          >
            <span className="brand-mark">SIVA.G</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2">
              {navItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <a
                    className={`nav-link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="btn btn-primary d-inline-flex align-items-center gap-2 navbar-cta"
              href="/resume/Siva%20G%20resume%20.pdf"
              download="Siva-G-Resume.pdf"
            >
              <i className="bi bi-download" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
