// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(0);
//   const clickHandlerDecrease = () => {
//     setCounter(prevState =>  prevState - 1);
//   }
//   return (
//     <div>
//     </div>
//   )
// }

// export default App


// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(0);
//   const clickHandlerDecrease = () => {
//     setCounter(counter - 1);
//   }
//   return (
//     <div>
//     </div>
//   )
// }

// export default App




// conditional rendering
// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [condition, setCondition] = useState(false);
//   const clickHandler = () => {
//     setCondition(true);
//   }
//   return (
//     <div>
//       <button onClick={clickHandler}>Set condition</button>
//       {condition && <p>Hello!</p>}
//     </div>
//   )
// }

// export default App




// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [mode, setMode] = useState(false);
//   const clickHandler = () => {
//     setMode(!mode);
//   }
//   const toggledClass = mode ? light : dark;
//   return (
//     <div className={toggledClass}>
//       <h3>Toogle flags</h3>
//       <button onClick={clickHandler}>Set condition</button>
//     </div>
//   )
// }

// export default App




import { useState } from 'react'
import './App.css'

function App() {
  const [starship, setStarship] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = async () => {
    setIsLoading(true);
    const response = await fetch('');
    const data = await response.json();
    setStarship(JSON.stringify(data, null, "\t"));
    setIsLoading(false);
  }
  let message = '';
  if (isLoading) {
    message = <p>Getting date...</p>;
  }
  return (
    <div>
      <button onClick={clickHandler}>Get Millennium Falcon data</button>
      <p>{message}</p>
      <pre>{starship}</pre>
    </div>
  )
}

export default App