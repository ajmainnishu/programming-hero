import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers ()  {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <p>Lenght: {users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User (props) {
  return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;