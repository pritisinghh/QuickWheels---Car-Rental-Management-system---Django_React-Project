import React, { useState } from "react";
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
} from "@react-google-maps/api";

var center = { lat: 0.0, lng: 0.0 };

function Map(props) {

    let [map, setMap] = useState(null);
    const [showMap, setShowMap] = useState(false);
    var [center1, setCenter] = useState({});

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAt9NOiQw6QXGBWBuXr4D_hLROXmcnPbgg",
        libraries: ["places"],
    });

    const showLocation = (event) => {
        center = { lat: +props.latitude, lng: +props.longitude }
        setCenter(center);
        // console.log(center1);
        // console.log(props.lattitude, props.longitude);
        // var center = { lat: 10.222, lng: 86.5264 };
        setShowMap(!showMap)
    };

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps...";


    return (
        <div>
            <div className="login-button" style={{marginLeft: "220px"}}>
                <button onClick={(event) => showLocation(event)} type="submit" class="btn">Show Location</button>
            </div>
            {showMap &&
                <div style={{ height: '400px', width: '50%', marginLeft: "50px" }}>
                    <h1> </h1>
                    <GoogleMap
                        center={center1}
                        zoom={15}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                        onLoad={(map) => setMap(map)}>
                        <Marker
                            position={{ lat: center1.lat, lng: center1.lng }}
                            map={map}
                        />
                        {/*{center1.lat && center1.lng && <Marker position = {center1} />}*/}
                    </GoogleMap>
                </div>
            }
        </div>
    )

}

export default Map;
