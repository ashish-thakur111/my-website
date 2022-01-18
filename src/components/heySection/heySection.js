import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"

import { Button } from "../button/button"
import "./heySection.scss"

const HeySection = () => {
  return (
    <div className="hey-container">
      <video src="../../../static/vid.mp4" autoPlay loop muted />
      <h1>ASHISH THAKUR</h1>
      <p>Technology geek and Software Engineer</p>
      <div className="hey-btns">
        <Link to="/about" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            ABOUT ME
          </Button>
        </Link>
        <Link to="/contact" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            CONTACT ME{" "}
            <FontAwesomeIcon icon={faAddressBook} className="fa-address-book" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeySection
