// const Cart = ({cart, handleRemoveFromCart}) => {
//     let message;
//     if (cart.length === 0) {
//         message = <p>Please add some products</p>
//     } else {
//         message = <div>
//             <h3>Borolox</h3>
//             <p><small>Thanks for giving your money</small></p>
//         </div>
//     }
//     return (
//         <div>
//             <h2>Order Summary: {cart.length}</h2>
//             {message}
//             {
//                 cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
//             }
//         </div>
//     );
// };

// export default Cart;


// const Cart = ({cart, handleRemoveFromCart}) => {
//     return (
//         <div>
//             <h2>Order Summary: {cart.length}</h2>
//             {cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>}
//             {
//                 cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
//             }
//         </div>
//     );
// };

// export default Cart;


// const Cart = ({cart, handleRemoveFromCart}) => {
//     return (
//         <div>
//             <h2>Order Summary: {cart.length}</h2>
//             {
//                 cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
//             }
//             {cart.length === 2 && <p>Double bonanza!!!</p>}
//         </div>
//     );
// };

// export default Cart;


// const Cart = ({cart, handleRemoveFromCart}) => {
//     return (
//         <div>
//             <h2>Order Summary: {cart.length}</h2>
//             {
//                 cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
//             }
//             {cart.length ===3 || <h3>Tinta to hoilo na!!</h3>}
//         </div>
//     );
// };

// export default Cart;




import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold color ${cart.length === 3 ? 'purple' : 'yellow'}`}>Something</p>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;