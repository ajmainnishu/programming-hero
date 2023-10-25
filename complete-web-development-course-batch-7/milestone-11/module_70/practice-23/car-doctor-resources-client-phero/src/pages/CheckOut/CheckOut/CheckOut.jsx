import { useContext } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import useTitle from "../../../hooks/useTitle";

const CheckOut = () => {
    // dynamic title
    useTitle('Checkout')
    const { user } = useContext(AuthContext);
    // fetch single data
    const product = useLoaderData();
    //  order conform button
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const customerName = form.customerName.value;
        const email = form.email.value;
        const date = form.date.value;
        const productTitle = form.title.value;
        const message = form.message.value;
        const status = "pending"
        const productImg = product.img;
        const productPrice = product.price;
        const personDetails = { customerName, email, date, productTitle, productImg, productPrice, message, status };
        // post user data into mongodb
        fetch('http://localhost:5000/userdetails', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(personDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // sweet alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Added',
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-32">
            <Banner></Banner>
            <form onSubmit={handleOrder} className="space-y-6 p-10 md:p-24 bg-[#F3F3F3] rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* customer name */}
                    <input type="text" name="customerName" placeholder="Customer name here" className="input input-bordered w-full" defaultValue={user.displayName} />
                    {/* email */}
                    <input type="email" name="email" placeholder="Email here" className="input input-bordered w-full" defaultValue={user.email} readOnly />
                    {/* date */}
                    <input type="date" name="date" className="input input-bordered w-full" required />
                    {/* service title */}
                    <input type="text" name="title" placeholder="Service Name here" className="input input-bordered w-full" defaultValue={product.title} readOnly />
                </div>
                {/* message */}
                <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                <button className="btn capitalize text-xl btn-block font-semibold bg-[#FF3811] border-none text-white rounded-lg">Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;