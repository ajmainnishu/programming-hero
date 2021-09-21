import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';





// function App() {
//     return (
//         <div>
//             <Countries></Countries>
//         </div>
//     );
// }
// function Countries() {
//     const [countries, setCountries] = useState([])
//     useEffect(() => {
//         fetch('https://restcountries.eu/rest/v2/all')
//         .then(res => res.json())
//         .then(data => setCountries(data))
//     }, [])
//     return (
//         <div>
//             <h2>Traveling around the world!!</h2>
//             <h4>Countries Available: {countries.length}</h4>
//             {
//                 countries.map(country => <Country name={country.name}
//                 capital={country.capital} flag={country.flag}></Country>)
//             }
//         </div>
//     )
// }
// function Country(props) {
//     return(
//         <div className="template">
//             <h2>Name: {props.name}</h2>
//             <h4>Capital: {props.capital}</h4>
//             <img className="flag" src={props.flag} alt="" />
//         </div>
//     )
// }





export default App;