// import React from 'react';
// import './Cosmetic.css'

// const Cosmetic = (props) => {
//     const {name, price, id} = props.cosmetic;
//     const addToCartWithParam = () => addToCart(id);
//     const addToCart = (id) => {
//         console.log('item added', id);
//     }
//     return (
//         <div className='product'>
//             <h2>Buy this: {name}</h2>
//             <p>Only for: ${price}</p>
//             <p><small>it has id: {id}</small></p>
//             <button onClick={addToCartWithParam}>Add to cart</button>
//         </div>
//     );
// };

// export default Cosmetic;


import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) => {
        console.log('item added', id);
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