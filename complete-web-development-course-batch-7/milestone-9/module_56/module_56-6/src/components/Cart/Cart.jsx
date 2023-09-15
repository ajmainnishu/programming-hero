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