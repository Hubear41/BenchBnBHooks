import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches }) => (
    <div className="bench-index-wrapper">
        <BenchMap />
        <BenchIndex fetchBenches={fetchBenches} benches={benches} />
    </div>
);

export default Search;