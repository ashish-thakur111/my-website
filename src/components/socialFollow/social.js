import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import * as socialStyles from "./social.module.scss"

export default function SocialFollow() {
  return (
    <div>
      <ul className="tranform">
        <li>
          <a
            href="https://www.linkedin.com/in/ashish-thakur111"
            className={socialStyles.linkedIn}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/ashishthakur1110"
            className={socialStyles.facebook}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ashish___thakur"
            className={socialStyles.twitter}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ashishthakur1110"
            className={socialStyles.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
      </ul>
    </div>
  )
}
