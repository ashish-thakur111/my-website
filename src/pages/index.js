import React from "react"
import { Link } from "gatsby"

import Layout from "../components/hof/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I am Ashish, a full-stack developer</h2>
      <p>
        Need a developer? <a href="/contact"> Contact me</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
