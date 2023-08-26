import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { clearFromDb } from '../../Utilities/fakedb';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let shippingPrice = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shippingPrice = shippingPrice + product.price;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shippingPrice + tax;
    const clearData = () => {
        clearFromDb();
        
    }
    return (
        <div className='cart-container'>
            <h5>Order Summary</h5>
            <div className='cart'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingPrice}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            <button onClick={() => clearData()}>Clear Cart&nbsp;<FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default Cart;