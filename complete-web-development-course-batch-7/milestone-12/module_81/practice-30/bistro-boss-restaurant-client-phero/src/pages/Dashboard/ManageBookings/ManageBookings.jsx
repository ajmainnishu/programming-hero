import { Helmet } from "react-helmet-async";
import useManageBookings from "../../../hooks/useManageBookings/useManageBookings";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaCheck } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const ManageBookings = () => {
    const [axiosSecure] = useAxiosSecure();
    const [bookings, refetch] = useManageBookings();
    // update button
    const handleUpdate = id => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Booked"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/bookings/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Successfully Booked",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="bg-[#f6f6f6] pt-12 pb-36">
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | Manage Bookings</title>
            </Helmet>
            {/* title */}
            <SectionTitle title={'MANAGE ALL BOOKINGS'} subTitle={'At a Glance'}></SectionTitle>
            <div className="overflow-x-auto w-10/12 mx-auto mt-16 space-y-8 bg-white p-14">
                {/* info */}
                <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL ITEMS: {bookings?.length}</p>
                {/* table */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] rounded-t-2xl'>
                            <th className='rounded-tl-2xl py-7 text-white text-base font-semibold break-words'>USER EMAIL</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>PHONE NUMBER</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>BOOKING DATE</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>BOOKING TIME</th>
                            <td className='py-7 text-white text-base font-semibold break-words'>ACTIVITY</td>
                            <td className='py-7 text-white text-base font-semibold break-words rounded-tr-2xl'>ACTION</td>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            bookings.map((item) => <tr key={item._id}>
                                <td className='text-[#737373] font-normal text-base break-words'>{item?.email}</td>
                                <td className='text-[#737373] font-normal text-base break-words'>{item?.phone}</td>
                                <td className='text-[#737373] font-normal text-base break-words'>{item?.date}</td>
                                <td className='text-[#737373] font-normal text-base break-words'>{item?.time}</td>
                                <td className='font-bold text-base break-words capitalize'>
                                    {
                                        item?.status === 'pending' ? <span className="text-[#AE7B2B]">Pending</span> : <span className="text-[#287855]">Done</span>
                                    }
                                </td>
                                {/* update button */}
                                <td>
                                    {
                                        item?.status === 'pending' ? <button onClick={() => handleUpdate(item._id)} className="btn bg-[#80E2B7] border-0 btn-circle"><FaCheck className='text-2xl text-white hover:text-black' /></button>
                                            : <button className="btn bg-[#287855] btn-circle border-0 hover:bg-[#287855] hover:cursor-default"><FaCheck className='text-2xl text-white' /></button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBookings;