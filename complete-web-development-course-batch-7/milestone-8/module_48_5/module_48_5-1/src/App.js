import './App.css';

function App() {
  return (
    <div className='App'>
      <District name="NoaKhali" special="vibag"></District>
      <District name="Brahmonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="Moyna and moti"></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'gray',
  margin: '20px',
  borderRadius: '20px'
}
function District (props) {
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
    </div>
  )
}

export default App;