// import './App.css'
// import { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     document.getElementById('hello').addEventListener('click', function () {
//         console.log('document id use only useeffect');
//     })
//   }, [])
//   return (
//     <div>
//       <button id='hello'>Button</button>
//     </div>
//   )
// }

// export default App




// import './App.css'
// import { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     setTimeout(() => {
//       console.log('time use only in useeffect');
//     }, 1000);
//   }, [])
//   return (
//     <div>
//     </div>
//   )
// }

// export default App




// import './App.css'
// import { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     console.log('all the time render, first render and update');
//   })
//   return (
//     <div>
//     </div>
//   )
// }

// export default App


// import './App.css'
// import { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     console.log('only once, first render only');
//   }, [])
//   return (
//     <div>
//     </div>
//   )
// }

// export default App


// import './App.css'
// import { useEffect } from 'react'

// function App() {
//   const variable = 'ajmainnishu';
//   useEffect(() => {
//     console.log(`on ${variable} update, update only`);
//   }, [variable])
//   return (
//     <div>
//     </div>
//   )
// }

// export default App




// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => clearInterval(id);
//   }, [count])
//   return (
//     <div>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App




// import './App.css'
// import { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('');
//       const data = await response.json();
//       console.log(data);
//     };
//     fetchData();
//   }, [])
//   return (
//     <div>
//     </div>
//   )
// }

// export default App




// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {
//   const [input, setInput] = useState('');
//   const [isValid, setIsValid] = useState(false);
//   const inputHandler = e => {
//     setInput(e.target.value);
//   }
//   useEffect(() => {
//     if (input.length < 5 || /\d/.text(input)) {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//     }
//   }, [input])
//   return (
//     <div>
//     </div>
//   )
// }

// export default App




// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.body.style.background = 'red'
//     return () => {
//       document.body.style.background = 'blue'
//     };
//   })
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Count ++</button>
//     </div>
//   )
// }

// export default App




import './App.css'
import { useEffect} from 'react'

function App() {
  useEffect(() => {
    effect();
    return () => {
      cleanup();
    }
  }, [])
  return (
    <div>
    </div>
  )
}

export default App