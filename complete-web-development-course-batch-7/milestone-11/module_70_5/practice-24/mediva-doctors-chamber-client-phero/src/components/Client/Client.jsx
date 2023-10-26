import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Client = () => {
    const { user } = useContext(AuthContext);
    const [doctors, setDoctors] = useState(null);
    // email fetch data
    let url = `http://localhost:5000/doctorsPaid?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [url, doctors])
    // paid button
    const handlePay = (id) => {
        fetch(`http://localhost:5000/doctorsPaid/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Paid' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Pay Successfully");
                    const remaining = doctors.filter(doctor => doctor._id !== id);
                    const updated = doctors.find(doctor => doctor._id === id);
                    const newBooking = [updated, ...remaining];
                    setDoctors(newBooking);
                }
            })
    }
    return (
        <div className="">
            <div className="overflow-x-auto w-9/12 mx-auto py-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User Info</th>
                            <th>Doctor Info</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {/* mapping doctors */}
                    {
                        doctors?.map(doctor => <tbody key={doctor._id}>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="font-bold">{doctor?.name}</div>
                                    <div className="text-sm opacity-50">{doctor?.email}</div>
                                </td>
                                <td>
                                    {doctor.doctorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{doctor.expert}</span>
                                </td>
                                <td>{doctor.date}</td>
                                <th>
                                    <button onClick={() => handlePay(doctor._id)} className="btn btn-ghost btn-xs">{doctor.status ? <span className="text-blue-500 font-bold">{doctor.status}</span> : 'Pay'}</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>User Info</th>
                            <th>Doctor Info</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Client;