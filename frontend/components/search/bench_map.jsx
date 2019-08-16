import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const BenchMap = props => {
    const mapRef = useRef(); // this is the similar to an instance variable
    const mapNodeRef = useRef();
    const markerManagerRef = useRef();
    const { benches } = props;
    const position = benches.length === 1 
        ? { lat: benches[0].lat, lng: benches[0].lng } 
        : { lat: 37.7758, lng: -122.435 };

    // adds click listeners to all google markers
    const addListenersToMarkers = () => {
        benches.forEach(bench => {
            markerManagerRef.current.markers[bench.id].addListener("click", () => {
                props.history.push(`/benches/${bench.id}`);
            });
        });
    }

    // add event listener for map bounds when component mounts
    useEffect(() => {
        // set the map to show SF
        const mapOptions = {
            center: position, // this is SF
            zoom: 13,
            draggable: benches.length === 1 ? false : true,
        };

        // wrap this.mapNode in a Google Map
        mapRef.current = new google.maps.Map(mapNodeRef.current, mapOptions);
        markerManagerRef.current = new MarkerManager(mapRef.current);
        markerManagerRef.current.updateMarkers(benches);

        // get bounds from the google maps object
        const getMapBounds = map => {
            const latLng = map.getBounds();
            const northEast = {
                lat: latLng.getNorthEast().lat(),
                lng: latLng.getNorthEast().lng(),
            };
            const southWest = {
                lat: latLng.getSouthWest().lat(),
                lng: latLng.getSouthWest().lng(),
            };

            return { northEast, southWest };
        }

        // get coordinates from click and put them as a search query
        const grabCoordinates = e => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            props.history.push({
                pathname: "benches/new",
                search: `lat=${lat}&lng=${lng}`,
            });
        }

        // update bounds whenever map is moved
        mapRef.current.addListener('idle', () => {
            props.updateFilter("bounds", getMapBounds(mapRef.current));
            addListenersToMarkers();
        });

        if (benches.length > 1) {
            // redirect to create form on click
            mapRef.current.addListener('click', e => grabCoordinates(e));
        }
    }, []);

    // updates marker manager whenever benches change
    useEffect( () => {
        if ( markerManagerRef.current !== null) {
            markerManagerRef.current.updateMarkers(benches);
            addListenersToMarkers();
        }
    }, [benches]);

    return (
        <div id="map-container" ref={map => mapNodeRef.current = map}></div> // put back ref after incorporating maps
        // <div id="map-container" style={{ background: "black"}}></div> // for offline editing
    )
}

export default withRouter(BenchMap);