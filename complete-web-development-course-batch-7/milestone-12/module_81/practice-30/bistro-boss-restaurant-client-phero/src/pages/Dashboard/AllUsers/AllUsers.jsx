import { Helmet } from "react-helmet-async";
import useUser from "../../../hooks/useUser/useUser";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers, FaUserGraduate } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [users, refetch] = useUser();
    // update button
    const handleUpdate = user => {
        // sweet alert
        Swal.fire({
            title: "Are you sure to Make Admin?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch data server
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            // reload data
                            refetch();
                            Swal.fire({
                                title: `${user.name} is an admin`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    // delete button
    const handleDelete = user => {
        // sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch data server
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // reload data
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='bg-[#f6f6f6] pt-12 pb-20'>
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            {/* top section title */}
            <SectionTitle title={'MANAGE ALL USERS'} subTitle={'How many??'}></SectionTitle>
            <div className="overflow-x-auto w-10/12 mx-auto mt-16 space-y-4 bg-white p-12">
                {/* info */}
                <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL ORDERS: {users?.length}</p>
                {/* table */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] rounded-t-2xl'>
                            <th className='rounded-tl-2xl'></th>
                            <th className='py-7 text-white text-base font-semibold break-words'>NAME</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>ITEM EMAIL</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>ROLE</th>
                            <th className='py-7 text-white text-base font-semibold break-words rounded-tr-2xl'>ACTION</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td className='text-[#151515] font-bold text-xl'>{index + 1}</td>
                                <td className='text-[#737373] text-base font-normal break-words'>{user?.name}</td>
                                <td className='text-[#737373] text-base font-normal break-words'>{user?.email}</td>
                                <td className="tooltip tooltip-left" data-tip={user.role === 'admin' ? 'Admin' : 'User'}>
                                    <button onClick={() => handleUpdate(user)} className="btn bg-[#D1A054] rounded">{user.role === 'admin' ? <FaUserGraduate className='text-2xl' /> : <FaUsers className='text-2xl text-white' />}</button>
                                </td>
                                {/* delete button */}
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn bg-[#B91C1C] rounded"><FaTrashAlt className='text-2xl text-white hover:text-black' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;