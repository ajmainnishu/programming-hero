import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useFetchData from "../../../hooks/useFetchData/useFetchData";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useFetchData();
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

                axiosSecure.delete(`/menu/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
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
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            {/* top section title */}
            <SectionTitle title={'MANAGE ALL ITEMS'} subTitle={'Hurry Up!'}></SectionTitle>
            <div className="overflow-x-auto w-10/12 mx-auto mt-16 space-y-8 bg-white p-14">
                {/* info */}
                <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL ITEMS: {menu?.length}</p>
                {/* table */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] rounded-t-2xl'>
                            <th className='rounded-tl-2xl'></th>
                            <th className='py-7 text-white text-base font-semibold break-words'>ITEM IMAGE</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>ITEM NAME</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>PRICE</th>
                            <td className='py-7 text-white text-base font-semibold break-words'>ACTION</td>
                            <td className='py-7 text-white text-base font-semibold break-words rounded-tr-2xl'>ACTION</td>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td className='text-[#151515] font-bold text-xl'>{index + 1}</td>
                                <td><img src={item?.image} className="w-[75px] h-[75px]" alt="images" /></td>
                                <td className='text-[#737373] text-base font-normal break-words'>{item?.name}</td>
                                <td className='text-[#737373] text-base font-normal break-words'>${item?.price}</td>
                                {/* update button */}
                                <td>
                                    <Link to={`updatemanageitems/${item._id}`} className="btn bg-[#D1A054] rounded"><FaExternalLinkAlt className='text-2xl text-white hover:text-black' /></Link>
                                </td>
                                {/* delete button */}
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-[#B91C1C] rounded"><FaTrashAlt className='text-2xl text-white hover:text-black' /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;