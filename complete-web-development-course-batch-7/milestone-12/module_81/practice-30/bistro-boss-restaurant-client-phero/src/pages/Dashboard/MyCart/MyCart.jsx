import useCart from '../../../hooks/useCart/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    // total price sum
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    // delete button
    const handleDelete = item => {
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
                fetch(`http://localhost:5000/carts/${item._id}`, {
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
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            {/* top section title */}
            <SectionTitle title={'WANNA ADD MORE?'} subTitle={'My Cart'}></SectionTitle>
            <div className="overflow-x-auto w-10/12 mx-auto mt-16 space-y-8 bg-white p-14">
                {/* info */}
                <div className='flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0'>
                    <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL ORDERS: {cart?.length}</p>
                    <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL PRICE: ${totalPrice}</p>
                    <Link to={`/dashboard/payment`}><button className='btn bg-[#D1A054] text-white text-xl font-cinzel font-bold'>PAY</button></Link>
                </div>
                {/* table */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] rounded-t-2xl'>
                            <th className='rounded-tl-2xl'></th>
                            <th className='py-7 text-white text-base font-semibold break-words'>ITEM IMAGE</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>ITEM NAME</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>PRICE</th>
                            <th className='py-7 text-white text-base font-semibold break-words rounded-tr-2xl'>ACTION</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td className='text-[#151515] font-bold text-xl'>{index + 1}</td>
                                <td><img src={item?.image} className="w-[75px] h-[75px]" alt="images" /></td>
                                <td className='text-[#737373] text-base font-normal break-words'>{item?.name}</td>
                                <td className='text-[#737373] text-base font-normal break-words'>${item?.price}</td>
                                {/* button */}
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn bg-[#B91C1C] rounded"><FaTrashAlt className='text-2xl text-white hover:text-black' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;