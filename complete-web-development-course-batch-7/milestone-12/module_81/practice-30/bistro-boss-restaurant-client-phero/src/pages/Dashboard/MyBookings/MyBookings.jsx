import { Helmet } from "react-helmet-async";
import useUserBookings from "../../../hooks/useUserBookings/useUserBookings";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";

const MyBookings = () => {
    const [userbookings, refetch] = useUserBookings();
    const [axiosSecure] = useAxiosSecure();
    // delete button
    const handleDelete = id => {
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
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // reload data
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Table Bookings has been deleted.",
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
                <title>Bistro Boss | My Bookings</title>
            </Helmet>
            {/* top section title */}
            <SectionTitle title={'MY BOOKINGS'} subTitle={'Excellent Ambience'}></SectionTitle>
            <div className="overflow-x-auto w-10/12 mx-auto mt-16 space-y-8 bg-white p-14">
                {/* info */}
                <div className='flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0'>
                    <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL ORDERS: {userbookings?.length}</p>
                </div>
                {/* table */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] rounded-t-2xl'>
                            <th className='rounded-tl-2xl'></th>
                            <th className='py-7 text-white text-base font-semibold break-words'>NAME</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>GUEST NUMBER</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>PHONE</th>
                            <th className='py-7 text-white text-base font-semibold break-words rounded-tr-2xl'>ACTION</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            userbookings.map((item, index) => <tr key={item._id}>
                                <td className='text-[#151515] font-bold text-xl'>{index + 1}</td>
                                <td className='text-[#737373] text-base font-normal break-words'>{item?.name}</td>
                                <td className='text-[#737373] text-base font-normal break-words'>{item?.guest} guest</td>
                                <td className='text-[#737373] text-base font-normal break-words'>{item?.phone}</td>
                                {/* button */}
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-[#B91C1C] rounded"><FaTrashAlt className='text-2xl text-white hover:text-black' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;