import React from "react"
import { Link } from "gatsby"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>I am currently working</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out</Link>
      </p>
    </Layout>
  )
}

export default About
