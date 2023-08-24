import React from 'react';
import './PersonDetail.css'
import { localStorageClear, removeLocalStorage, setLocalStorage } from '../../Utilities/fakedb';

const PersonDetail = (props) => {
    const {name, price, id} = props.person;
    const addToCart = id => {
        setLocalStorage(id);
    }
    const removeToCart = id => {
        removeLocalStorage(id);
    }
    const allClear = () => {
        localStorageClear();
    }
    return (
        <div className='person'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add Cart</button>
            <button onClick={() => removeToCart(id)}>Remove Cart</button>
            <button onClick={() => allClear()}>All Clear</button>
        </div>
    );
};

export default PersonDetail;