import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const BenchForm = props => {
    const [description, updateDescption] = useState("");
    const [seats, updateSeats] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        const benchInfo = {
            description,
            seats,
            lat: props.lat,
            lng: props.lng,
        };

        props.createBench(benchInfo).then( () => props.history.push("/"));
    }

    return (
        <div className="bench-form-wrapper">
            <h1>Create a new Bench</h1>

            <form className="bench-form" onSubmit={handleSubmit}>
                <label htmlFor="description">Description: 
                    <input type="text"
                           className="bench-form-input"
                           onChange={e => updateDescption(e.target.value)}
                           value={description}
                            />
                </label>
                <label htmlFor="seats">Seats: 
                    <input type="number"
                           className="bench-form-input"
                           min="1"
                           max="10"
                           onChange={e => updateSeats(e.target.value)}
                           value={seats}
                            />
                </label>
                <label htmlFor="lat">Latitude: 
                    <input type="text"
                           disabled={true}
                           className="bench-form-input"
                           value={props.lat}
                            />
                </label>
                <label htmlFor="lng">Longitude: 
                    <input type="text"
                           disabled={true}
                           className="bench-form-input"
                           value={props.lng}
                            />
                </label>

                <input type="submit" value="Create Bench"/>
            </form>
        </div>
    )
}

export default withRouter(BenchForm);