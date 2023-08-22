import { useState } from 'react';
import './App.css';

function App() {
  const [battery, setBattery] = useState(100);
  const decreaseNumber = () => {
    if(battery > 0) {
      setBattery(battery - 10);
    }
  }
  return (
    <div className='App'>
      <h1>Battery:{battery}</h1>
      <button onClick={decreaseNumber}>Battery Down</button>
    </div>
  );
}

export default App;