// import React from 'react';
// import './Country.css'

// const Country = (props) => {
//     return (
//         <div className='country'>
//             <h2>Country Name: {props.country.name.common}</h2>
//             <p>Population: {props.country.population}</p>
//             <p><small>Area: {props.country.area}</small></p>
//         </div>
//     );
// };

// export default Country;




import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, region} = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;