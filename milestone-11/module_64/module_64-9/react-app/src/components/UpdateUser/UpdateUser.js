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
    return (
        <div>
            <h2>Update: {user.name}</h2>
            <p><small>{id}</small></p>
        </div>
    );
};





export default UpdateUser;