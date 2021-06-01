import React from "react"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import HeySection from "../components/heySection/heySection"
import Location from "../components/location/location"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout index="true">
      <Head title="Home" />
      <HeySection />
      <div className={indexStyles.container}>
        <div className={indexStyles.ash}>ashish</div>
        <div className={indexStyles.photo}>ashish's photo</div>
        <div className={indexStyles.map}>
          <Location
            googleMapsApiKey={process.env.G_MAPS_API_KEY}
            address={{ lat: 32.06704, lng: 76.696158 }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
