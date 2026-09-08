function Github() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-heading reveal-up">
          <span className="section-tag">Open Source &amp; GitHub</span>
          <h2>Code, Contributions &amp; Projects</h2>
        </div>

        <div className="github-shell glass-card reveal-up">
          <div className="github-header">
            <div>
              <h3>GitHub Activity</h3>
              <p>
                Connect the GitHub API here to display live contribution data
                and repository insights.
              </p>
            </div>
            <a
              className="btn btn-primary"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          {/*
            Replace this placeholder with a real GitHub API fetch using fetch('https://api.github.com/users/{username}')
            and optionally the user repositories endpoint. This keeps the chart and repository stats live instead of static values.
          */}

          <div
            className="github-graph"
            aria-label="GitHub contribution placeholder"
          >
            <div className="graph-row">
              <span className="graph-block level-1" />
              <span className="graph-block level-2" />
              <span className="graph-block level-3" />
              <span className="graph-block level-4" />
              <span className="graph-block level-1" />
              <span className="graph-block level-2" />
              <span className="graph-block level-3" />
            </div>
            <div className="graph-row">
              <span className="graph-block level-2" />
              <span className="graph-block level-1" />
              <span className="graph-block level-4" />
              <span className="graph-block level-3" />
              <span className="graph-block level-2" />
              <span className="graph-block level-1" />
              <span className="graph-block level-2" />
            </div>
            <div className="graph-row">
              <span className="graph-block level-1" />
              <span className="graph-block level-3" />
              <span className="graph-block level-2" />
              <span className="graph-block level-1" />
              <span className="graph-block level-4" />
              <span className="graph-block level-3" />
              <span className="graph-block level-2" />
            </div>
          </div>

          <div className="github-stats row g-3 mt-3">
            <div className="col-md-4">
              <div className="mini-stat">
                <span className="label">Repositories</span>
                <strong>Live API</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mini-stat">
                <span className="label">Projects</span>
                <strong>Live API</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mini-stat">
                <span className="label">Languages</span>
                <strong>Live API</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
