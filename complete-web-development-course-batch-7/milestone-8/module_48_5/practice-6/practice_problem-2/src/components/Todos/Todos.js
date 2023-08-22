import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h1>Todos Length: {todos.length}</h1>
            {
                todos.map(todo => <h2>Title: <small>{todo.title}</small></h2>)
            }
        </div>
    );
};

export default Todos;