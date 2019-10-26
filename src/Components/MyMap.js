import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <div > 
        <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
        >
        <Marker 

        position={{ lat: props.location.lat, lng: props.location.lng }} 
        />
    </GoogleMap>
        </div>
))
export default MyMapComponent