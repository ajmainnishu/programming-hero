import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;