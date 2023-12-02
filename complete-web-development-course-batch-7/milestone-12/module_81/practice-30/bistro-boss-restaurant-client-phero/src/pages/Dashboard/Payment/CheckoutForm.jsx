import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, price }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post(`/create-payment-intent`, { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])
    // button
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            toast(error.message);
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            toast(confirmError);
        }
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                orderStatus: 'done',
                itemName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
        }
    };
    return (
        <div className="text-center">
            {/* payment field */}
            <form className="w-5/6 md:w-3/6 mt-8 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },

                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/* button */}
                <button className="btn btn-primary mt-4 btn-wide capitalize" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;