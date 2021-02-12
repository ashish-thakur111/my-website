import React from "react"
import { Link } from "gatsby"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
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
