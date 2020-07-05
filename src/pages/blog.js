import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        strapiId
        slug
        title
        desc
        date(formatString: "MMMM Do, YYYY")
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
      }
    }
  }
`

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog page" />
      </section>
    </Layout>
  )
}

export default Blog
