class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }   

    updateMarkers(benches) {
        const currentMarkers = Object.keys(this.markers);

        benches.forEach( bench => {
            if ( !currentMarkers.includes(bench.id) ) {
                this.createMarkerFromBench(bench);
            }
        });
    }

    createMarkerFromBench(bench) {
        const { lat, lng } = bench;

        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map,
            title: bench.description,
        });

        this.markers[bench.id] = marker;
    }
}

export default MarkerManager;