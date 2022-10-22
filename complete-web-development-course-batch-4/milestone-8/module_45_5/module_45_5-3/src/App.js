import { useEffect, useState } from 'react';
import './App.css';





// function App() {
//     return (
//         <div>
//             <LoadUsers></LoadUsers>
//             <Mycomponent brand="Apple" price="50000"></Mycomponent>
//             <Mycomponent brand="Microsoft" price="10000"></Mycomponent>
//             <Mycomponent brand="Google" price="0"></Mycomponent>
//         </div>
//     );
// }
// function LoadUsers() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setUsers(data))
//     }, [])
//     return (
//         <div>
//             <h1>Users Loaded: {users.length}</h1>
//             {
//                 users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
//             }
//         </div>
//     )
// }
// function User(props) {
//     return (
//         <div className="user">
//             <h2>Name: {props.name}</h2>
//             <h4>Email: {props.email}</h4>
//             <p>Phone: {props.phone}</p>
//         </div>
//     )
// }
// function Mycomponent(props) {
//     const [points, setPoints] = useState(1);
//     const myStyle = {
//         backgroundColor: 'lightblue',
//         border: '3px solid blue',
//         margin: '20px',
//         borderRadius: '5px',
//         padding: '10px'
//     }
//     const handleAddPoints = () => {
//         const newPoints = points * 2;
//         setPoints(newPoints);
//     }
//     return (
//     <div style={myStyle}>
//         <h1 className="component">Yo Yo {props.brand}!!!!</h1>
//         <h4>Asking money, price: {props.price}, I have points: {points}</h4>
//         <button onClick={handleAddPoints}>Add Points</button>
//         <p style={{color: 'purple', fontSize: '30px'}}>I can write my component</p>
//     </div>
//     );
// }





export default App;