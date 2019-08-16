import React, { useEffect } from 'react';
import BenchMap from '../search/bench_map';

const BenchShow = props => {
    const { bench } = props;

    // fetch bench on load
    useEffect( () => {
        props.fetchBench(props.match.params.benchId);
    }, []);

    const handleClick = () => {
        props.history.push("/");
    }

    if ( bench === undefined ) return null;

    return (
        <main className="bench-show-wrapper">
            <BenchMap benches={ [bench] } updateFilter={props.updateFilter} />

            <article className="bench-show-details">
                <h1>{bench.description}</h1>

                <span>Latitude: {bench.lat}</span>
                <span>Longitude: {bench.lng}</span>

                <button onClick={handleClick}>Back to All</button>
            </article>

        </main>
    )
}

export default BenchShow;