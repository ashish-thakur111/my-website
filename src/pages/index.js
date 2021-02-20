import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import EmpCard from "../components/card/card"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Container>
        <h1>Hello,</h1>
        <h2>I am Ashish, a full-stack developer</h2>
      </Container>
      <Container>
        <EmpCard />
      </Container>
      <p className="container">
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
