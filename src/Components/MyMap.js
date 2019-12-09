import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <div > 
        <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
        >
        <Marker
        onClick={()=>{window.open("https://www.google.com/maps/place/The+City+School,+Quetta+Cantt+Campus-I/@30.2082979,67.038313,17z/data=!3m1!4b1!4m5!3m4!1s0x3ed2dfc4abc0130f:0x35942030febce42e!8m2!3d30.2082979!4d67.0405017")}}
        position={{ lat: props.location.lat, lng: props.location.lng }} 
        >
            </Marker>
    </GoogleMap>
        </div>
))
export default MyMapComponent