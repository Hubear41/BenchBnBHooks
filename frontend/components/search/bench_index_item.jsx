import React from 'react';
import { withRouter } from 'react-router-dom';

const BenchIndexItem = props => {
    const { bench } = props;
    
    const handleClick = () => {
        props.history.push(`/benches/${bench.id}`);
    }

    return (
        <li className="bench-index-list-item" 
            onClick={handleClick}
            key={bench.id}
        >
            <h4>{bench.description}</h4>
        </li>
    )
};

export default withRouter(BenchIndexItem);