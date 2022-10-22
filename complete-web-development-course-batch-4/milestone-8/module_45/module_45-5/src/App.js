import './App.css';





// function App() {
//   const nayok = ['Rubel', 'Bappi', 'Sakib'];
//   return (
//     <div>
//       <Person name={nayok[0]} nayika="Moushumi"></Person>
//       <Person name={nayok[1]} nayika="Moushumi"></Person>
//       <Person name={nayok[2]} nayika="Moushumi"></Person>
//     </div>
//   );
// }
// function Person(props) {
//   const person = {
//     backgroundColor: 'skyblue',
//     border: '3px solid lightsalmon',
//     margin: '20px',
//     borderRadius: '10px',
//     textAlign: 'center'
//   }
//   return (
//     <div style={person}>
//       <h1>Name: {props.name}</h1>
//       <h4>Nayika: {props.nayika}</h4>
//     </div>
//   );
// }





// function App() {
//   const nayoks = ['Rubel', 'Bappi', 'Sakib', 'Shove', 'Bappa'];
//   return (
//     <div>
//       <ul>{nayoks.map(nayok => console.log(nayok))}</ul>
//     </div>
//   );
// }





// function App() {
//   const nayoks = ['Rubel', 'Bappi', 'Sakib', 'Shove', 'Bappa'];
//   return (
//     <div>
//       <ul>
//         {
//           nayoks.map(nayok => <li>{nayok}</li>)
//         }
//       </ul>
//     </div>
//   );
// }





// function App() {
//   const cinemas = [
//     {nayok: 'Nisho', nayika: 'Tisha'},
//     {nayok: 'Apurbo', nayika: 'Mehzabin'},
//     {nayok: 'Tahsan', nayika: 'Mithila'}
//   ];
//   return (
//     <div>
//       {
//         cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
//       }
//     </div>
//   );
// }
// function Cinema(props) {
//   return (
//     <div className="person">
//       <h1>Nayok: {props.nayok}</h1>
//       <h3>Nayika: {props.nayika}</h3>
//     </div>
//   );
// }





export default App;