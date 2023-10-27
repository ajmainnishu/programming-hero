import { useContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const ManageInventory = () => {
    // dynamic title
    useTitle('Manage Inventory')
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/userdetails/approved?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url])
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
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-32">
            <Banner></Banner>
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
                                    {/* email */}
                                    <td className="text-[#444444] font-semibold text-xl">${book?.email}</td>
                                    {/* date */}
                                    <td className="text-[#2D2D2D] font-medium text-xl">{book?.date}</td>
                                    {/* status button */}
                                    <th className="text-right">
                                        <button className="btn btn-outline px-5 capitalize font-semibold text-xl text-[#29B170]">{book.status}</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;