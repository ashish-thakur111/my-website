import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <Container>
        <strong>
          <h2 style={{ margin: "0px 0px 16px" }}>About me</h2>
        </strong>
        <p>I am currently working</p>
        <p>
          <Link to="/contact">Want to work with me? Reach out</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default About
