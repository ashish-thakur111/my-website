import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SocialFollow from "../socialFollow/social"

import footerStyles from "./footer.module.scss"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <footer
      className={
        props.template || props.index
          ? footerStyles.relFooter
          : footerStyles.footer
      }
    >
      <div>
        Created by {data.site.siteMetadata.description}, &copy; 2021
        <SocialFollow />
      </div>
    </footer>
  )
}

export default Footer
