import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"
import "../../styles/index.scss"

const Layout = (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer template={props.template} index={props.index} />
    </div>
  )
}

export default Layout
