import { useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';





function App() {
  const [house, setHouse] = useState(2)
  const ornaments = 'diamond Ring'
  return (
    <div className="App">
      <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        <GrandFather house={house} ornaments={ornaments}></GrandFather>
    </div>
  );
}





export default App;