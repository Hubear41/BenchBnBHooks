import React from 'react';

const BenchIndexItem = props => {
    const { bench } = props;

    return (
        <li className="bench-index-list-item" key={bench.id}>
            <h4>{bench.description}</h4>
        </li>
    )
};

export default BenchIndexItem;