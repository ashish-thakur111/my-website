import React from "react"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import HeySection from "../components/heySection/heySection"

const IndexPage = () => {
  return (
    <Layout index="true">
      <Head title="Home" />
      <HeySection />
    </Layout>
  )
}

export default IndexPage
