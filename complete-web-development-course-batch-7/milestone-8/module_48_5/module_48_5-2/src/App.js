import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <District name="NoaKhali" special="bivag"></District>
      <District name="Brahmonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="Moyna and moti"></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}
function District (props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;