import React from "react"
import { Link } from "gatsby"

import Layout from "../components/hof/layout"

const About = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>I am currently working</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out</Link>
      </p>
    </Layout>
  )
}

export default About
