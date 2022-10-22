import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';





const UpdateUser = () => {
    const {id} = useParams()
    const [user, setUser]  = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    const handleNameChange = e => {
        const updateName = e.target.value
        const updatedUser = {name: updateName, email: user.email}
        setUser(updatedUser)
    }
    const handleEmailChange = e => {
        const updateEmail = e.target.value
        const updatedUser = {name: user.name, email: updateEmail}
        setUser(updatedUser)
    }
    const handleUpdateUser = e => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                alert('Updated Succesfully')
                setUser({})
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Update: {user.name}</h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} placeholder="name" />
                <input type="email" onChange={handleEmailChange} value={user.email || ''} placeholder="email" />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};





export default UpdateUser;