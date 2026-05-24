import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import profile from '../assets/adhl.png'

const Home = () => {

  const heroRef = useRef()

  useEffect(() => {

    gsap.fromTo(
      heroRef.current,
      {
        opacity:0,
        y:50
      },
      {
        opacity:1,
        y:0,
        duration:1.2,
        ease:'power3.out'
      }
    )

  }, [])

  return (

    <section id="home" className="section">

      <div className="hero-content" ref={heroRef}>

        <img
          src={profile}
          alt="profile"
          className="profile-img"
        />

        <h1 className="hero-title">
  ADHL MUHAMMED
</h1>

<p className="hero-sub">
  Junior Full Stack Developer specializing in
  React, Node.js, SQL, and modern web applications.
</p>

      <button onClick={() => {
         document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
        }} className="btn">
           View Projects
      </button>

        <div className="stats">

          <div>
            <h1>2+</h1>
            <p>Projects</p>
          </div>

          <div>
            <h1>1+</h1>
            <p>Years Learning</p>
          </div>

          <div>
            <h1>10+</h1>
            <p>Technologies</p>
          </div>

        </div>
              </div>

    </section>

  )
}

export default Home