import { useContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaReply, FaRegTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const OrderReview = () => {
    // dynamic title
    useTitle('Order Review')
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const navigate = useNavigate('')
    // fetch data form server and sorting email and status
    const url = `http://localhost:5000/userdetails/pending?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('email-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // data jwt token expire check
                if(!data.error) {
                    setBooking(data)
                } else {
                    navigate('/')
                }
            })
    }, [url, navigate])
    // service delete button
    const handleItemDelete = _id => {
        // delete single service from server
        fetch(`http://localhost:5000/userdetails/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // sweet alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Service Deleted Successfully',
                    })
                }
                // filer services without clicking specific service
                const remaining = booking?.filter(book => book?._id !== _id);
                setBooking(remaining);
            })
    }
    // status change button
    const handleStatus = _id => {
        // update single service status from server
        fetch(`http://localhost:5000/userdetails/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // sweet alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Pending Approved',
                    })
                }
                // get services without clicking specific service
                const remaining = booking?.filter(book => book?._id !== _id);
                setBooking(remaining);
            })
    }
    // delete all service button
    const handleAllDelete = () => {
        // delete all services from server
        fetch(`http://localhost:5000/useralldelete/pending?email=${user?.email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // sweet alert
                    Swal.fire({
                        icon: 'success',
                        title: 'All Items Deleted',
                    })
                }
                // put empty array
                setBooking([]);
            })
    }
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-32">
            {/* top banner part */}
            <Banner></Banner>
            {/* table part */}
            <div>
                {
                    booking?.map(book => <div key={book?._id} className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    {/* single delete button */}
                                    <th>
                                        <label>
                                            <button onClick={() => handleItemDelete(book?._id)} className="btn btn-circle bg-[#444444] text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-7">
                                            <div className="avatar">
                                                {/* image */}
                                                <div className="mask rounded-lg w-36 h-36">
                                                    <img src={book?.productImg} alt="Service Photo" />
                                                </div>
                                            </div>
                                            {/* service title */}
                                            <div>
                                                <h5 className="text-[#444444] font-semibold text-xl capitalize">{book?.productTitle}</h5>
                                            </div>
                                        </div>
                                    </td>
                                    {/* price */}
                                    <td className="text-[#444444] font-semibold text-xl">${book?.productPrice}</td>
                                    {/* date */}
                                    <td className="text-[#2D2D2D] font-medium text-xl">{book?.date}</td>
                                    {/* status button */}
                                    <th className="text-right">
                                        <button onClick={() => handleStatus(book?._id)} className="btn px-5 capitalize text-white font-semibold text-xl bg-[#FF3811]">{book?.status}</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
                {/* buttons */}
                <div className="flex flex-col md:flex-row md:justify-between mt-12 text-[#444444] font-normal text-xl space-y-5 md:space-y-0">
                    <Link to={`/`} className="flex items-center justify-center gap-5"><FaReply /> Continue Shopping</Link>
                    <button onClick={handleAllDelete} className="flex items-center justify-center gap-5"><FaRegTrashAlt /> Clear Shopping Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;