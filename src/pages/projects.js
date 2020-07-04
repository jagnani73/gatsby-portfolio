import React from "react"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        id
        github
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          title
          id
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return <Projects projects={projects} title="all projects" />
}

export default ProjectsPage
