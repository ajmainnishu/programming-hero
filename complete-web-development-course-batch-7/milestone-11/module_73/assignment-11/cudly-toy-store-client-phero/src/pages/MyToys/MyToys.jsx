import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/usetitle";

const MyToys = () => {
    // dynamic title
    useTitle('| My Toys');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // fetch all date from email from server
    const [userBook, setUserBook] = useState([]);
    // fetch single user data from server
    const [modalInfo, setModalInfo] = useState(null)
    const url = `http://localhost:5000/toy?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setUserBook(data)
                } else {
                    navigate('/')
                }
            })
    }, [url, userBook, navigate])
    // update button
    const handleUpdate = id => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setModalInfo(data);
                // modal call
                document.getElementById('my_modal_1').showModal()
            })
    }
    // modal update button
    const handleSingleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updateData = { price, quantity, details };
        fetch(`http://localhost:5000/toy/${modalInfo._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
            })
    }
    const handleDelete = id => {
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
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = userBook.filter(toy => toy._id !== id);
                            setUserBook(remaining);
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="w-11/12 md:10/12 mx-auto my-20">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            userBook.map(toy => <tr key={toy._id} className="text-center">
                                <td className="capitalize">{toy.seller_name}</td>
                                <td className="capitalize">{toy.toy_name}</td>
                                <td className="capitalize">{toy.category}</td>
                                <td className="capitalize">{toy.price}</td>
                                <td className="capitalize">{toy.quantity}</td>
                                {/* button */}
                                <th>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleUpdate(toy._id)}>Update</button>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(toy._id)}>Delete</button>
                                    {/* modal */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            {/* modal form */}
                                            <form onSubmit={handleSingleUpdate} className="card-body grid grid-cols-1 gap-5">
                                                {/* price */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Price</span>
                                                    </label>
                                                    <input type="text" name="price" defaultValue={modalInfo?.price} placeholder="price" className="input input-bordered" />
                                                </div>
                                                {/* quantity */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Quantity</span>
                                                    </label>
                                                    <input type="text" name="quantity" defaultValue={modalInfo?.quantity} placeholder="available quantity" className="input input-bordered" />
                                                </div>
                                                {/* textarea */}
                                                <textarea name="details" defaultValue={modalInfo?.details} className="textarea textarea-bordered" placeholder="Details"></textarea>
                                                {/* button */}
                                                <div className="flex justify-evenly">
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                    <div className="form-control mt-6">
                                                        <button className="btn btn-primary">Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="text-center">
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyToys;