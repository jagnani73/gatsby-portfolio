import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oops!</h1>
          <Link to="/" className="btn">
            Back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
