import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import "./location.scss"

const Location = props => {
  const position = [
    parseFloat(props.address.lat),
    parseFloat(props.address.lng),
  ]
  if (typeof window !== "undefined") {
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Ashish Thakur</Popup>
        </Marker>
      </MapContainer>
    )
  }
}

export default Location
