import React from "react"
import GoogleMapReact from "google-map-react"
import { Marker } from "../marker/marker"

const isClient = typeof window !== "undefined"

const Location = props => {
  const { address, googleMapsApiKey } = props
  const lat = parseFloat(address.lat)
  const lng = parseFloat(address.lng)
  return (
    <div style={{ height: "400px", width: "100%" }}>
      {isClient && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={{
            lat: lat,
            lng: lng,
          }}
          defaultZoom={12}
        >
          <Marker lat={lat} lng={lng} text={"Ashish Thakur"} />
        </GoogleMapReact>
      )}
    </div>
  )
}

export default Location
