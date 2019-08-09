import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches, updateFilter }) => (
    <div className="bench-index-wrapper">
        <BenchMap benches={benches} updateFilter={updateFilter}/>
        <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
);

export default Search;