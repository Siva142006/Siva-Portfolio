function About() {
  return (
    <section id="about" className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">About Me</span>
          <h2>Turning data into meaningful solutions</h2>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-7 reveal-up">
            <div className="glass-card about-copy">
              <p>
                I am Siva G, an Artificial Intelligence and Data Science student
                at Annapoorana Engineering College. I am passionate about Data
                Analytics, Data Science, Data Visualization, and software
                development.
              </p>
              <p>
                I enjoy working with Python, SQL, Power BI, Excel, Pandas,
                NumPy, and Matplotlib to clean, analyze, visualize, and extract
                meaningful insights from data. Through internships and hands-on
                projects, I have gained practical experience in data
                preprocessing, dashboard development, web application
                development, and intelligent solutions.
              </p>

              <div className="about-pills d-flex flex-wrap gap-2 mt-4">
                {[
                  "Data Analytics",
                  "Data Science",
                  "Data Visualization",
                  "Web Development",
                ].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-5 reveal-up">
            <div className="profile-card glass-card">
              <div className="profile-top">
                <div className="profile-avatar">
                  <img src="/images/profile.png" alt="Portrait of Siva G" />
                </div>
                <div>
                  <h3>Siva G</h3>
                  <p>AI &amp; Data Science Student</p>
                </div>
              </div>

              <ul className="profile-list">
                <li>
                  <span className="label">Education</span>
                  <strong>Artificial Intelligence &amp; Data Science</strong>
                </li>
                <li>
                  <span className="label">Current Focus</span>
                  <strong>
                    Full Stack Development, Data Analytics, business Analyst
                  </strong>
                </li>
                <li>
                  <span className="label">Primary Languages</span>
                  <strong>Python, JavaScript, SQL</strong>
                </li>
                <li>
                  <span className="label">Tools</span>
                  <strong>Power BI, Excel, Git-Github, VS Code</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
