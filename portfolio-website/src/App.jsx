import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './components/style.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import Skills from './components/Skill'

function App() {
  useEffect(() => {

  ScrollReveal().reveal('.section',{
    distance:'80px',
    duration:1000,
    easing:'ease-in-out',
    origin:'bottom',
    interval:200
  })

},[])
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Resume />
      <Contact />
    </>
  )
}

export default App