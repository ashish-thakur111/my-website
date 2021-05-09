import React from "react"
import { Link } from "gatsby"

import "./about.scss"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className="container">
        <h2>About me</h2>
        <p>
          I am current working as a Software Engineer on various Backend
          projects
        </p>
        <p>
          <Link to="/contact">Want to work with me? Reach out</Link>
        </p>
      </div>
    </Layout>
  )
}

export default About
