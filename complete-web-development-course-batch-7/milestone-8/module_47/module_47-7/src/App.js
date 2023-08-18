// import { useState } from 'react';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Counter>

//       </Counter>
//     </div>
//   );
// }
// function Counter () {
//   const [count, setCount] = useState(33);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button>Increase</button>
//     </div>
//   )
// }

// export default App;




// import { useState } from 'react';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Counter>

//       </Counter>
//     </div>
//   );
// }
// function Counter () {
//   const [count, setCount] = useState(55);
//   const increaseCount = () => {
//     const newCount = count + 1;
//     setCount(newCount)
//   }
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//     </div>
//   )
// }

// export default App;


import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Counter>

      </Counter>
    </div>
  );
}
function Counter () {
  const [count, setCount] = useState(55);
  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;