import React, { useState, useEffect } from 'react';
import BenchIndexItem from './bench_index_item';

const BenchIndex = props => {
    // fetches all benches on inital load
    useEffect( () => {
        props.fetchBenches();
    }, []);

    const { benches } = props;
    const benchItems = benches.map( bench => {
        return <BenchIndexItem bench={bench} />;
    })

    return (
        <ul className="bench-index-list">
            {benchItems}
        </ul>
    );
}

export default BenchIndex;