import React from 'react';

const Country = (props) => {
    const {name, flags, region, area, population} = props.country;
    return (
        <div className='card py-3'>
            <h2>{name.common}</h2>
            <img style={{width: '200px' , margin: 'auto'}} src={flags.png} alt="national flag" />
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
            <p>Population: {[population]}</p>
        </div>
    );
};

export default Country;