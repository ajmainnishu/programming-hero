import React, { useEffect, useState } from 'react';
import PersonDetail from '../PersonDetail/PersonDetail';
import './Persons.css'
import getTotalPrice from '../../Utilities/calculate';

const Persons = () => {
    const [persons, setPersons] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    }, [])
    const totalPrice = getTotalPrice(persons);
    return (
        <div>
            <h1>Persons Biography</h1>
            <h4>Total Price: {totalPrice}</h4>
            <div className='persons-container'>
                {
                    persons.map(person => <PersonDetail person={person} key={person.id}></PersonDetail>)
                }
            </div>
        </div>
    );
};

export default Persons;