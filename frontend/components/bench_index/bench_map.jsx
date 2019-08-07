import React, { useEffect, useRef } from 'react';
import MarkerManager from '../../util/marker_manager';

const BenchMap = props => {
    const mapRef = useRef(); // this is the similar to an instance variable
    const mapNodeRef = useRef();
    const markerManagerRef = useRef();
    const { benches } = props;

    // settings when map first mounts
    useEffect( () => {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        mapRef.current = new google.maps.Map(mapNodeRef.current, mapOptions);
        markerManagerRef.current = new MarkerManager(mapRef);
        markerManagerRef.current.updateMarkers(benches);
    });

    // updates marker manager whenever benches change
    useEffect( () => {
        if ( markerManagerRef.current !== null) {
            markerManagerRef.current.updateMarkers(benches);
        }
    }, [benches])

    return (
        <div id="map-container" ref={map => mapNodeRef.current = map}></div> // put back ref after incorporating maps
    );
}

export default BenchMap;