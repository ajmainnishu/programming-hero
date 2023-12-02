import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='my-20'>
            <h2 className='text-[#151515] text-[40px] font-normal text-center'>PAYMENT</h2>
            {/* stripe payment card */}
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;