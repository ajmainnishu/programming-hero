import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../../Utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;