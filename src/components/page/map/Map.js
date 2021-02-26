import React from 'react';
import {useGoogleMaps} from "react-hook-google-maps";

const Map = () => {
    const {ref, map, google} = useGoogleMaps(
        // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
        "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
        // NOTE: even if you change options later
        {
            center: {lat:11.335155, lng:106.109886},
            zoom: 13
        }
    );
    console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
    console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)

    return (
        <div className="map-google">
            <div ref={ref} style={{width: "100vw", height:"30vh"}}/>
        </div>

    );
};

export default Map;