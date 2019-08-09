class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }   

    updateMarkers(benches) {
        const currentMarkers = Object.keys(this.markers);
        const currentBenches = this.createBenchesObj(benches);

        Object.keys(this.markers).forEach(benchId => {
            if ( currentBenches[benchId] === undefined ) {
                this.removeMarker(this.markers[benchId]);
            }
        });

        benches.forEach( bench => {
            if ( !currentMarkers.includes(bench.id) ) {

                this.createMarkerFromBench(bench);
            }
        });

        debugger
    }

    createMarkerFromBench(bench) {
        const { lat, lng } = bench;

        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map,
            title: bench.description,
        });

        this.markers[bench.id] = marker;
        marker.setMap(this.map);
    }

    removeMarker(marker) {
        delete this.markers[marker.id];
        marker.setMap(null);
    }

    createBenchesObj(benches) {
        const benchesObj = {};

        benches.forEach( bench => {
            benchesObj[bench.id] = bench;
        });

        return benchesObj;
    }
}

export default MarkerManager;