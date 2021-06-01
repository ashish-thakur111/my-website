import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import markerStyles from "./marker.module.scss"
export const Marker = ({ text }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        size="3x"
        className={markerStyles.marker}
      />
      <p className={markerStyles.text}>{text}</p>
    </div>
  )
}
