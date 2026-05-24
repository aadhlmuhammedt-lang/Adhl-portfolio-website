const Projects = () => {

  return (

    <section id="projects" className="section">

      <h1 className="section-title">
        Projects
      </h1>

      <p className="project-sub">
        Some projects I have built during my learning journey
        in full stack web development.
      </p>

      <div className="projects-container">

        {/* PROJECT 1 */}

        <div className="project-card">

          <div className="project-number">
            01
          </div>

          <h2>
            Online Examination System
          </h2>

          <p>
            Developed a full stack web application for managing
            online examinations, student submissions,
            question handling, and database operations.
          </p>

          <div className="project-tech">

            <span>React</span>
            <span>Node.js</span>
            <span>SQL</span>

          </div>

        </div>

        {/* PROJECT 2 */}

        <div className="project-card">

          <div className="project-number">
            02
          </div>

          <h2>
            YOUGO BUS
          </h2>

          <p>
            Built a smart transportation safety application
            focused on passenger security, transport management,
            and real-time tracking concepts.
          </p>

          <div className="project-tech">

            <span>React</span>
            <span>Node.js</span>

          </div>
        </div>

        {/* PROJECT 3 */}

        <div className="project-card">

          <div className="project-number">
            03
          </div>

          <h2>
            Portfolio Website
          </h2>

          <p>
            Designed and developed a modern personal portfolio
            website with black & white sketch aesthetics,
            smooth animations, and responsive layouts.
          </p>

          <div className="project-tech">

            <span>React</span>
            <span>CSS</span>
            <span>GSAP</span>

          </div>

          <div className="project-links">

            <a href="adhl-portfolio-website.vercel.app">
              Live Demo
            </a>

            <a href="#https://github.com/aadhlmuhammedt-lang">
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Projects