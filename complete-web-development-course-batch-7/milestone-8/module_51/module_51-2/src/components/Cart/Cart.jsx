// import './Cart.css'

// const Cart = (props) => {
//     const cart = props.cart;
//     return (
//         <div>
//             <h4>Order Summary</h4>
//             <p>Selected Items: {cart.length}</p>
//         </div>
//     );
// };

// export default Cart;


// import './Cart.css'

// const Cart = (props) => {
//     const {cart} = props
//     return (
//         <div>
//             <h4>Order Summary</h4>
//             <p>Selected Items: {cart.length}</p>
//         </div>
//     );
// };

// export default Cart;


import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    for (const product of cart) {
        total += product.price
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;