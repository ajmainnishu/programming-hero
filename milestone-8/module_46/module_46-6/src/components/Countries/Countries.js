import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';





// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     useEffect(() => {
//         fetch('https://restcountries.eu/rest/v2/all')
//         .then(res => res.json())
//         .then(data => setCountries(data))
//     }, [])
//     return (
//         <div>
//             <h2>Total Countries: {countries.length}</h2>
//             {
//                 countries.map(country => <Country 
//                     name={country.name}
//                     capital={country.capital}
//                     population={country.population}>
//                 </Country>)
//             }
//         </div>
//     );
// };





// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     useEffect(() => {
//         fetch('https://restcountries.eu/rest/v2/all')
//         .then(res => res.json())
//         .then(data => setCountries(data))
//     }, [])
//     return (
//         <div>
//             <h2>Total Countries: {countries.length}</h2>
//             {
//                 countries.map(country => <Country 
//                     country = {country}>
//                 </Country>)
//             }
//         </div>
//     );
// };





export default Countries;