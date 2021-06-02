import React from "react"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import HeySection from "../components/heySection/heySection"
import Location from "../components/location/location"
import Svg from "../../static/svg-1.svg"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout index="true">
      <Head title="Home" />
      <HeySection />
      <div className={indexStyles.container}>
        <div className={indexStyles.dev}>
          <img src={Svg} alt="dev" className={indexStyles.svg} />
        </div>
        <div className={indexStyles.ash}>
          Tech Stack
          <ul>
            <li>Java</li>
            <li>Kubernetes</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
      <Location
        address={{ lat: 32.06704, lng: 76.696158 }}
        sty={indexStyles.map}
      />
    </Layout>
  )
}

export default IndexPage
