import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Title from "./Title"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const [value, setValue] = useState(0)

  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.strapiId}
              className={`job-btn ${index === value && " active"}`}
              onClick={() => {
                setValue(index)
              }}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
