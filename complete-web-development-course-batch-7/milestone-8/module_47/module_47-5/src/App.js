// import './App.css';

// function App() {
//   const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah'];
//   return (
//     <div>
//       {
//         nayoks.map(nayok => <li>{nayok}</li>)
//       }
//       <Person name={nayoks[0]} nayika="moushumi"></Person>
//       <Person name={nayoks[1]} nayika="cheka"></Person>
//       <Person name={nayoks[2]} nayika="kopila"></Person>
//       <Friend movie="Shingam" phone="01777"></Friend>
//       <h5>New Component. Yay</h5>
//       <p>Rock mama, React mama.</p>
//       <Friend phone="01999"></Friend>
//       <Friend></Friend>
//     </div>
//   );
// }
// function Person (props) {
//   return (
//     <div className='person'>
//       <h1>{props.name}</h1>
//       <p>Nayika: {props.nayika}</p>
//     </div>
//   )
// }
// function Friend (props) {
//   return (
//     <div className='container'>
//       <h3>Name: {props.movie}</h3>
//       <p>phone: {props.phone}</p>
//     </div>
//   )
// }

// export default App;




// import './App.css';

// function App() {
//   const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah'];
//   return (
//     <div>
//       {
//         nayoks.map(nayok => <li>{nayok}</li>)
//       }
//       {
//         nayoks.map(nayok => <Person name={nayok}></Person>)
//       }
//       <Friend movie="Shingam" phone="01777"></Friend>
//       <h5>New Component. Yay</h5>
//       <p>Rock mama, React mama.</p>
//       <Friend phone="01999"></Friend>
//       <Friend></Friend>
//     </div>
//   );
// }
// function Person (props) {
//   return (
//     <div className='person'>
//       <h1>{props.name}</h1>
//       <p>Nayika: {props.nayika}</p>
//     </div>
//   )
// }
// function Friend (props) {
//   return (
//     <div className='container'>
//       <h3>Name: {props.movie}</h3>
//       <p>phone: {props.phone}</p>
//     </div>
//   )
// }

// export default App;




import './App.css';

const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'Shuvro', job: 'pathor'}
]

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah'];
  return (
    <div>
      {
        singers.map(singer => <Person name={singer.name} nayika={singer.job}></Person>)
      }
    </div>
  );
}
function Person (props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}
function Friend (props) {
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;