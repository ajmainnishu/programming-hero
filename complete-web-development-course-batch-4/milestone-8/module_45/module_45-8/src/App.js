import { useEffect, useState } from 'react';
import './App.css';





// function App() {
//     return (
//         <div>
//             <ExternalUsers></ExternalUsers>
//         </div>
//     );
// }
// function ExternalUsers() {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(data => setUsers(data))
//     }, [])
//     return (
//         <div>
//             <h3>External Users</h3>
//             <p>Total Users: {users.length}</p>
//             {
//                 users.map(user => <User name={user.name} email={user.email}>{user.name}</User>)
//             }
//         </div>
//     )
// }
// function User(props) {
//     return (
//         <div>
//             <h2>name: {props.name}</h2>
//             <p>email: {props.email}</p>
//         </div>
//     )
// }





export default App;