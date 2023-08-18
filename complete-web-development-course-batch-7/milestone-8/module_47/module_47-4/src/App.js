import './App.css';

function App() {
  return (
    <div>
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="BappRaz" nayika="cheka"></Person>
      <Person nayika="kopila"></Person>
      <Friend movie="Shingam" phone="01777"></Friend>
      <h5>New Component. Yay</h5>
      <p>Rock mama, React mama.</p>
      <Friend phone="01999"></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person (props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}
function Friend (props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;