import React, { useEffect, useRef } from 'react';

const BenchMap = props => {
    const mapRef = useRef(); // this is the similar to an instance variable
    const mapNodeRef = useRef();

    // settings when map mounts
    useEffect( () => {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        mapRef.current = new google.maps.Map(mapNodeRef.current, mapOptions);
    });

    return (
        <div id="map-container" ref={map => mapNodeRef.current = map}></div> // put back ref after incorporating maps
    );
}

export default BenchMap;