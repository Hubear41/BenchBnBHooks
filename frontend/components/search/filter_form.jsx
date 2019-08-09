import React from 'react';

const FilterForm = props => {
    
    const handleChange = filter => {
        return e => {
            props.updateFilter(filter, e.target.value);
        }
    }

    return (
        <div className="filter-form">
            <label htmlFor="minSeating" className="max-seating">Min Seating:
                <input type="number"
                    onChange={handleChange('minSeating')}
                    min="1"
                    max="10"
                    value={props.minSeating}
                />
            </label>  
            <label htmlFor="maxSeating" className="max-seating">Max Seating: 
                <input type="number"
                       onChange={handleChange('maxSeating')}
                       value={props.maxSeating}
                       min="1"
                       max="10"
                        />
            </label>  
        </div>
    )
}

export default FilterForm;