import { useEffect, useState } from 'react';
import './App.css';





function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Found Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id}, name: {user.name}, email:{user.email}</li>)
        }
      </ul>
    </div>
  );
}





export default App;