import React from "react"
import { Link } from "gatsby"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import HeySection from "../components/heySection/heySection"
import IndexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout index="true">
      <Head title="Home" />
      <HeySection />
    </Layout>
  )
}

export default IndexPage
