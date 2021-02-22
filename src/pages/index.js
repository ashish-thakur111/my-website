import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import ImageCarousel from "../components/carousel/carousel"
import IndexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout index="true">
      <Head title="Home" />
      <ImageCarousel />
      <Container fluid>
        <Row>
          <Col className={IndexStyles.col}>
            <h1>Hello,</h1>
            <h2>I am Ashish, a full-stack developer!</h2>
          </Col>
          <Col>
            <div class="text-center">
              <Image
                src="ashish.jpg"
                alt="ashish"
                roundedCircle
                fluid
                className={IndexStyles.pic}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <p className="container">
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
