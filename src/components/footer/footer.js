import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = (props) => {
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
      className={props.template ? footerStyles.relFooter : footerStyles.footer}
    >
      <div className="container" className={footerStyles.spanCenter}>
        <span className="text-muted">
          Created by {data.site.siteMetadata.description}, &copy; 2021
        </span>
      </div>
    </footer>
  )
}

export default Footer
