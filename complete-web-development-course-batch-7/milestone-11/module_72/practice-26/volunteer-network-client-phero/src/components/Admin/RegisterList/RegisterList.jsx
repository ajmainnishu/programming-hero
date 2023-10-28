import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const RegisterList = () => {
    // website title dynamic
    useTitle('Register List -');
    // get register get state
    const [registers, setRegisters] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/register')
            .then(res => res.json())
            .then(data => setRegisters(data))
    }, [registers])
    // register delete button
    const handleRegisterDelete = id => {
        // sweetalert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/register/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // sweetalert
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        // toastify
                        toast(error.message);
                    })
            }
        })
    }
    return (
        <div>
            <h2 className="text-[#0C0C0C] text-xl font-roboto font-medium py-7 ps-9">Volunteer register list</h2>
            <div className="bg-[#F4F7FC] ps-8 pt-6 pe-14 pb-20">
                <div className="overflow-x-auto px-4 py-6 bg-white rounded-2xl">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#F5F6FA]">
                            <tr className="border-0">
                                <th className="text-[#686868] font-roboto font-normal text-base">Name</th>
                                <th className="text-[#686868] font-roboto font-normal text-base">Email ID</th>
                                <th className="text-[#686868] font-roboto font-normal text-base">Register date</th>
                                <th className="text-[#686868] font-roboto font-normal text-base">Volunteer list</th>
                                <th className="text-[#686868] font-roboto font-normal text-base text-center">Action</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            {
                                registers.map(register => <tr key={register._id} className="border-0">

                                    <td className="text-black font-roboto font-normal text-base">{register.name}</td>
                                    <td className="text-black font-roboto font-normal text-base">{register.email}</td>
                                    <td className="text-black font-roboto font-normal text-base">{register.date}</td>
                                    <td className="text-black font-roboto font-normal text-base">{register.organize}</td>
                                    {/* delete button */}
                                    <th className="p-1.5 text-center">
                                        <button onClick={() => handleRegisterDelete(`${register._id}`)} className="p-2 text-xl border-0 bg-[#FF444A] text-white rounded hover:bg-[white] hover:text-[black]"><FaRegTrashAlt /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterList;