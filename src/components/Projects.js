import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Project from "./Project"

const Projects = props => {
  return (
    <section className="section projects">
      <Title title={props.title} />
      <div className="section-center projects-center">
        {props.projects.map((project, index) => (
          <Project key={project.id} index={index} {...project} />
        ))}
      </div>
      {props.showLink && (
        <Link to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
