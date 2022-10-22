import React from 'react';





const Cart = (props) => {
    const {cart} = props
    const total = cart.reduce((previous, product) => previous + product.price, 0)
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10
    const grandTotal = total + shipping + tax
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    )
};





export default Cart;