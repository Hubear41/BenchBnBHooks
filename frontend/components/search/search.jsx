import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

const Search = ({ benches, fetchBenches, updateFilter, minSeating, maxSeating }) => (
    <div className="bench-index-wrapper">
        <BenchMap benches={benches} updateFilter={updateFilter}/>
        <div className="bench-list-and-filter">
            <FilterForm minSeating={minSeating} maxSeating={maxSeating} updateFilter={updateFilter} />
            <BenchIndex benches={benches} fetchBenches={fetchBenches} />
        </div>
    </div>
);

export default Search;