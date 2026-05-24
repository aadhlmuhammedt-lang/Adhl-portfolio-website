const Resume = () => {

  return (

    <section id="resume" className="section">

      <h1 className="section-title">
        Resume
      </h1>

      <div className="resume-container">

        {/* EDUCATION */}

        <div className="resume-card">
          <h2>Education</h2>
          <h3>Bachelor's Degree in Computer Applications (Pursuing)</h3>
          <p>
            Pursuing undergraduate studies while building practical
            experience in full stack web development,
            frontend technologies, backend systems,
            and responsive application design.
          </p>
        </div>

        {/* EXPERIENCE */}

        <div className="resume-card">

          <h2>Experience</h2>

          <h3>Full Stack Developer Intern</h3>

          <p>
            Worked on React and Angular based web applications,
            API integration, frontend UI development,
            debugging, and responsive design.
          </p>

        </div>

        {/* CERTIFICATIONS */}

        <div className="resume-card">

          <h2>Certifications</h2>

          <p>
            Full Stack Development Course
          </p>

          <p>
            React & Node.js Development
          </p>

        </div>

      </div>

      {/* DOWNLOAD BUTTON */}

      <a href="/Adhl Muhammed cv.pdf" download>
        <button className="btn">
          Download Resume
        </button>
      </a>

    </section>

  )
}

export default Resume