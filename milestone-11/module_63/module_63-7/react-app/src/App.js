import { useRef } from 'react';
import { useEffect, useState } from 'react';
import './App.css';





function App() {
  const [users, setUsers] = useState([])
  const nameRef = useRef()
  const emailRef = useRef()
  useEffect(() => {
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  const handleAddUser = e => {
    console.log(nameRef.current.value)
    const name = nameRef.current.value;
    const email = emailRef.current.value
    const newUser = {name: name, email: email}
    fetch('http://localhost:5000/user', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then()
    e.preventDefault()

  }
  return (
    <div>
      <h2>Found Users: {users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} name="name" id="name" placeholder="name" />
        <input type="email" ref={emailRef} name="email" id="email" placeholder="email" />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id}, name: {user.name}, email:{user.email}</li>)
        }
      </ul>
    </div>
  );
}





export default App;