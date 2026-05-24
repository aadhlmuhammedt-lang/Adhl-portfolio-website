import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaHtml5
} from 'react-icons/fa'

import { motion } from 'framer-motion'


const skills = [
  { name: "React", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Node.js", level: "80%" },
  { name: "HTML/CSS", level: "95%" },
  { name: "SQL", level: "75%" },
  { name: "Flutter", level: "70%" },
]

const Skills = () => {
  return (
    <motion.section
  className="section"
  id="skills"
  initial={{ opacity:0, y:100 }}
  whileInView={{ opacity:1, y:0 }}
  transition={{ duration:1 }}
>

      <h1 className="section-title">
        Tech Stack
      </h1>
      <h2 className="bg-text">
      SKILLS
      </h2>
      <div className="floating-icons">

  <FaReact />
  <FaNodeJs />
  <FaHtml5 />

</div>
      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-box" key={index}>

            <div className="skill-info">

              <span>{skill.name}</span>
              <span>{skill.level}</span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>

        ))}

      </div>

   </motion.section>
  )
}

export default Skills