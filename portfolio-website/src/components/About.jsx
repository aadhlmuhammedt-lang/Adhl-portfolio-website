const About = () => {

  return (

    <section id="about" className="section">

      <h1 className="section-title">
        About Me
      </h1>

      <div className="about-container">

        <div className="about-text">

          <h2>
            Full Stack Developer
          </h2>

          <p>
            I'm an aspiring Full Stack Developer passionate
            about building modern, responsive, and user-friendly
            web applications using React, Node.js, SQL,
            and modern frontend technologies.
          </p>

          <p>
            Currently pursuing my undergraduate degree while
            continuously improving my practical development skills
            through real-world projects, self-learning,
            and full stack development training.
          </p>

          <p>
            I enjoy creating clean UI designs, interactive user
            experiences, and scalable applications with a
            minimal and modern design approach.
          </p>

        </div>

        {/* SMALL INFO CARDS */}

        <div className="about-cards">

          <div className="about-card">
            <h3>Frontend</h3>
            <p>React, HTML, CSS, JavaScript</p>
          </div>

          <div className="about-card">
            <h3>Backend</h3>
            <p>Node.js, API Integration</p>
          </div>

          <div className="about-card">
            <h3>Database</h3>
            <p>SQL, SQL Server</p>
          </div>

          <div className="about-card">
            <h3>Tools</h3>
            <p>Postman, VS Code, Git</p>
          </div>

        </div>

      </div>

    </section>

  )
}

export default About